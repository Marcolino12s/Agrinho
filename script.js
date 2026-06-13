// SEM ALTERAÇÃO DE LÓGICA PRINCIPAL
// SÓ ADICIONEI SUPORTE AOS NOVOS TEXTOS DO CARD

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* TRADUÇÕES (mantidas + novos campos) */

const translations = {
  pt: {
    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta a produção",
    resultado2: "Preserva os recursos naturais",
    resultado3: "Reduz custos e desperdícios",

    impactoDesc1: "Mais eficiência no uso dos recursos agrícolas.",
    impactoDesc2: "Uso consciente que protege o meio ambiente.",
    impactoDesc3: "Produção mais inteligente e econômica.",
  },
  en: {
    resultadosTitulo: "Positive impacts",
    impactoDesc1: "More efficient use of resources.",
    impactoDesc2: "Responsible environmental protection.",
    impactoDesc3: "Smarter and cheaper production.",
  },
  es: {
    resultadosTitulo: "Impactos positivos",
    impactoDesc1: "Mayor eficiencia de recursos.",
    impactoDesc2: "Protección ambiental consciente.",
    impactoDesc3: "Producción más económica.",
  }
};

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("resultadosTitulo", t.resultadosTitulo);

  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("impactoDesc1", t.impactoDesc1);
  setText("impactoDesc2", t.impactoDesc2);
  setText("impactoDesc3", t.impactoDesc3);
}
