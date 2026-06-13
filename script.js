
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
  },

  en: {
    nav1: "What is it?",
    nav2: "Examples",
    nav3: "Advantages",

    tag: "PRODUCTION & PRESERVATION",
    heroTitle: "A strong, smart and sustainable agriculture.",
    heroDesc: "Building paths between the future and present of agriculture!",

    whatTitle: "A sustainability project",
    whatText:
      "AgroNá promotes sustainable farming practices.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reduced environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Nature and production in harmony.",

    secao: "SUSTAINABILITY",
    exemplos: "How it works in practice?",

    projeto1Titulo: "Saves water and energy",
    projeto1Texto: "Reduces consumption.",
    projeto2Titulo: "Protects wildlife",
    projeto2Texto: "Preserves ecosystems.",
    projeto3Titulo: "Supports local farmers",
    projeto3Texto: "Strengthens rural economy.",

    resultadosTitulo: "Positive impacts:",
    resultado1: "production",
    resultado2: "natural resources",
    resultado3: "costs and waste",

    footer: "© 2026 AgroNá | Agrinho Project"
  },

  es: {
    nav1: "¿Qué es?",
    nav2: "Ejemplos",
    nav3: "Ventajas",

    tag: "PRODUCCIÓN & PRESERVACIÓN",
    heroTitle: "Una agricultura fuerte, inteligente y sostenible.",
    heroDesc: "Conectando el futuro y el presente de la agricultura!",

    whatTitle: "Un proyecto de sostenibilidad",
    whatText:
      "AgroNá promueve prácticas agrícolas sostenibles.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Menos daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Naturaleza y producción en armonía.",

    secao: "SOSTENIBILIDAD",
    exemplos: "Cómo funciona en la práctica?",

    projeto1Titulo: "Ahorra agua y energía",
    projeto1Texto: "Reduce consumo.",
    projeto2Titulo: "Protege fauna y flora",
    projeto2Texto: "Preserva el medio ambiente.",
    projeto3Titulo: "Apoya productores locales",
    projeto3Texto: "Fortalece la economía rural.",

    resultadosTitulo: "Impactos positivos:",
    resultado1: "la producción",
    resultado2: "los recursos naturales",
    resultado3: "los costos y desperdicios",

    footer: "© 2026 AgroNá | Proyecto Agrinho"
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

  atualizarSaudacao();
}

/* ============================================================
   SAUDAÇÃO
   ============================================================ */

function atualizarSaudacao() {
  const el = document.getElementById("saudacao");
  if (!el) return;

  const hora = new Date().getHours();
  const lang = document.getElementById("languageSelect")?.value || "pt";
  const t = translations[lang].saudacao;

  if (hora < 12) el.textContent = t.morning;
  else if (hora < 18) el.textContent = t.afternoon;
  else el.textContent = t.night;
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
   FONT SIZE
   ============================================================ */

const fontSelect = document.getElementById("fontSizeSelect");

if (fontSelect) {
  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  fontSelect.addEventListener("change", () => {
    document.documentElement.style.fontSize =
      sizes[fontSelect.value] || "16px";
  });
}

/* ============================================================
   TEMA
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? "☀️"
      : "🌙";
  });
}

/* ============================================================
   SCROLL TOP (CORRIGIDO)
   ============================================================ */

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 500 ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

const langSelect = document.getElementById("languageSelect");

if (langSelect) {
  langSelect.addEventListener("change", () => {
    applyTranslation(langSelect.value);
    atualizarSaudacao();
  });

  applyTranslation(langSelect.value);
  atualizarSaudacao();
}
