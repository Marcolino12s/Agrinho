function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   PARALLAX LEVE HERO
   ============================================================ */

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.4 + "px";
  }
});

/* ============================================================
   ATIVAR REVEAL
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
});
