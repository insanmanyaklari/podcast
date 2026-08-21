// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Logo marquee — duplicate the <li> items once so the CSS animation loops seamlessly.
// Only maintain ONE set of <li> items in index.html; this clones them automatically.
const logoTrack = document.querySelector('.logo-track');
if (logoTrack) {
  const items = Array.from(logoTrack.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    logoTrack.appendChild(clone);
  });
}
