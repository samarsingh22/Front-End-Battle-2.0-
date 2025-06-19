// Loader logic for animated counter, bar, and L shape
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const counter = document.querySelector('.loader-counter');
  const barFill = document.querySelector('.loader-bar-fill');
  const loaderL = document.querySelector('.loader-L');
  let progress = 5;
  let interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress > 100) progress = 100;
    counter.textContent = progress.toString().padStart(3, '0');
    barFill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Animate L shape
        barFill.style.width = '0%';
        loaderL.innerHTML = `
          <svg viewBox="0 0 120 120">
            <rect x="10" y="10" width="30" height="100" fill="#fff"/>
            <rect x="10" y="90" width="100" height="30" fill="#fff"/>
          </svg>
        `;
        loaderL.classList.add('active');
        setTimeout(() => {
          loaderL.style.transition = "transform 0.7s cubic-bezier(.4,2,.6,1)";
          loaderL.style.transform = "translate(-50%, -50%) scale(12)";
          setTimeout(() => {
            document.body.classList.add('loaded');
            setTimeout(() => {
              loader.style.display = 'none';
            }, 700);
          }, 700);
        }, 1200);
      }, 400);
    }
  }, 30);
});
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const counter = document.querySelector('.loader-counter');
  const barFill = document.querySelector('.loader-bar-fill');
  const loaderL = document.querySelector('.loader-L');
  const mainContent = document.getElementById('main-content');
  let progress = 5;
  let interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress > 100) progress = 100;
    counter.textContent = progress.toString().padStart(3, '0');
    barFill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Animate L shape
        barFill.style.width = '0%';
        loaderL.innerHTML = `
          <svg viewBox="0 0 120 120">
            <rect x="10" y="10" width="30" height="100" fill="#fff"/>
            <rect x="10" y="90" width="100" height="30" fill="#fff"/>
          </svg>
        `;
        loaderL.classList.add('active');
        setTimeout(() => {
          loader.style.opacity = 0;
          setTimeout(() => {
            loader.style.display = 'none';
            mainContent.classList.add('visible');
          }, 700);
        }, 1200);
      }, 400);
    }
  }, 30);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate work cards and sections on scroll
function animateCards() {
  document.querySelectorAll('.animate-in').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
  document.querySelectorAll('.animate-fadein').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      card.classList.add('visible');
    }
  });
  document.querySelectorAll('.animate-slidein').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateCards);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-in').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.7s, transform 0.7s';
  });
  animateCards();
});

// Contact form (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (Demo only)');
  this.reset();
});

// Light/Dark mode toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const counter = document.querySelector('.loader-counter');
  const barFill = document.querySelector('.loader-bar-fill');
  const loaderL = document.querySelector('.loader-L');
  let progress = 5;
  let interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress > 100) progress = 100;
    counter.textContent = progress.toString().padStart(3, '0');
    barFill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Animate L shape
        barFill.style.width = '0%';
        loaderL.innerHTML = `
          <svg viewBox="0 0 120 120">
            <rect x="10" y="10" width="30" height="100" fill="#fff"/>
            <rect x="10" y="90" width="100" height="30" fill="#fff"/>
          </svg>
        `;
        loaderL.classList.add('active');
        setTimeout(() => {
          loaderL.style.transition = "transform 0.7s cubic-bezier(.4,2,.6,1)";
          loaderL.style.transform = "translate(-50%, -50%) scale(12)";
          setTimeout(() => {
            document.body.classList.add('loaded');
            setTimeout(() => {
              loader.style.display = 'none';
            }, 700);
          }, 700);
        }, 1200);
      }, 400);
    }
  }, 30);
});

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const counter = document.querySelector('.loader-counter');
  const barFill = document.querySelector('.loader-bar-fill');
  const loaderL = document.querySelector('.loader-L');
  let progress = 5;
  let interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress > 100) progress = 100;
    counter.textContent = progress.toString().padStart(3, '0');
    barFill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Animate L shape
        barFill.style.width = '0%';
        loaderL.innerHTML = `
          <svg viewBox="0 0 120 120">
            <rect x="10" y="10" width="30" height="100" fill="#fff"/>
            <rect x="10" y="90" width="100" height="30" fill="#fff"/>
          </svg>
        `;
        loaderL.classList.add('active');
        setTimeout(() => {
          loaderL.style.transition = "transform 0.7s cubic-bezier(.4,2,.6,1)";
          loaderL.style.transform = "translate(-50%, -50%) scale(12)";
          setTimeout(() => {
            document.body.classList.add('loaded');
            setTimeout(() => {
              loader.style.display = 'none';
            }, 700);
          }, 700);
        }, 1200);
      }, 400);
    }
  }, 30);
});