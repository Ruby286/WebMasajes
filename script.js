let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  document.documentElement.lang = lang;
  document.querySelectorAll('.t').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val) el.innerHTML = val;
  });
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// Nav scroll anchors
document.querySelectorAll('a[href="#servicios"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('services-detail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('a[href="#sobre-mi"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('sobre-mi-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .curso-item, .contact-box, .info-item, .domicilio-note').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
