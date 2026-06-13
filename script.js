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
  pt: {
    nav1: "O que é?",
    nav2: "Exemplos",
    nav3: "Vantagens",

    tag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura!",

    whatTitle: "Um projeto sobre sustentabilidade",
    whatText:
      "AgroNá é um projeto criado para divulgar práticas sustentáveis na agricultura.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Como funciona na prática?",

    projeto1Titulo: "Economiza água e energia",
    projeto1Texto: "Reduz consumo de recursos.",
    projeto2Titulo: "Protege fauna e flora",
    projeto2Texto: "Preserva o meio ambiente.",
    projeto3Titulo: "Apoia produtores locais",
    projeto3Texto: "Fortalece a economia rural.",

    resultadosTitulo: "Impactos positivos:",
    resultado1: "a produção",
    resultado2: "os recursos naturais",
    resultado3: "os custos e desperdícios",

    footer: "© 2026 AgroNá | Projeto Agrinho",

    saudacao: {
      morning: "🌅 Bom dia!",
      afternoon: "☀️ Boa tarde!",
      night: "🌙 Boa noite!"
    }
  }
};

/* ============================================================
   APLICAR TRADUÇÃO
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

/* ============================================================
   SCROLL TOP
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (!scrollBtn) return;

  function handleScroll() {
    if (window.scrollY > 500) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  window.addEventListener("scroll", handleScroll);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  handleScroll(); // garante estado correto ao carregar
});
