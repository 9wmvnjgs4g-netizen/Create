(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const menu = window.GROWL_MENU || [];
  const business = window.GROWL_BUSINESS || {};
  const state = { category: 'House Beer', family: 'All', query: '', alcoholFree: false, limit: 8 };
  const normal = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const isAlcoholFree = drink => drink.category === 'Non-Alcoholic' || drink.name.startsWith('Mocktail') || drink.abv === '0.0%';
  const tabs = $$('.category-tabs button');
  const search = $('#menu-search');
  const results = $('#menu-results');
  const loadMore = $('#load-more');

  function renderFamilies() {
    const parent = $('#style-filters');
    parent.replaceChildren();
    const families = [...new Set(menu.filter(item => item.category === state.category).map(item => item.family).filter(Boolean))];
    if (families.length < 2) return;
    ['All', ...families].forEach(family => {
      const button = make('button', '', family === 'All' ? 'All styles' : family);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(state.family === family));
      button.addEventListener('click', () => { state.family = family; state.limit = 8; render(); });
      parent.append(button);
    });
  }

  function drinkCard(drink) {
    const article = make('article', 'drink-card');
    article.dataset.id = drink.id;
    const heading = make('div', 'drink-heading');
    heading.append(make('h3', '', drink.name));
    const price = make('div', 'drink-price', Number.isFinite(drink.price) ? `$${drink.price.toFixed(2)}` : '');
    if (drink.serving) price.append(make('small', '', drink.serving));
    heading.append(price);
    const tags = make('div', 'drink-tags');
    [drink.family || drink.category, drink.abv].filter(Boolean).forEach(tag => tags.append(make('span', '', tag)));
    article.append(heading, tags);
    if (drink.description) article.append(make('p', 'drink-description', drink.description));
    if (drink.toGo) article.append(make('span', 'togo', '16oz cans to-go'));
    if (drink.note) article.append(make('p', 'drink-note', drink.note));
    return article;
  }

  function render() {
    tabs.forEach(tab => {
      const selected = tab.dataset.category === state.category;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) results.setAttribute('aria-labelledby', tab.id);
    });
    renderFamilies();
    const query = normal(state.query.trim());
    const matches = menu.filter(drink =>
      (state.category === 'All' || drink.category === state.category) &&
      (state.family === 'All' || drink.family === state.family) &&
      (!state.alcoholFree || isAlcoholFree(drink)) &&
      (!query || normal([drink.name, drink.category, drink.family, drink.description, drink.note, drink.abv].join(' ')).includes(query))
    );
    const visible = matches.slice(0, state.limit);
    results.replaceChildren(...visible.map(drinkCard));
    $('#menu-empty').hidden = matches.length !== 0;
    results.hidden = matches.length === 0;
    loadMore.hidden = matches.length <= state.limit;
    loadMore.parentElement.hidden = loadMore.hidden;
    $('#menu-count').textContent = matches.length ? `Showing ${visible.length} of ${matches.length} drinks · ${state.category === 'All' ? 'All categories' : state.category}` : 'No matching drinks';
    $('#clear-search').hidden = !state.query && state.family === 'All' && !state.alcoholFree;
    $('#alcohol-free').checked = state.alcoholFree;
  }

  function selectCategory(category) {
    state.category = category;
    state.family = 'All';
    state.query = '';
    state.alcoholFree = false;
    state.limit = 8;
    search.value = '';
    render();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectCategory(tab.dataset.category));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) { event.preventDefault(); tabs[target].focus(); selectCategory(tabs[target].dataset.category); }
    });
  });
  search.addEventListener('input', () => {
    state.query = search.value;
    state.category = 'All';
    state.family = 'All';
    state.limit = 8;
    render();
  });
  $('#alcohol-free').addEventListener('change', event => {
    state.alcoholFree = event.target.checked;
    state.category = 'All';
    state.family = 'All';
    state.limit = 8;
    render();
  });
  function resetMenu() { selectCategory('House Beer'); search.focus({ preventScroll: true }); }
  $('#clear-search').addEventListener('click', resetMenu);
  $('#reset-menu').addEventListener('click', resetMenu);
  loadMore.addEventListener('click', () => {
    const previous = state.limit;
    state.limit += 8;
    render();
    const firstNew = results.children[previous];
    if (firstNew) { firstNew.tabIndex = -1; firstNew.focus({ preventScroll: true }); }
  });
  $$('[data-menu-search]').forEach(button => button.addEventListener('click', () => {
    state.category = 'House Beer'; state.family = 'All'; state.alcoholFree = false;
    state.query = button.dataset.menuSearch; state.limit = 8; search.value = state.query;
    render();
    $('#menu').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    search.focus({ preventScroll: true });
  }));

  const hours = business.hours || [];
  hours.forEach(item => {
    const row = make('div');
    row.append(make('dt', '', item.day), make('dd', '', item.label || item.hours || ''));
    $('#hours-list').append(row);
  });

  const nav = $('#main-nav');
  const navToggle = $('.nav-toggle');
  function closeNav() { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });
  $$('a', nav).forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeNav(); navToggle.focus(); } });
  const mq = matchMedia('(min-width: 761px)');
  mq.addEventListener('change', event => { if (event.matches) closeNav(); });
  addEventListener('scroll', () => $('.site-header').classList.toggle('scrolled', scrollY > 20), { passive: true });

  const studio = $('#studio-dialog');
  const about = $('#about-dialog');
  $('#studio-launch').addEventListener('click', () => studio.showModal());
  $$('[data-open-about]').forEach(button => button.addEventListener('click', () => about.showModal()));
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } }));

  const video = $('#hero-video');
  const videoInput = $('#video-file');
  const videoStatus = $('#video-status');
  const resetVideo = $('#reset-video');
  const pauseVideo = $('#hero-pause');
  const mediaNote = $('#hero-media-note');
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const defaultSource = video.dataset.defaultSrc;
  $('#download-film').href = defaultSource;
  let videoUrl = '';
  let videoVersion = 0;

  function syncVideoControl() {
    pauseVideo.textContent = video.paused ? 'Play film' : 'Pause film';
    pauseVideo.dataset.state = video.paused ? 'paused' : 'playing';
  }

  function playVideo(version = videoVersion) {
    video.play().catch(() => {
      if (version !== videoVersion) return;
      syncVideoControl();
      videoStatus.textContent = 'The film is ready. Use Play film on the hero to start it.';
    });
  }

  function loadVideo(source, { custom = false, notice = '' } = {}) {
    const version = ++videoVersion;
    const expectedSource = new URL(source, document.baseURI).href;
    video.onloadeddata = null;
    video.onerror = null;
    video.pause();
    video.hidden = true;
    pauseVideo.hidden = true;
    resetVideo.disabled = !custom;
    video.removeAttribute('src');
    video.load();
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    videoUrl = custom ? source : '';
    videoStatus.textContent = notice || (custom ? 'Preparing your clip locally…' : 'Preparing the original concept film…');
    mediaNote.textContent = custom ? 'Locally selected preview · independent design concept' : 'Original animated concept · not actual venue footage';
    video.setAttribute('aria-label', custom ? 'Locally selected concept video' : 'Original animated concept film');
    video.onloadeddata = () => {
      if (version !== videoVersion || video.currentSrc !== expectedSource) return;
      video.hidden = false;
      pauseVideo.hidden = false;
      syncVideoControl();
      videoStatus.textContent = custom
        ? 'Your local clip is ready. Nothing was uploaded. Close this panel to preview it.'
        : (notice ? `${notice} ` : '') + 'The original concept film is ready.';
      if (motionPreference.matches) {
        videoStatus.textContent += ' Motion is paused to match your device preference. Use Play film to watch.';
      } else {
        playVideo(version);
      }
    };
    video.onerror = () => {
      if (version !== videoVersion || video.currentSrc !== expectedSource || !video.error) return;
      if (custom) {
        videoInput.value = '';
        loadVideo(defaultSource, { notice: 'That clip could not be played. The original film has been restored.' });
        return;
      }
      video.hidden = true;
      pauseVideo.hidden = true;
      resetVideo.disabled = false;
      videoStatus.textContent = 'The film could not load. The concept image is displayed; try Restore original film to reload it.';
      mediaNote.textContent = 'Original AI concept imagery · not actual product photography';
    };
    video.src = source;
    video.muted = true;
    video.load();
  }

  resetVideo.addEventListener('click', () => {
    videoInput.value = '';
    loadVideo(defaultSource);
  });
  videoInput.addEventListener('change', () => {
    const file = videoInput.files[0];
    if (!file) return;
    if (!/\.(mp4|webm)$/i.test(file.name) || (file.type && !['video/mp4', 'video/webm'].includes(file.type))) {
      videoStatus.textContent = 'Choose an MP4 or WebM video. Your current preview has not changed.';
      videoInput.value = '';
      return;
    }
    if (file.size > 120 * 1024 * 1024) {
      videoStatus.textContent = 'This file is larger than 120 MB. Please export a smaller clip.';
      videoInput.value = '';
      return;
    }
    if (file.size === 0) {
      videoStatus.textContent = 'This file is empty. Choose another MP4 or WebM video.';
      videoInput.value = '';
      return;
    }
    loadVideo(URL.createObjectURL(file), { custom: true, notice: `Preparing “${file.name}” locally…` });
  });
  video.addEventListener('play', syncVideoControl);
  video.addEventListener('pause', syncVideoControl);
  pauseVideo.addEventListener('click', () => {
    if (video.paused) playVideo();
    else video.pause();
  });
  motionPreference.addEventListener('change', event => {
    if (event.matches) video.pause();
  });
  addEventListener('pagehide', event => {
    if (!event.persisted && videoUrl) URL.revokeObjectURL(videoUrl);
  });
  loadVideo(defaultSource);

  render();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    $$('.reveal').forEach(node => observer.observe(node));
  }
})();
