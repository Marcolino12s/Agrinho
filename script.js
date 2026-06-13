const translations = {
  pt: {
    fontSmall: "Fonte pequena",
    fontMedium: "Fonte média",
    fontLarge: "Fonte grande",

    navSobre: "O que é?",
    navExemplos: "Exemplos",
    navVantagens: "Vantagens",

    heroTag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura!",

    sobreTitulo: "O que é?",
    sobreTexto: "AgroNá promove práticas sustentáveis no campo.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    secao: "SUSTENTABILIDADE",
    exemplosTitulo: "Como funciona na prática?",

    projeto1Titulo: "Economiza recursos",
    projeto1Texto: "Redução de água e energia.",
    projeto2Titulo: "Protege a natureza",
    projeto2Texto: "Preserva fauna e flora.",
    projeto3Titulo: "Apoia produtores",
    projeto3Texto: "Fortalece a economia local.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "produção",
    resultado2: "recursos naturais",
    resultado3: "custos e desperdícios",

    saudacao: {
      manha: "🌅 Bom dia",
      tarde: "☀️ Boa tarde",
      noite: "🌙 Boa noite",
      final: "Bem-vindo ao AgroNá"
    },

    footer: "© 2026 AgroNá | Projeto Agrinho."
  },

  en: {
    fontSmall: "Small font",
    fontMedium: "Medium font",
    fontLarge: "Large font",

    navSobre: "What is it?",
    navExemplos: "Examples",
    navVantagens: "Benefits",

    heroTag: "PRODUCTION & PRESERVATION",
    heroTitle: "A strong,<br>smart and sustainable agriculture.",
    heroDesc: "Connecting the future and present of agriculture!",

    sobreTitulo: "What is it?",
    sobreTexto: "AgroNá promotes sustainable farming practices.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reduced environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Production and nature in harmony.",

    secao: "SUSTAINABILITY",
    exemplosTitulo: "How it works in practice?",

    projeto1Titulo: "Saves resources",
    projeto1Texto: "Reduces water and energy.",
    projeto2Titulo: "Protects nature",
    projeto2Texto: "Preserves wildlife.",
    projeto3Titulo: "Supports farmers",
    projeto3Texto: "Strengthens local economy.",

    resultadosTitulo: "Positive impacts",
    resultado1: "production",
    resultado2: "natural resources",
    resultado3: "costs and waste",

    saudacao: {
      manha: "🌅 Good morning",
      tarde: "☀️ Good afternoon",
      noite: "🌙 Good evening",
      final: "Welcome to AgroNá"
    },

    footer: "© 2026 AgroNá | Agrinho Project."
  },

  es: {
    fontSmall: "Fuente pequeña",
    fontMedium: "Fuente media",
    fontLarge: "Fuente grande",

    navSobre: "¿Qué es?",
    navExemplos: "Ejemplos",
    navVantagens: "Ventajas",

    heroTag: "PRODUCCIÓN Y PRESERVACIÓN",
    heroTitle: "Una agricultura fuerte,<br>inteligente y sostenible.",
    heroDesc: "Conectando el futuro y el presente de la agricultura.",

    sobreTitulo: "¿Qué es?",
    sobreTexto: "AgroNá promueve prácticas agrícolas sostenibles.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Reducción de daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Producción y naturaleza en armonía.",

    secao: "SOSTENIBILIDAD",
    exemplosTitulo: "Cómo funciona en la práctica?",

    projeto1Titulo: "Ahorra recursos",
    projeto1Texto: "Reduce agua y energía.",
    projeto2Titulo: "Protege la naturaleza",
    projeto2Texto: "Preserva fauna y flora.",
    projeto3Titulo: "Apoya productores",
    projeto3Texto: "Fortalece la economía local.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "producción",
    resultado2: "recursos naturales",
    resultado3: "costos y desperdicios",

    saudacao: {
      manha: "🌅 ¡Buenos días",
      tarde: "☀️ ¡Buenas tardes",
      noite: "🌙 ¡Buenas noches",
      final: "Bienvenido a AgroNá"
    },

    footer: "© 2026 AgroNá | Proyecto Agrinho."
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
  setText("navExemplos", t.navExemplos);
  setText("navVantagens", t.navVantagens);

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
  setText("exemplosTitulo", t.exemplosTitulo);

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

  // 🔥 SAUDAÇÃO 100% TRADUZIDA
  updateSaudacao();
}

/* =========================
   FONTE (AGORA TRADUZ CERTINHO)
========================= */

function applyFont(size) {
  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[size] || "16px";

  // traduz o texto do select também
  const lang = document.getElementById("languageSelect")?.value || "pt";
  const t = translations[lang];

  setText("optSmall", t.fontSmall);
  setText("optMedium", t.fontMedium);
  setText("optLarge", t.fontLarge);
}

/* =========================
   SAUDAÇÃO
========================= */

function getTimePeriod() {
  const h = new Date().getHours();

  if (h < 12) return "manha";
  if (h < 18) return "tarde";
  return "noite";
}

function updateSaudacao() {
  const lang = document.getElementById("languageSelect")?.value || "pt";
  const t = translations[lang];

  const period = getTimePeriod();

  const el = document.getElementById("saudacao");

  if (el) {
    el.textContent = `${t.saudacao[period]} - ${t.saudacao.final}`;
  }
}

/* =========================
   BOTÃO FLUTUANTE
========================= */

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (!btnTopo) return;

  const nearBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

  btnTopo.style.display = nearBottom ? "block" : "none";
});

btnTopo?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   REMOVER BOTÃO EXPLORAR
========================= */

document.getElementById("btnScroll")?.remove();

/* =========================
   INIT
========================= */

const langSelect = document.getElementById("languageSelect");
const fontSelect = document.getElementById("fontSizeSelect");

/* idioma */
if (langSelect) {
  const saved = localStorage.getItem("lang") || "pt";
  langSelect.value = saved;

  applyTranslation(saved);

  langSelect.addEventListener("change", () => {
    localStorage.setItem("lang", langSelect.value);
    applyTranslation(langSelect.value);
  });
}

/* fonte */
if (fontSelect) {
  const savedFont = localStorage.getItem("font") || "medium";
  fontSelect.value = savedFont;
  applyFont(savedFont);

  fontSelect.addEventListener("change", () => {
    localStorage.setItem("font", fontSelect.value);
    applyFont(fontSelect.value);
  });
}

/* saudação inicial */
updateSaudacao();

/* atualizar a cada minuto */
setInterval(updateSaudacao, 60000);
