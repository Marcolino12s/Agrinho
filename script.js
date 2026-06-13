const translations = {
  pt: {
    fontSmall: "Fonte pequena",
    fontMedium: "Fonte média",
    fontLarge: "Fonte grande",

    navSobre: "O que é?",
    navProjetos: "Exemplos",
    navResultados: "Vantagens",

    heroTag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura.",

    sobreTitulo: "O que é sustentabilidade?",
    sobreTexto: "AgroNá promove práticas agrícolas mais conscientes e eficientes.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Como funciona na prática?",

    projeto1Titulo: "Economiza recursos",
    projeto1Texto: "Uso consciente de água e energia.",
    projeto2Titulo: "Protege biodiversidade",
    projeto2Texto: "Preserva fauna e flora nativa.",
    projeto3Titulo: "Apoia produtores locais",
    projeto3Texto: "Fortalece a economia rural.",

    resultadosTitulo: "Impactos positivos",

    resultado1Titulo: "Aumenta",
    resultado1Texto: "a produção",

    resultado2Titulo: "Preserva",
    resultado2Texto: "os recursos naturais",

    resultado3Titulo: "Reduz",
    resultado3Texto: "os custos e desperdícios",

    footerText: "© 2026 AgroNá | Projeto Agrinho."
  },

  en: {
    fontSmall: "Small font",
    fontMedium: "Medium font",
    fontLarge: "Large font",

    navSobre: "About",
    navProjetos: "Examples",
    navResultados: "Benefits",

    heroTag: "PRODUCTION & PRESERVATION",
    heroTitle: "A strong,<br>smart and sustainable agriculture.",
    heroDesc: "Building bridges between the future and present of agriculture.",

    sobreTitulo: "What is sustainability?",
    sobreTexto: "AgroNá promotes more conscious and efficient farming practices.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reduced environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Nature and production in harmony.",

    secao: "SUSTAINABILITY",
    exemplos: "How it works in practice",

    projeto1Titulo: "Saves resources",
    projeto1Texto: "Responsible use of water and energy.",
    projeto2Titulo: "Protects biodiversity",
    projeto2Texto: "Preserves native wildlife and flora.",
    projeto3Titulo: "Supports local farmers",
    projeto3Texto: "Strengthens rural economy.",

    resultadosTitulo: "Positive impacts",

    resultado1Titulo: "Increases",
    resultado1Texto: "production",

    resultado2Titulo: "Preserves",
    resultado2Texto: "natural resources",

    resultado3Titulo: "Reduces",
    resultado3Texto: "waste and costs",

    footerText: "© 2026 AgroNá | Agrinho Project."
  },

  es: {
    fontSmall: "Fuente pequeña",
    fontMedium: "Fuente media",
    fontLarge: "Fuente grande",

    navSobre: "Qué es",
    navProjetos: "Ejemplos",
    navResultados: "Ventajas",

    heroTag: "PRODUCCIÓN & PRESERVACIÓN",
    heroTitle: "Una agricultura fuerte,<br>inteligente y sostenible.",
    heroDesc: "Conectando el futuro y el presente de la agricultura.",

    sobreTitulo: "¿Qué es la sostenibilidad?",
    sobreTexto: "AgroNá promueve prácticas agrícolas más conscientes.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Menos daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Producción y naturaleza en armonía.",

    secao: "SOSTENIBILIDAD",
    exemplos: "Cómo funciona en la práctica",

    projeto1Titulo: "Ahorra recursos",
    projeto1Texto: "Uso responsable del agua y energía.",
    projeto2Titulo: "Protege biodiversidad",
    projeto2Texto: "Conserva fauna y flora nativa.",
    projeto3Titulo: "Apoya productores locales",
    projeto3Texto: "Fortalece la economía rural.",

    resultadosTitulo: "Impactos positivos",

    resultado1Titulo: "Aumenta",
    resultado1Texto: "la producción",

    resultado2Titulo: "Preserva",
    resultado2Texto: "los recursos naturales",

    resultado3Titulo: "Reduce",
    resultado3Texto: "los desperdicios y costos",

    footerText: "© 2026 AgroNá | Proyecto Agrinho."
  }
};

/* =========================
   HELPERS
========================= */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* =========================
   TRADUÇÃO
========================= */

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("navSobre", t.navSobre);
  setText("navProjetos", t.navProjetos);
  setText("navResultados", t.navResultados);

  setText("heroTag", t.heroTag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("sobreTitulo", t.sobreTitulo);
  setText("sobreTexto", t.sobreTexto);

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

  setText("resultado1Titulo", t.resultado1Titulo);
  setText("resultado1Texto", t.resultado1Texto);

  setText("resultado2Titulo", t.resultado2Titulo);
  setText("resultado2Texto", t.resultado2Texto);

  setText("resultado3Titulo", t.resultado3Titulo);
  setText("resultado3Texto", t.resultado3Texto);

  setText("footerText", t.footerText);
}

/* =========================
   FONTE
========================= */

function applyFont(size) {
  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };
  document.documentElement.style.fontSize = sizes[size] || "16px";
}

/* =========================
   SAUDAÇÃO
========================= */

function getGreeting() {
  const h = new Date().getHours();

  if (h < 12) return "🌅 Bom dia! Seja bem-vindo ao AgroNá.";
  if (h < 18) return "☀️ Boa tarde! Seja bem-vindo ao AgroNá.";
  return "🌙 Boa noite! Seja bem-vindo ao AgroNá.";
}

function updateGreeting() {
  const el = document.getElementById("saudacao");
  if (el) el.textContent = getGreeting();
}

/* =========================
   BOTÃO FLUTUANTE
========================= */

const scrollBtn = document.getElementById("scrollTopBtn");

function handleScrollButton() {
  if (!scrollBtn) return;

  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  // aparece no final da página
  if (scrollY + winHeight >= docHeight - 50) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", handleScrollButton);

/* =========================
   CONTROLES
========================= */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  const saved = localStorage.getItem("lang") || "pt";
  languageSelect.value = saved;

  applyTranslation(saved);
  updateGreeting();

  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;

    localStorage.setItem("lang", lang);
    applyTranslation(lang);
    updateGreeting();
  });
}

const fontSelect = document.getElementById("fontSizeSelect");

if (fontSelect) {
  const savedFont = localStorage.getItem("font") || "medium";
  fontSelect.value = savedFont;

  applyFont(savedFont);

  fontSelect.addEventListener("change", () => {
    applyFont(fontSelect.value);
    localStorage.setItem("font", fontSelect.value);
  });
}

/* =========================
   TEMA
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* =========================
   INIT
========================= */

updateGreeting();
handleScrollButton();
