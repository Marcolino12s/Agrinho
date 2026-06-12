const translations = {
  pt: {
    fontSmall: "Pequena",
    fontMedium: "Média",
    fontLarge: "Grande",
    nav1: "Sobre",
    nav2: "Projetos",
    nav3: "Resultados",
    tag: "INOVAÇÃO • PRESERVAÇÃO • TRANSFORMAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Incentivando práticas agrícolas modernas, sustentáveis e conscientes.",
    btn: "Ver mais",

    sobreTitulo: "Produzir sem destruir",
    sobreTexto: "O agro sustentável combina produtividade, inovação e preservação ambiental.",

    card1Titulo: "Menos desperdício",
    card1Texto: "Uso inteligente de recursos naturais.",
    card2Titulo: "Mais eficiência",
    card2Texto: "Tecnologia para produzir mais com menos.",
    card3Titulo: "Futuro sustentável",
    card3Texto: "Equilíbrio entre produção e natureza.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Exemplos e resultados",

    projeto1Titulo: "Cultivo sustentável",
    projeto1Texto: "Tecnologia e preservação trabalhando juntas.",
    projeto2Titulo: "Produção eficiente",
    projeto2Texto: "Menos desperdício e mais produtividade.",
    projeto3Titulo: "Solo preservado",
    projeto3Texto: "Técnicas que fortalecem o solo.",

    resultados: "Impactos positivos",
    resultado1: "Eficiência agrícola aumentada.",
    resultado2: "Redução do desperdício de água.",
    resultado3: "Uso crescente de energia limpa.",

    footer: "© 2026 AgroNova | Projeto Agrinho"
  },

  en: {
    fontSmall: "Small",
    fontMedium: "Medium",
    fontLarge: "Large",
    nav1: "About",
    nav2: "Projects",
    nav3: "Results",
    tag: "INNOVATION • PRESERVATION • TRANSFORMATION",
    heroTitle: "A strong,<br>smart and sustainable agriculture.",
    heroDesc: "Promoting modern and sustainable farming practices.",
    btn: "See more",

    sobreTitulo: "Producing without destroying",
    sobreTexto: "Sustainable agriculture combines productivity and environmental care.",

    card1Titulo: "Less waste",
    card1Texto: "Smart use of natural resources.",
    card2Titulo: "More efficiency",
    card2Texto: "Technology to produce more with less.",
    card3Titulo: "Sustainable future",
    card3Texto: "Balance between nature and production.",

    secao: "SUSTAINABILITY",
    exemplos: "Examples and results",

    projeto1Titulo: "Sustainable cultivation",
    projeto1Texto: "Technology and nature working together.",
    projeto2Titulo: "Efficient production",
    projeto2Texto: "Less waste and more yield.",
    projeto3Titulo: "Preserved soil",
    projeto3Texto: "Techniques that strengthen soil.",

    resultados: "Positive impacts",
    resultado1: "Increased agricultural efficiency.",
    resultado2: "Reduced water waste.",
    resultado3: "Growing clean energy usage.",

    footer: "© 2026 AgroNova | Agrinho Project"
  },

  es: {
    fontSmall: "Pequeña",
    fontMedium: "Mediana",
    fontLarge: "Grande",
    nav1: "Acerca",
    nav2: "Proyectos",
    nav3: "Resultados",
    tag: "INNOVACIÓN • PRESERVACIÓN • TRANSFORMACIÓN",
    heroTitle: "Una agricultura fuerte,<br>inteligente y sostenible.",
    heroDesc: "Promoviendo prácticas agrícolas modernas y sostenibles.",
    btn: "Ver más",

    sobreTitulo: "Producir sin destruir",
    sobreTexto: "La agricultura sostenible combina productividad y cuidado ambiental.",

    card1Titulo: "Menos desperdicio",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Más eficiencia",
    card2Texto: "Tecnología para producir más con menos.",
    card3Titulo: "Futuro sostenible",
    card3Texto: "Equilibrio entre producción y naturaleza.",

    secao: "SOSTENIBILIDAD",
    exemplos: "Ejemplos y resultados",

    projeto1Titulo: "Cultivo sostenible",
    projeto1Texto: "Tecnología y naturaleza trabajando juntos.",
    projeto2Titulo: "Producción eficiente",
    projeto2Texto: "Menos desperdicio y más rendimiento.",
    projeto3Titulo: "Suelo preservado",
    projeto3Texto: "Técnicas que fortalecen el suelo.",

    resultados: "Impactos positivos",
    resultado1: "Mayor eficiencia agrícola.",
    resultado2: "Menor desperdicio de agua.",
    resultado3: "Uso de energía limpia.",

    footer: "© 2026 AgroNova | Proyecto Agrinho"
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

  setText("navSobre", t.nav1);
  setText("navProjetos", t.nav2);
  setText("navResultados", t.nav3);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);
  setText("explorarBtn", t.btn);

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

  setText("resultadosTitulo", t.resultados);
  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("footerText", t.footer);
}

/* =========================
   FONTE
========================= */

function applyFontSize(size) {
  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[size] || "16px";
}

/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

/* =========================
   IDIOMA
========================= */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  const savedLang = localStorage.getItem("agronova-lang") || "pt";

  languageSelect.value = savedLang;
  applyTranslation(savedLang);

  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    applyTranslation(lang);
    localStorage.setItem("agronova-lang", lang);
  });
}

/* =========================
   FONTE SELECT
========================= */

const fontSelect = document.getElementById("fontSizeSelect");

if (fontSelect) {
  const savedFont = localStorage.getItem("agronova-font") || "medium";

  fontSelect.value = savedFont;
  applyFontSize(savedFont);

  fontSelect.addEventListener("change", () => {
    const size = fontSelect.value;
    applyFontSize(size);
    localStorage.setItem("agronova-font", size);
  });
}

/* =========================
   TEMA
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("agronova-theme") || "light";

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("agronova-theme", isDark ? "dark" : "light");
  });
}

/* =========================
   SCROLL BOTÃO
========================= */

const btn = document.getElementById("explorarBtn");

if (btn) {
  btn.addEventListener("click", () => {
    const secao = document.getElementById("projetos");
    if (secao) secao.scrollIntoView({ behavior: "smooth" });
  });
}
