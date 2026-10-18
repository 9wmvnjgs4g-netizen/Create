#!/usr/bin/env python3
"""Render an original 15-second motion-design concept from the supplied AI still.

Requires FFmpeg with libx264/drawtext. No external video service is called.
The footage is animated still artwork, not a recording of the restaurant.
"""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT.parent / 'artifacts'
OUT.mkdir(exist_ok=True)
FONT = '/usr/share/fonts/opentype/urw-base35/'
SERIF = FONT + 'P052-Roman.otf'
ITALIC = FONT + 'P052-Italic.otf'
SANS = FONT + 'NimbusSans-Regular.otf'

def title(text, size, y, start, end, font=SERIF, color='0xf5f1e7'):
    alpha = f"if(lt(t,{start}),0,if(lt(t,{start+.55}),(t-{start})/.55,if(lt(t,{end-.4}),1,if(lt(t,{end}),({end}-t)/.4,0))))"
    rise = f"{y}+30*(1-clip((t-{start})/.8,0,1))"
    return f"drawtext=fontfile='{font}':text='{text}':fontsize={size}:fontcolor={color}:x=(w-text_w)/2:y='{rise}':alpha='{alpha}':shadowcolor=black@0.2:shadowy=3"

filters = [
    '[0:v]split=3[a][b][c]',
    "[a]crop=300:533:1120:240,scale=1620:2880,zoompan=z='1.05+on*.0006':x='(iw-iw/zoom)*.6':y='(ih-ih/zoom)*.4':d=150:s=1080x1920:fps=30,setsar=1,format=yuv420p[v1]",
    "[b]crop=529:941:1010:0,scale=1620:2880,zoompan=z='1.10-on*.0004':x='(iw-iw/zoom)*.5':y='(ih-ih/zoom)*.5':d=168:s=1080x1920:fps=30,setsar=1,format=yuv420p[v2]",
    "[c]crop=529:941:960:0,scale=1620:2880,zoompan=z='1.01+on*.0003':x='(iw-iw/zoom)*.6':y='(ih-ih/zoom)*.4':d=168:s=1080x1920:fps=30,setsar=1,format=yuv420p[v3]",
    '[v1][v2]xfade=transition=fade:duration=0.6:offset=4.4[v12]',
    '[v12][v3]xfade=transition=fade:duration=0.6:offset=9.4[base]',
]
finish = ['vignette=angle=PI/5', 'drawbox=x=0:y=0:w=iw:h=ih:color=black@0.10:t=fill']
for i in range(64):
    finish.append(f'drawbox=x=0:y={i*12}:w=iw:h=12:color=black@{.6*(1-i/64)**1.5:.4f}:t=fill')
    finish.append(f'drawbox=x=0:y={1152+i*12}:w=iw:h=12:color=black@{.87*(i/64)**1.4:.4f}:t=fill')
finish += [
    title('THE SOUTHERN GROWL', 28, 135, 0, 15, SANS),
    title('Make time.', 145, 670, .25, 4.5),
    title('For good things.', 115, 840, .5, 4.5, ITALIC, '0xe0b96c'),
    title('A little more', 112, 1260, 4.8, 9.5),
    title('character.', 156, 1390, 5.05, 9.5, ITALIC, '0xe0b96c'),
    title('Good company.', 112, 300, 9.75, 15),
    title('Great pours.', 136, 430, 10, 15, ITALIC, '0xe0b96c'),
    title('FIND YOUR NEXT POUR', 34, 1530, 10.55, 15, SANS),
    title('GREER, SOUTH CAROLINA', 27, 1610, 10.8, 15, SANS),
    title('INDEPENDENT CONCEPT  /  ANIMATED AI ARTWORK', 19, 1750, 0, 15, SANS, '0xd5c8ad'),
    'format=yuv420p',
]
filters.append('[base]' + ','.join(finish) + '[out]')
command = [
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
    '-i', str(ROOT / 'assets/cinematic-pour.webp'),
    '-filter_complex_threads', '2', '-filter_complex', ';'.join(filters),
    '-map', '[out]', '-t', '15', '-r', '30', '-an', '-c:v', 'libx264',
    '-threads', '2', '-preset', 'medium', '-crf', '20', '-movflags', '+faststart',
    str(OUT / 'southern-growl-promo-vertical.mp4'),
]
subprocess.run(command, check=True)
print(OUT / 'southern-growl-promo-vertical.mp4')
