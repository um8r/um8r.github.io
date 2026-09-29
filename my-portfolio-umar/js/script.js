/* =========================================================
   Umar Habib — Portfolio interactions (no dependencies)
   Projects are read from js/data.js (window.PROJECTS)
   ========================================================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const CAT_LABEL = { agents: 'AI & Agents', fullstack: 'Backend & Full Stack', ml: 'ML & Data', mobile: 'Mobile' };

  /* ---------- Project order & highlight ----------
     HERO_PROJECT gets the big bento tile.
     PINNED follow it, the rest keep data.js order. */
  const HERO_PROJECT = 'hiremind';
  const PINNED = ['agentflow', 'leadgen', 'projectpilot'];

  /* ---------- Toast ---------- */
  let toastTimer;
  const toast = (msg, isError = false) => {
    const t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.toggle('error', isError); t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  };

  /* ---------- Render projects ---------- */
  const projects = window.PROJECTS || [];
  const grid = $('#projectGrid');
  const rank = p => p.id === HERO_PROJECT ? -1 : (PINNED.includes(p.id) ? PINNED.indexOf(p.id) : 99);
  const ordered = [...projects].sort((a, b) => rank(a) - rank(b));

  const links = p => `
    <div class="p-links">
      <a href="${esc(p.repo)}" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a>
      ${p.live ? `<a class="live" href="${esc(p.live)}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>` : ''}
      <button type="button" data-open="${p.id}"><i class="bi bi-arrows-angle-expand"></i> Details</button>
    </div>`;

  const badges = (list, max) => `<div class="badges">${list.slice(0, max).map(s => `<span>${esc(s)}</span>`).join('')}${list.length > max ? `<span>+${list.length - max}</span>` : ''}</div>`;

  const flags = p => `<div class="p-flags">
      ${p.id === HERO_PROJECT || p.featured ? '<span class="flag flag-featured">★ Featured</span>' : ''}
      ${p.live ? '<span class="flag flag-live">Live</span>' : ''}
    </div>`;

  const cardHTML = p => {
    const isHero = p.id === HERO_PROJECT;
    const size = isHero ? 'span-8 featured' : p.wide ? 'span-12 wide' : 'span-4';
    return `
    <article class="card project ${size} reveal" data-cat="${p.category.join(' ')}">
      <div class="p-top"><div class="icon"><i class="bi ${esc(p.icon)}"></i></div>${flags(p)}</div>
      <p class="label">${p.category.map(c => CAT_LABEL[c]).join(' · ')} · ${esc(p.year)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="p-tagline">${esc(p.tagline)}</p>
      <p class="p-summary">${esc(p.summary)}</p>
      ${isHero ? `<ul class="p-features">${p.features.slice(0, 4).map(f => `<li><i class="bi bi-check2"></i><span>${esc(f)}</span></li>`).join('')}</ul>` : ''}
      ${badges(p.stack, isHero ? 8 : 5)}
      ${links(p)}
    </article>`;
  };

  if (grid) {
    grid.innerHTML = ordered.map(cardHTML).join('');
    const c = $('#countAll'); if (c) c.textContent = projects.length;
  }

  /* ---------- Filters ---------- */
  $$('.filters button').forEach(btn => btn.addEventListener('click', () => {
    $$('.filters button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');
    const f = btn.dataset.filter;
    $$('.project').forEach(card => {
      const show = f === 'all' || card.dataset.cat.split(' ').includes(f);
      card.classList.toggle('hide', !show);
      if (show) card.classList.add('in');
    });
  }));

  /* ---------- Project details dialog ---------- */
  const modal = $('#projectModal');
  const openProject = id => {
    const p = projects.find(x => x.id === id); if (!p || !modal) return;
    $('#pmKicker').textContent = p.category.map(c => CAT_LABEL[c]).join(' · ') + ' · ' + p.year;
    $('#pmTitle').textContent = p.title;
    $('#pmBody').innerHTML = `
      <p style="color:var(--text);font-weight:500">${esc(p.tagline)}</p>
      <p>${esc(p.summary)}</p>
      <h4>KEY FEATURES</h4>
      <ul>${p.features.map(f => `<li><i class="bi bi-check2"></i><span>${esc(f)}</span></li>`).join('')}</ul>
      <h4>TECH STACK</h4>
      ${badges(p.stack, 99)}
      ${p.related ? `<h4>RELATED REPOSITORIES</h4><div class="p-links">${p.related.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener"><i class="bi bi-github"></i> ${esc(n)}</a>`).join('')}</div>` : ''}
      <div class="modal-actions">
        <a class="btn btn-primary" href="${esc(p.repo)}" target="_blank" rel="noopener"><i class="bi bi-github"></i> View on GitHub</a>
        ${p.live ? `<a class="btn btn-ghost" href="${esc(p.live)}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>` : ''}
      </div>`;
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
  };
  const closeModal = () => (modal.close ? modal.close() : modal.removeAttribute('open'));
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-open]'); if (b) openProject(b.dataset.open);
    if (e.target.closest('[data-close]')) closeModal();
  });
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); }); // click on backdrop

  /* ---------- Nav: scrolled state, active link, mobile menu ---------- */
  const navWrap = $('#nav');
  const menu = $('#navMenu');
  const toggle = $('#navToggle');
  const navLinks = $$('.nav-menu a[href^="#"]');
  const sections = $$('main section[id]');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.innerHTML = `<i class="bi ${open ? 'bi-x-lg' : 'bi-list'}"></i>`;
  };
  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('.nav-menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  const onScroll = () => {
    const y = scrollY;
    navWrap?.classList.toggle('scrolled', y > 20);
    let current = '';
    sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Reveal + counters ---------- */
  const animateCounter = el => {
    const to = +el.dataset.to;
    if (reduceMotion) { el.textContent = to; return; }
    const start = performance.now(), dur = 1200;
    const step = t => { const k = Math.min((t - start) / dur, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const reveal = el => { el.classList.add('in'); $$('.counter', el).forEach(animateCounter); };
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return; reveal(en.target); io.unobserve(en.target);
    }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 60 + 'ms'; io.observe(el); });
  } else {
    $$('.reveal').forEach(reveal);
  }

  /* ---------- Card spotlight (desktop) ---------- */
  if (matchMedia('(pointer: fine)').matches && !reduceMotion) {
    document.addEventListener('pointermove', e => {
      const card = e.target.closest?.('.card'); if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---------- Live local time (Pakistan) ---------- */
  const clock = $('#localTime');
  if (clock) {
    const fmt = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Karachi' });
    const tick = () => { clock.textContent = fmt.format(new Date()) + ' PKT'; };
    tick(); setInterval(tick, 30000);
  }

  /* ---------- Copy email ---------- */
  $$('.copy-btn').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast('Email copied to clipboard ✓'); }
    catch { toast(b.dataset.copy); }
  }));

  /* ---------- Contact form (Formspree) ---------- */
  const form = $('#contactForm');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = $('button[type=submit]', form); const old = btn.innerHTML;
    btn.disabled = true; btn.innerHTML = 'Sending… <i class="bi bi-arrow-repeat"></i>';
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (r.ok) { toast("Thanks! Your message has been sent. I'll reply soon."); form.reset(); }
      else toast('Something went wrong. Please email me directly.', true);
    } catch { toast('Network error. Please email me directly.', true); }
    finally { btn.disabled = false; btn.innerHTML = old; }
  });

  /* ---------- Footer year ---------- */
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
