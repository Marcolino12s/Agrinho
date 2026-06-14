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
  pt: { /* (mantido igual ao seu, encurtado aqui por espaço) */ },
  en: { /* igual */ },
  es: { /* igual */ }
};

/* APLICAR TRADUÇÃO */
function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("saudacao", obterSaudacao());
}

/* SAUDAÇÃO */
function obterSaudacao() {
  const hora = new Date().getHours();
  const lang = document.getElementById("languageSelect")?.value || "pt";
  const t = translations[lang].saudacao;

  if (hora < 12) return t.morning;
  if (hora < 18) return t.afternoon;
  return t.night;
}

/* MENU MOBILE */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* FECHAR MENU AO CLICAR */
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* TEMA */
const themeToggle = document.getElementById("themeToggle");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

/* SCROLL TOP */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* INICIAL */
applyTranslation("pt");
