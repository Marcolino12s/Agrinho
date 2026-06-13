function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* TRADUÇÕES */
const translations = {
  pt: {
    saudacao: {
      morning: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      afternoon: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      night: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    }
  },
  en: {
    saudacao: {
      morning: "🌅 Good morning! Welcome.",
      afternoon: "☀️ Good afternoon! Welcome.",
      night: "🌙 Good evening! Welcome."
    }
  },
  es: {
    saudacao: {
      morning: "🌅 ¡Buenos días!",
      afternoon: "☀️ ¡Buenas tardes!",
      night: "🌙 ¡Buenas noches!"
    }
  }
};

/* SAUDAÇÃO */
function obterSaudacao() {
  const hora = new Date().getHours();
  const lang = document.getElementById("languageSelect")?.value || "pt";
  const t = translations[lang].saudacao;

  if (hora < 12) return t.morning;
  if (hora < 18) return t.afternoon;
  return t.night;
}

function atualizarSaudacao() {
  setText("saudacao", obterSaudacao());
}

/* MENU MOBILE */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* LANG */
const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    atualizarSaudacao();
  });
}

/* SCROLL */
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* INIT */
atualizarSaudacao();
