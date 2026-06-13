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
    btn: "Explorar",
    sobreTitulo: "O que é?",
    sobreTexto: "AgroNá promove práticas sustentáveis no campo, unindo produção e cuidado ambiental.",
    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos naturais.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",
    secao: "SUSTENTABILIDADE",
    exemplosTitulo: "Como funciona na prática?",
    projeto1Titulo: "Economiza recursos",
    projeto1Texto: "Redução do consumo de água e energia.",
    projeto2Titulo: "Protege a natureza",
    projeto2Texto: "Preserva fauna e flora nativa.",
    projeto3Titulo: "Apoia produtores locais",
    projeto3Texto: "Fortalece a economia regional.",
    resultadosTitulo: "Impactos positivos",
    resultado1: "produção",
    resultado2: "recursos naturais",
    resultado3: "custos e desperdícios",
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
    heroDesc: "Building bridges between the future and present of farming!",
    btn: "Explore",
    sobreTitulo: "What is it?",
    sobreTexto: "AgroNá promotes sustainable farming practices.",
    card1Titulo: "Higher production",
    card1Texto: "Smart use of natural resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reduced environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Production and nature in harmony.",
    secao: "SUSTAINABILITY",
    exemplosTitulo: "How it works in practice?",
    projeto1Titulo: "Saves resources",
    projeto1Texto: "Reduces water and energy consumption.",
    projeto2Titulo: "Protects nature",
    projeto2Texto: "Preserves wildlife and flora.",
    projeto3Titulo: "Supports local farmers",
    projeto3Texto: "Strengthens local economy.",
    resultadosTitulo: "Positive impacts",
    resultado1: "production",
    resultado2: "natural resources",
    resultado3: "waste and costs",
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
    btn: "Explorar",
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
  const lang = document.getElementById("languageSelect")?.value || "pt";

  const msgs = {
    pt: ["🌅 Bom dia!", "☀️ Boa tarde!", "🌙 Boa noite!"],
    en: ["🌅 Good morning!", "☀️ Good afternoon!", "🌙 Good evening!"],
    es: ["🌅 ¡Buenos días!", "☀️ ¡Buenas tardes!", "🌙 ¡Buenas noches!"]
  };

  let index = h < 12 ? 0 : h < 18 ? 1 : 2;

  return msgs[lang][index] + " Bem-vindo ao AgroNá.";
}

/* =========================
   BOTÃO FLUTUANTE
========================= */

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (!btnTopo) return;

  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

  btnTopo.style.display = scrollBottom ? "block" : "none";
});

if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================
   BOTÃO EXPLORAR (vai pro final)
========================= */

document.getElementById("btnScroll")?.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

/* =========================
   INIT
========================= */

const langSelect = document.getElementById("languageSelect");
const fontSelect = document.getElementById("fontSizeSelect");
const saudacao = document.getElementById("saudacao");

/* idioma */
if (langSelect) {
  const saved = localStorage.getItem("lang") || "pt";
  langSelect.value = saved;
  applyTranslation(saved);

  langSelect.addEventListener("change", () => {
    localStorage.setItem("lang", langSelect.value);
    applyTranslation(langSelect.value);
    if (saudacao) saudacao.textContent = getGreeting();
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
if (saudacao) {
  saudacao.textContent = getGreeting();
}

/* =========================
   TEMA
========================= */

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
