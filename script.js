
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', () => {
  const pasnav = document.querySelector('.pasnav');
  if (!pasnav) return;
  if (window.scrollY > 50) {
    pasnav.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
  } else {
    pasnav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
  }
});

const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
window.addEventListener('resize', appHeight);
appHeight();

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    toggleBtn.setAttribute("aria-expanded", isActive ? "true" : "false");

    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (isActive) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });

  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
      const icon = toggleBtn.querySelector('i');
      if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    })
  );

  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('active')) return;
    const isClickInside = navLinks.contains(e.target) || toggleBtn.contains(e.target);
    if (!isClickInside) {
      navLinks.classList.remove('active');
      toggleBtn.setAttribute("aria-expanded", "false");
      const icon = toggleBtn.querySelector('i');
      if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    }
  });
});
