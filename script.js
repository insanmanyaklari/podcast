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

// Logo marquee — duplicate the <li> items enough times to fill at least 2x the
// screen width, so the loop is seamless on any monitor size (not just mobile).
// Only maintain ONE set of <li> items in index.html; this clones them automatically.
const logoTrack = document.querySelector('.logo-track');
if (logoTrack) {
  const originalItems = Array.from(logoTrack.children);

  const fillTrack = () => {
    // reset to just the original items first (in case of resize re-run)
    logoTrack.innerHTML = '';
    originalItems.forEach((item) => logoTrack.appendChild(item.cloneNode(true)));

    const containerWidth = logoTrack.parentElement.clientWidth || window.innerWidth;
    let setWidth = logoTrack.scrollWidth;
    if (setWidth === 0) return; // images not measured yet, bail (safe default already in DOM)

    // keep appending full copies of the original set until we have at least 2x
    // the container width, guaranteeing a seamless -50% loop at any screen size
    let guard = 0;
    while (logoTrack.scrollWidth < containerWidth * 2 && guard < 20) {
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        logoTrack.appendChild(clone);
      });
      guard++;
    }

    // keep scroll speed visually consistent across screen sizes (~70px/sec)
    const halfWidth = logoTrack.scrollWidth / 2;
    const pxPerSecond = 70;
    logoTrack.style.animationDuration = `${Math.max(halfWidth / pxPerSecond, 8)}s`;
  };

  // run once images have loaded so widths are accurate
  const images = logoTrack.querySelectorAll('img');
  let loaded = 0;
  const onImgReady = () => {
    loaded++;
    if (loaded >= images.length) fillTrack();
  };
  images.forEach((img) => {
    if (img.complete) onImgReady();
    else img.addEventListener('load', onImgReady);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fillTrack, 200);
  });
}
