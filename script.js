/* ==========================================================
   MENU MOBILE
========================================================== */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

/* ==========================================================
   BOTÃO VER MAIS (SCROLL)
========================================================== */

const btn = document.getElementById("explorarBtn");

if (btn) {
  btn.addEventListener("click", () => {
    const target = document.getElementById("praticas");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ==========================================================
   TEMA ESCURO
========================================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("agronova-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("agronova-theme", isDark ? "dark" : "light");
  });
}

/* ==========================================================
   FONT SIZE
========================================================== */

const fontSelect = document.getElementById("fontSizeSelect");

if (fontSelect) {
  const savedFont = localStorage.getItem("agronova-font") || "medium";

  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[savedFont];

  fontSelect.value = savedFont;

  fontSelect.addEventListener("change", () => {
    document.documentElement.style.fontSize = sizes[fontSelect.value];
    localStorage.setItem("agronova-font", fontSelect.value);
  });
}

/* ==========================================================
   IDIOMA (TRADUÇÃO SIMPLIFICADA)
========================================================== */

const languageSelect = document.getElementById("languageSelect");

const translations = {

  pt: {
    sobre: "Sobre",
    praticas: "Práticas",
    projetos: "Projetos",
    resultados: "Resultados",
    btn: "Ver mais"
  },

  en: {
    sobre: "About",
    praticas: "Practices",
    projetos: "Projects",
    resultados: "Results",
    btn: "See more"
  },

  es: {
    sobre: "Acerca",
    praticas: "Prácticas",
    projetos: "Proyectos",
    resultados: "Resultados",
    btn: "Ver más"
  }
};

function applyLang(lang) {
  const t = translations[lang];

  if (!t) return;

  document.querySelectorAll("#menu a")[0].textContent = t.sobre;
  document.querySelectorAll("#menu a")[1].textContent = t.praticas;
  document.querySelectorAll("#menu a")[2].textContent = t.projetos;
  document.querySelectorAll("#menu a")[3].textContent = t.resultados;

  const btn = document.getElementById("explorarBtn");
  if (btn) btn.textContent = t.btn;
}

if (languageSelect) {
  const savedLang = localStorage.getItem("agronova-lang") || "pt";

  languageSelect.value = savedLang;
  applyLang(savedLang);

  languageSelect.addEventListener("change", () => {
    applyLang(languageSelect.value);
    localStorage.setItem("agronova-lang", languageSelect.value);
  });
}
