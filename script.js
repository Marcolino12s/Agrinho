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
    fontSmall: "Fonte pequena",
    fontMedium: "Fonte média",
    fontLarge: "Fonte grande",

    nav1: "O que é?",
    nav2: "Exemplos",
    nav3: "Vantagens",

    tag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura!",
    btnTop: "Voltar ao topo",

    whatTitle: "Um projeto sobre sustentabilidade",
    whatText:
      "AgroNá promove práticas agrícolas sustentáveis que unem produtividade e preservação ambiental.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso eficiente de recursos para aumentar resultados.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais com tecnologia.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Como ela funciona na prática?",

    projeto1Titulo: "Economiza água e energia",
    projeto1Texto: "Reduz consumo com práticas inteligentes.",

    projeto2Titulo: "Protege fauna e flora",
    projeto2Texto: "Mantém habitats naturais preservados.",

    projeto3Titulo: "Apoia produtores locais",
    projeto3Texto: "Fortalece a produção regional sustentável.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta a produção",
    resultado2: "Preserva recursos naturais",
    resultado3: "Reduz desperdícios e custos",

    footer: "© 2026 AgroNá | Projeto Agrinho.",

    saudacao: {
      morning: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      afternoon: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      night: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    }
  },

  en: {
    fontSmall: "Small font",
    fontMedium: "Medium font",
    fontLarge: "Large font",

    nav1: "What is it?",
    nav2: "Examples",
    nav3: "Advantages",

    tag: "PRODUCTION & PRESERVATION",
    heroTitle: "A strong, smart and sustainable agriculture.",
    heroDesc: "Building bridges between the future and present of farming!",
    btnTop: "Back to top",

    whatTitle: "A sustainability project",
    whatText:
      "AgroNá promotes sustainable farming practices that combine productivity and environmental care.",

    card1Titulo: "Higher production",
    card1Texto: "Efficient resource use to increase results.",
    card2Titulo: "Lower impact",
    card2Texto: "Reducing environmental damage with technology.",
    card3Titulo: "Balance",
    card3Texto: "Harmony between nature and production.",

    secao: "SUSTAINABILITY",
    exemplos: "How it works in practice",

    projeto1Titulo: "Saves water and energy",
    projeto1Texto: "Reduces consumption through smart practices.",

    projeto2Titulo: "Protects wildlife",
    projeto2Texto: "Preserves natural habitats.",

    projeto3Titulo: "Supports local farmers",
    projeto3Texto: "Strengthens regional sustainable production.",

    resultadosTitulo: "Positive impacts",
    resultado1: "Increases production",
    resultado2: "Preserves natural resources",
    resultado3: "Reduces waste and costs",

    footer: "© 2026 AgroNá | Agrinho Project.",

    saudacao: {
      morning: "🌅 Good morning! Welcome to AgroNá.",
      afternoon: "☀️ Good afternoon! Welcome to AgroNá.",
      night: "🌙 Good evening! Welcome to AgroNá."
    }
  },

  es: {
    fontSmall: "Fuente pequeña",
    fontMedium: "Fuente media",
    fontLarge: "Fuente grande",

    nav1: "¿Qué es?",
    nav2: "Ejemplos",
    nav3: "Ventajas",

    tag: "PRODUCCIÓN & PRESERVACIÓN",
    heroTitle: "Una agricultura fuerte, inteligente y sostenible.",
    heroDesc: "Conectando el futuro y el presente de la agricultura!",
    btnTop: "Volver arriba",

    whatTitle: "Un proyecto de sostenibilidad",
    whatText:
      "AgroNá promueve prácticas agrícolas sostenibles que combinan producción y cuidado ambiental.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso eficiente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Menos daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Naturaleza y producción en armonía.",

    secao: "SOSTENIBILIDAD",
    exemplos: "Cómo funciona en la práctica",

    projeto1Titulo: "Ahorra agua y energía",
    projeto1Texto: "Reduce consumo con prácticas inteligentes.",

    projeto2Titulo: "Protege la fauna y flora",
    projeto2Texto: "Conserva hábitats naturales.",

    projeto3Titulo: "Apoya productores locales",
    projeto3Texto: "Fortalece la producción regional.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta la producción",
    resultado2: "Preserva recursos naturales",
    resultado3: "Reduce desperdicios y costos",

    footer: "© 2026 AgroNá | Proyecto Agrinho.",

    saudacao: {
      morning: "🌅 ¡Buenos días!",
      afternoon: "☀️ ¡Buenas tardes!",
      night: "🌙 ¡Buenas noches!"
    }
  }
};

/* ============================================================
   TRADUÇÃO
   ============================================================ */

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("optSmall", t.fontSmall);
  setText("optMedium", t.fontMedium);
  setText("optLarge", t.fontLarge);

  setText("navOqueE", t.nav1);
  setText("navExemplos", t.nav2);
  setText("navVantagens", t.nav3);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("voltarBtn", t.btnTop);

  setText("oQueETitulo", t.whatTitle);
  setText("oQueETexto", t.whatText);

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

function obterSaudacao() {
  const hora = new Date().getHours();
  const lang = document.getElementById("languageSelect")?.value || "pt";

  const t = translations[lang].saudacao;

  if (hora < 12) return t.morning;
  if (hora < 18) return t.afternoon;
  return t.night;
}

function atualizarSaudacao() {
  const el = document.getElementById("saudacao");
  if (el) el.textContent = obterSaudacao();
}

/* ============================================================
   FONT SIZE
   ============================================================ */

function applyFontSize(size) {
  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[size] || "16px";
}

/* ============================================================
   EVENTOS
   ============================================================ */

const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
  const savedLang = localStorage.getItem("lang") || "pt";
  languageSelect.value = savedLang;

  applyTranslation(savedLang);

  languageSelect.addEventListener("change", () => {
    localStorage.setItem("lang", languageSelect.value);
    applyTranslation(languageSelect.value);
  });
}

const fontSelect = document.getElementById("fontSizeSelect");
if (fontSelect) {
  const savedFont = localStorage.getItem("font") || "medium";
  fontSelect.value = savedFont;

  applyFontSize(savedFont);

  fontSelect.addEventListener("change", () => {
    localStorage.setItem("font", fontSelect.value);
    applyFontSize(fontSelect.value);
  });
}

/* ============================================================
   TEMA
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* ============================================================
   BOTÃO FLUTUANTE (FINAL → TOPO)
   ============================================================ */

const scrollBtn = document.getElementById("voltarBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 300;
    scrollBtn.style.display = show ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
