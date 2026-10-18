#!/usr/bin/env python3
"""Package this static concept as one portable HTML file, using only Python stdlib."""

from __future__ import annotations

import argparse
import base64
import html
from html.parser import HTMLParser
import json
import mimetypes
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]


class PortableDemo(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.parts: list[str] = []
        self.scripts: list[tuple[str, str]] = []
        self.assets: dict[str, str] = {}
        self.skip_script = False

    @staticmethod
    def is_local(url: str) -> bool:
        return bool(url and not url.startswith(("#", "//")) and not urlsplit(url).scheme)

    def path(self, url: str) -> Path:
        path = (ROOT / unquote(urlsplit(url).path)).resolve()
        if not path.is_relative_to(ROOT):
            raise ValueError(f"Resource is outside the project: {url}")
        if not path.is_file():
            raise FileNotFoundError(f"Resource is missing: {path}")
        return path

    def data_url(self, url: str) -> str:
        if url not in self.assets:
            path = self.path(url)
            mime = "text/plain;charset=utf-8" if path.suffix in (".md", ".txt") else (
                mimetypes.guess_type(path.name)[0] or "application/octet-stream"
            )
            encoded = base64.b64encode(path.read_bytes()).decode("ascii")
            self.assets[url] = f"data:{mime};base64,{encoded}"
        return self.assets[url]

    def inline_css(self, css: str) -> str:
        def replacement(match):
            url = match.group(2).strip()
            return f'url("{self.data_url(url)}")' if self.is_local(url) else match.group(0)
        return re.sub(r"url\(\s*(['\"]?)(.*?)\1\s*\)", replacement, css, flags=re.I)

    def handle_starttag(self, tag, attrs):
        self.write_tag(tag, attrs)

    def handle_startendtag(self, tag, attrs):
        self.write_tag(tag, attrs, True)

    def write_tag(self, tag, attrs, self_closing=False):
        values = dict(attrs)
        if tag == "script" and self.is_local(values.get("src", "")):
            if values.get("type") == "module":
                raise ValueError("Module scripts need a bundler; this project uses classic scripts.")
            source = values["src"]
            self.scripts.append((source, self.path(source).read_text(encoding="utf-8")))
            self.skip_script = True
            return
        if tag == "link" and self.is_local(values.get("href", "")):
            if values.get("rel") == "stylesheet":
                css = self.inline_css(self.path(values["href"]).read_text(encoding="utf-8"))
                self.parts.append(f"<style>\n{css}\n</style>")
                return
            if values.get("rel") in ("preload", "prefetch"):
                # Embedded images need no extra preload, and this avoids duplicate data URLs.
                return
        resolved = []
        downloadable = None
        for name, value in attrs:
            if value is not None and name in ("src", "href", "poster", "data-default-src") and self.is_local(value):
                if tag == "a" and name == "href":
                    downloadable = self.path(value).name
                value = self.data_url(value)
            resolved.append((name, value))
        if downloadable and "download" not in values:
            resolved.append(("download", downloadable))
        rendered = "".join(
            f" {name}" if value is None else f' {name}="{html.escape(value, quote=True)}"'
            for name, value in resolved
        )
        self.parts.append(f"<{tag}{rendered}{' /' if self_closing else ''}>")

    def handle_endtag(self, tag):
        if tag == "script" and self.skip_script:
            self.skip_script = False
            return
        if tag == "body":
            # Inline scripts do not honor defer: execute after the full page is parsed.
            for name, script in self.scripts:
                if re.search(r"['\"](?:\./)?assets/", script):
                    raise ValueError(f"{name} has a literal asset path. Read its URL from an HTML attribute instead.")
                script = re.sub(r"</script", r"<\\/script", script, flags=re.I)
                self.parts.append(f'\n<script data-original-src="{html.escape(name, quote=True)}">\n{script}\n</script>\n')
        self.parts.append(f"</{tag}>")

    def handle_data(self, data):
        if not self.skip_script:
            self.parts.append(data)

    def handle_entityref(self, name):
        self.parts.append(f"&{name};")

    def handle_charref(self, name):
        self.parts.append(f"&#{name};")

    def handle_comment(self, data):
        self.parts.append(f"<!--{data}-->")

    def handle_decl(self, decl):
        self.parts.append(f"<!{decl}>")


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--output", type=Path, default=ROOT.parent / "artifacts" / "Southern-Growl-DEMO.html")
    args = cli.parse_args()
    if not (ROOT / "assets/growl-hero.mp4").is_file():
        cli.error("Render assets/growl-hero.mp4 before building the portable demo.")
    builder = PortableDemo()
    builder.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    builder.close()
    if "assets/growl-hero.mp4" not in builder.assets:
        cli.error("The page must reference assets/growl-hero.mp4 in an HTML attribute.")
    if len(builder.scripts) != 2:
        cli.error("Expected menu-data.js and app.js. Review script loading before packaging.")
    rendered = "".join(builder.parts)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    temporary = args.output.with_suffix(".html.tmp")
    temporary.write_text(rendered, encoding="utf-8")
    temporary.replace(args.output)
    print(json.dumps({
        "output": str(args.output.resolve()),
        "bytes": args.output.stat().st_size,
        "embedded_resources": list(builder.assets),
        "scripts": [name for name, _ in builder.scripts],
        "requires_network_for_rendering": False,
    }, indent=2))


if __name__ == "__main__":
    main()
