// ── 1. Header scroll effect ──────────────────────────────────────────────
const siteHeader = document.getElementById('site-header');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 32) {
      siteHeader.classList.add('header-scrolled');
    } else {
      siteHeader.classList.remove('header-scrolled');
    }
  });
}

// ── 2. Menu hamburger mobile ─────────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── 3. Lien actif dans la nav ────────────────────────────────────────────
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav-link]').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.style.color = '#2158C6';
    link.setAttribute('aria-current', 'page');
  }
});

// ── 4. FAQ Accordéon (services.html) ─────────────────────────────────────
document.querySelectorAll('[data-faq-btn]').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-faq-btn');
    const panel = document.getElementById(targetId);
    const isOpen = !panel.classList.contains('hidden');
    // Fermer tous
    document.querySelectorAll('[data-faq-panel]').forEach(p => {
      p.classList.add('hidden');
    });
    document.querySelectorAll('[data-faq-btn]').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.classList.remove('faq-open');
    });
    // Ouvrir si était fermé
    if (!isOpen) {
      panel.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('faq-open');
    }
  });
});

// ── 5. Filtre projets (realisations.html) ────────────────────────────────
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active-filter'));
    btn.classList.add('active-filter');
    document.querySelectorAll('[data-category]').forEach(card => {
      const match = filter === 'tous' || card.getAttribute('data-category') === filter;
      card.style.display = match ? '' : 'none';
    });
  });
});

// ── 6. Validation formulaire contact ─────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const nom = document.getElementById('nom');
    const nomErr = document.getElementById('nom-error');
    if (nom && nomErr) {
      if (!nom.value.trim()) {
        nomErr.textContent = 'Votre nom est requis.';
        nomErr.classList.remove('hidden');
        nom.style.borderColor = '#C0392B';
        valid = false;
      } else {
        nomErr.classList.add('hidden');
        nom.style.borderColor = '';
      }
    }

    const email = document.getElementById('email');
    const emailErr = document.getElementById('email-error');
    if (email && emailErr) {
      if (!email.value.trim()) {
        emailErr.textContent = 'Votre e-mail est requis.';
        emailErr.classList.remove('hidden');
        email.style.borderColor = '#C0392B';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailErr.textContent = "Format d'e-mail invalide.";
        emailErr.classList.remove('hidden');
        email.style.borderColor = '#C0392B';
        valid = false;
      } else {
        emailErr.classList.add('hidden');
        email.style.borderColor = '';
      }
    }

    const besoin = document.getElementById('besoin');
    const besoinErr = document.getElementById('besoin-error');
    if (besoin && besoinErr) {
      if (!besoin.value.trim()) {
        besoinErr.textContent = 'Décrivez votre besoin.';
        besoinErr.classList.remove('hidden');
        besoin.style.borderColor = '#C0392B';
        valid = false;
      } else {
        besoinErr.classList.add('hidden');
        besoin.style.borderColor = '';
      }
    }

    if (valid) {
      const formWrapper = document.getElementById('form-wrapper');
      const formSuccess = document.getElementById('form-success');
      if (formWrapper) formWrapper.classList.add('hidden');
      if (formSuccess) formSuccess.classList.remove('hidden');
    }
  });

  // Reset bouton "Envoyer une autre demande"
  const resetBtn = document.getElementById('form-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      contactForm.reset();
      const formWrapper = document.getElementById('form-wrapper');
      const formSuccess = document.getElementById('form-success');
      if (formWrapper) formWrapper.classList.remove('hidden');
      if (formSuccess) formSuccess.classList.add('hidden');
    });
  }
}
