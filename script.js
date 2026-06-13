function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* TRADUÇÕES (mantidas simples e estáveis) */
const translations = {
  pt: {
    resultadosTitulo: "Impactos positivos",
    impactoDesc1: "Mais eficiência no uso dos recursos agrícolas.",
    impactoDesc2: "Uso consciente que protege o meio ambiente.",
    impactoDesc3: "Produção mais inteligente e econômica."
  },
  en: {
    resultadosTitulo: "Positive impacts",
    impactoDesc1: "More efficient resource use.",
    impactoDesc2: "Responsible environmental use.",
    impactoDesc3: "Smarter and cheaper production."
  },
  es: {
    resultadosTitulo: "Impactos positivos",
    impactoDesc1: "Mayor eficiencia de recursos.",
    impactoDesc2: "Uso ambiental responsable.",
    impactoDesc3: "Producción más económica."
  }
};

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("resultadosTitulo", t.resultadosTitulo);
  setText("impactoDesc1", t.impactoDesc1);
  setText("impactoDesc2", t.impactoDesc2);
  setText("impactoDesc3", t.impactoDesc3);
}

/* SCROLL REVEAL (estável) */
function reveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("active");
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
  reveal();

  const lang = document.getElementById("languageSelect")?.value || "pt";
  applyTranslation(lang);

  document.getElementById("languageSelect")?.addEventListener("change", (e) => {
    applyTranslation(e.target.value);
  });
});
