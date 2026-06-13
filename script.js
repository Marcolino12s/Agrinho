const body = document.body;

/* TEXTO */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* TRADUÇÕES */
const translations = {
  pt: {
    navSobre: "O que é?",
    navProjetos: "Exemplos",
    navResultados: "Vantagens",
    footer: "© 2026 AgroNá",

    saudacao: ["🌅 Bom dia!", "☀️ Boa tarde!", "🌙 Boa noite!"]
  },

  en: {
    navSobre: "What is it?",
    navProjetos: "Examples",
    navResultados: "Advantages",
    footer: "© 2026 AgroNá",

    saudacao: ["🌅 Good morning!", "☀️ Good afternoon!", "🌙 Good evening!"]
  },

  es: {
    navSobre: "¿Qué es?",
    navProjetos: "Ejemplos",
    navResultados: "Ventajas",
    footer: "© 2026 AgroNá",

    saudacao: ["🌅 ¡Buenos días!", "☀️ ¡Buenas tardes!", "🌙 ¡Buenas noches!"]
  }
};

/* SAUDAÇÃO */
function atualizarSaudacao(lang) {
  const hora = new Date().getHours();
  const t = translations[lang];

  let msg;
  if (hora < 12) msg = t.saudacao[0];
  else if (hora < 18) msg = t.saudacao[1];
  else msg = t.saudacao[2];

  setText("saudacao", msg);
}

/* APLICAR IDIOMA */
function aplicarIdioma(lang) {
  const t = translations[lang];

  setText("navSobre", t.navSobre);
  setText("navProjetos", t.navProjetos);
  setText("navResultados", t.navResultados);
  setText("footerText", t.footer);

  atualizarSaudacao(lang);
  localStorage.setItem("lang", lang);
}

/* FONTE */
function aplicarFonte(size) {
  const map = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = map[size];
  localStorage.setItem("font", size);
}

/* TEMA */
function toggleTheme() {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙";
}

/* MENU */
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("active");
});

/* INIT */
window.onload = () => {

  const lang = localStorage.getItem("lang") || "pt";
  const font = localStorage.getItem("font") || "medium";
  const theme = localStorage.getItem("theme") || "light";

  aplicarIdioma(lang);
  aplicarFonte(font);

  document.getElementById("languageSelect").value = lang;
  document.getElementById("fontSizeSelect").value = font;

  if (theme === "dark") {
    body.classList.add("dark-theme");
    document.getElementById("themeToggle").textContent = "☀️";
  }

  atualizarSaudacao(lang);
};

/* EVENTS */
document.getElementById("languageSelect").addEventListener("change", (e) => {
  aplicarIdioma(e.target.value);
});

document.getElementById("fontSizeSelect").addEventListener("change", (e) => {
  aplicarFonte(e.target.value);
});

document.getElementById("themeToggle").addEventListener("click", toggleTheme);

/* SCROLL */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
