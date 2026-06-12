const translations = {
  pt: {
    nav1: "Sobre",
    nav2: "Projetos",
    nav3: "Resultados",

    tag: "INOVAÇÃO • SUSTENTABILIDADE",
    heroTitle: "Agricultura forte,<br> inteligente e sustentável.",
    heroDesc: "Tecnologia e sustentabilidade trabalhando juntas no campo.",
    btn: "Ver mais",

    sobreTitulo: "Produzir sem destruir",
    sobreTexto: "O agro sustentável une produtividade, inovação e preservação ambiental.",

    card1Titulo: "Menos desperdício",
    card1Texto: "Uso consciente de recursos naturais.",
    card2Titulo: "Mais eficiência",
    card2Texto: "Produção com tecnologia e precisão.",
    card3Titulo: "Futuro sustentável",
    card3Texto: "Equilíbrio entre natureza e produção.",

    exemplos: "Exemplos de práticas",

    projeto1Titulo: "Cultivo sustentável",
    projeto1Texto: "Tecnologia aplicada ao campo.",
    projeto2Titulo: "Produção eficiente",
    projeto2Texto: "Menos desperdício e mais resultado.",
    projeto3Titulo: "Solo preservado",
    projeto3Texto: "Técnicas que mantêm a fertilidade.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Maior eficiência agrícola",
    resultado2: "Redução do desperdício de água",
    resultado3: "Uso de energia limpa",

    footer: "© 2026 AgroNova"
  },

  en: {
    nav1: "About",
    nav2: "Projects",
    nav3: "Results",

    tag: "INNOVATION • SUSTAINABILITY",
    heroTitle: "Strong, smart and sustainable agriculture.",
    heroDesc: "Technology and sustainability working together in farming.",
    btn: "See more",

    sobreTitulo: "Producing without destroying",
    sobreTexto: "Sustainable agriculture combines productivity and environmental care.",

    card1Titulo: "Less waste",
    card1Texto: "Smart use of natural resources.",
    card2Titulo: "More efficiency",
    card2Texto: "Technology-driven production.",
    card3Titulo: "Sustainable future",
    card3Texto: "Balance between nature and production.",

    exemplos: "Practices",

    projeto1Titulo: "Sustainable cultivation",
    projeto1Texto: "Technology applied to farming.",
    projeto2Titulo: "Efficient production",
    projeto2Texto: "Less waste, better results.",
    projeto3Titulo: "Preserved soil",
    projeto3Texto: "Techniques that maintain fertility.",

    resultadosTitulo: "Positive impacts",
    resultado1: "Higher agricultural efficiency",
    resultado2: "Reduced water waste",
    resultado3: "Clean energy usage",

    footer: "© 2026 AgroNova"
  },

  es: {
    nav1: "Acerca",
    nav2: "Proyectos",
    nav3: "Resultados",

    tag: "INNOVACIÓN • SOSTENIBILIDAD",
    heroTitle: "Agricultura fuerte, inteligente y sostenible.",
    heroDesc: "Tecnología y sostenibilidad trabajando juntas en el campo.",
    btn: "Ver más",

    sobreTitulo: "Producir sin destruir",
    sobreTexto: "La agricultura sostenible combina productividad y cuidado ambiental.",

    card1Titulo: "Menos desperdicio",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Más eficiencia",
    card2Texto: "Producción optimizada con tecnología.",
    card3Titulo: "Futuro sostenible",
    card3Texto: "Equilibrio entre naturaleza y producción.",

    exemplos: "Prácticas",

    projeto1Titulo: "Cultivo sostenible",
    projeto1Texto: "Tecnología aplicada al campo.",
    projeto2Titulo: "Producción eficiente",
    projeto2Texto: "Menos desperdicio, más rendimiento.",
    projeto3Titulo: "Suelo preservado",
    projeto3Texto: "Técnicas que mantienen fertilidad.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Mayor eficiencia agrícola",
    resultado2: "Reducción del desperdicio de agua",
    resultado3: "Uso de energía limpia",

    footer: "© 2026 AgroNova"
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
   MENU MOBILE
========================= */

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

if (menu && menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

/* =========================
   IDIOMA
========================= */

const langSelect = document.getElementById("languageSelect");

if (langSelect) {
  const savedLang = localStorage.getItem("lang") || "pt";

  langSelect.value = savedLang;
  applyTranslation(savedLang);

  langSelect.addEventListener("change", () => {
    applyTranslation(langSelect.value);
    localStorage.setItem("lang", langSelect.value);
  });
}

/* =========================
   FONTE
========================= */

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

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "dark") {
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

/* =========================
   BOTÃO HERO
========================= */

const btn = document.getElementById("explorarBtn");

if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  });
}
