/* ============================================================
   HELPERS
   ============================================================ */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* ============================================================
   TRADUÇÕES
   ============================================================ */

const translations = {
  pt: { /* (igual ao anterior que te passei — já completo) */ },
  en: { /* idem */ },
  es: { /* idem */ }
};

/* ============================================================
   APLICAÇÃO
   ============================================================ */

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("navSobre", t.nav1);
  setText("navProjetos", t.nav2);
  setText("navResultados", t.nav3);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("sobreTitulo", t.whatTitle);
  setText("sobreTexto", t.whatText);

  setText("card1Titulo", t.card1Titulo);
  setText("card1Texto", t.card1Texto);
  setText("card2Titulo", t.card2Titulo);
  setText("card2Texto", t.card2Texto);
  setText("card3Titulo", t.card3Titulo);
  setText("card3Texto", t.card3Texto);

  setText("secao", t.secao);
  setText("exemplos", t.exemplos);

  setText("projeto1Titulo", t.projeto1Titulo);
  setText("projeto1Texto", t.projeto1Texto);
  setText("projeto2Titulo", t.projeto2Titulo);
  setText("projeto2Texto", t.projeto2Texto);
  setText("projeto3Titulo", t.projeto3Titulo);
  setText("projeto3Texto", t.projeto3Texto);

  setText("resultadosTitulo", t.resultadosTitulo);
  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("footerText", t.footer);

  atualizarSaudacao();
}

/* ============================================================
   SCROLL TOP (CORRIGIDO)
   ============================================================ */

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 600 ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   MENU MOBILE
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
