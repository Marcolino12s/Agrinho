const translations = {
  pt: {
    navWhat: "O que é?",
    navExamples: "Exemplos",
    navAdvantages: "Vantagens",
    heroTag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDescription: "Agricultura moderna e consciente.",
    whatTitle: "O que é sustentabilidade?",
    whatText: "Uso responsável dos recursos naturais.",
    examplesTitle: "Como funciona na prática?",
    ex1Title: "Economiza água e energia",
    ex2Title: "Protege fauna e flora",
    ex3Title: "Apoia produtores locais",
    adv1: "Aumenta a produção",
    adv2: "Preserva recursos naturais",
    adv3: "Reduz desperdícios",
    footerText: "© 2026 AgroNá"
  }
};

function set(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* ================= TRADUÇÃO ================= */

function apply(lang) {
  const t = translations[lang] || translations.pt;

  set("navWhat", t.navWhat);
  set("navExamples", t.navExamples);
  set("navAdvantages", t.navAdvantages);

  set("heroTag", t.heroTag);
  set("heroTitle", t.heroTitle);
  set("heroDescription", t.heroDescription);

  set("whatTitle", t.whatTitle);
  set("whatText", t.whatText);

  set("examplesTitle", t.examplesTitle);

  set("ex1Title", t.ex1Title);
  set("ex2Title", t.ex2Title);
  set("ex3Title", t.ex3Title);

  set("adv1", t.adv1);
  set("adv2", t.adv2);
  set("adv3", t.adv3);

  set("footerText", t.footerText);
}

/* ================= SAUDAÇÃO ================= */

function saudacao() {
  const h = new Date().getHours();
  if (h < 12) return "🌅 Bom dia! Bem-vindo ao AgroNá";
  if (h < 18) return "☀️ Boa tarde! Bem-vindo ao AgroNá";
  return "🌙 Boa noite! Bem-vindo ao AgroNá";
}

/* ================= SCROLL BUTTON ================= */

const btn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  const atBottom =
    window.scrollY + window.innerHeight >= document.body.scrollHeight - 80;

  btn.style.display = atBottom ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= SCROLL REVEAL ================= */

function reveal() {
  const elements = document.querySelectorAll("section, .mini-card, .projeto-card");

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

/* ================= DARK MODE ================= */

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

/* ================= INIT ================= */

document.getElementById("saudacao").textContent = saudacao();

const lang = document.getElementById("languageSelect");
apply(lang.value);
lang.addEventListener("change", () => apply(lang.value));

reveal();
