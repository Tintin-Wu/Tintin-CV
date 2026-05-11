(function () {
  // ── Scroll-spy ──
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-20% 0px -70% 0px' }
  );

  sections.forEach((s) => spy.observe(s));

  // ── Project tab filter ──
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.project-card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.tab;
      cards.forEach((card) => {
        card.classList.toggle('hidden', card.dataset.category !== cat);
      });
    });
  });

  // ── Smooth scroll + close sidebar on mobile ──
  const sidebar = document.getElementById('sidebar');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 768) sidebar.classList.remove('open');
    });
  });

  // ── Hamburger ──
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== hamburger) {
      sidebar.classList.remove('open');
    }
  });
})();
