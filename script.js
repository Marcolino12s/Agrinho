```javascript
/* ==========================================================
   TRADUÇÕES
========================================================== */

const translations = {

  pt: {

    navSobre: "Sobre",
    navPraticas: "Práticas",
    navProjetos: "Projetos",
    navResultados: "Resultados",

    heroTag:
      "INOVAÇÃO • PRESERVAÇÃO • TRANSFORMAÇÃO",

    heroTitle:
      "Um agro forte,<br>inteligente e sustentável.",

    heroDescription:
      "Incentivando práticas agrícolas modernas, sustentáveis e conscientes para proteger o meio ambiente e garantir um futuro melhor.",

    explorarBtn:
      "Ver mais",

    sobreTitulo:
      "Produzir sem destruir",

    sobreTexto:
      "A agricultura sustentável busca equilibrar produtividade, preservação ambiental e desenvolvimento econômico.",

    card1Titulo:
      "Menos desperdício",

    card1Texto:
      "Uso inteligente da água, energia e insumos agrícolas.",

    card2Titulo:
      "Mais eficiência",

    card2Texto:
      "Tecnologia para aumentar a produção com menos impacto.",

    card3Titulo:
      "Futuro sustentável",

    card3Texto:
      "Desenvolvimento econômico aliado à preservação ambiental.",

    exemplos:
      "Exemplos e resultados",

    resultadosTitulo:
      "Benefícios observados",

    footerText:
      "© 2026 AgroNova | Projeto Agrinho"
  },

  en: {

    navSobre: "About",
    navPraticas: "Practices",
    navProjetos: "Projects",
    navResultados: "Results",

    heroTag:
      "INNOVATION • PRESERVATION • TRANSFORMATION",

    heroTitle:
      "A strong,<br>smart and sustainable agriculture.",

    heroDescription:
      "Encouraging modern, sustainable and conscious agricultural practices to protect the environment and ensure a better future.",

    explorarBtn:
      "See more",

    sobreTitulo:
      "Producing without destroying",

    sobreTexto:
      "Sustainable agriculture seeks to balance productivity, environmental preservation and economic development.",

    card1Titulo:
      "Less waste",

    card1Texto:
      "Smart use of water, energy and agricultural resources.",

    card2Titulo:
      "More efficiency",

    card2Texto:
      "Technology to produce more with less impact.",

    card3Titulo:
      "Sustainable future",

    card3Texto:
      "Economic development combined with environmental preservation.",

    exemplos:
      "Examples and results",

    resultadosTitulo:
      "Observed benefits",

    footerText:
      "© 2026 AgroNova | Agrinho Project"
  },

  es: {

    navSobre: "Acerca",
    navPraticas: "Prácticas",
    navProjetos: "Proyectos",
    navResultados: "Resultados",

    heroTag:
      "INNOVACIÓN • PRESERVACIÓN • TRANSFORMACIÓN",

    heroTitle:
      "Una agricultura fuerte,<br>inteligente y sostenible.",

    heroDescription:
      "Promoviendo prácticas agrícolas modernas, sostenibles y responsables para proteger el medio ambiente y garantizar un mejor futuro.",

    explorarBtn:
      "Ver más",

    sobreTitulo:
      "Producir sin destruir",

    sobreTexto:
      "La agricultura sostenible busca equilibrar productividad, preservación ambiental y desarrollo económico.",

    card1Titulo:
      "Menos desperdicio",

    card1Texto:
      "Uso inteligente del agua, energía y recursos agrícolas.",

    card2Titulo:
      "Más eficiencia",

    card2Texto:
      "Tecnología para producir más con menos impacto.",

    card3Titulo:
      "Futuro sostenible",

    card3Texto:
      "Desarrollo económico junto con preservación ambiental.",

    exemplos:
      "Ejemplos y resultados",

    resultadosTitulo:
      "Beneficios observados",

    footerText:
      "© 2026 AgroNova | Proyecto Agrinho"
  }

};

/* ==========================================================
   HELPERS
========================================================== */

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function setHTML(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = value;
  }
}

/* ==========================================================
   APLICAR TRADUÇÃO
========================================================== */

function applyTranslation(language) {

  const t = translations[language];

  if (!t) return;

  setText("navSobre", t.navSobre);
  setText("navPraticas", t.navPraticas);
  setText("navProjetos", t.navProjetos);
  setText("navResultados", t.navResultados);

  setText("heroTag", t.heroTag);

  setHTML("heroTitle", t.heroTitle);

  setText(
    "heroDescription",
    t.heroDescription
  );

  setText(
    "explorarBtn",
    t.explorarBtn
  );

  setText(
    "sobreTitulo",
    t.sobreTitulo
  );

  setText(
    "sobreTexto",
    t.sobreTexto
  );

  setText(
    "card1Titulo",
    t.card1Titulo
  );

  setText(
    "card1Texto",
    t.card1Texto
  );

  setText(
    "card2Titulo",
    t.card2Titulo
  );

  setText(
    "card2Texto",
    t.card2Texto
  );

  setText(
    "card3Titulo",
    t.card3Titulo
  );

  setText(
    "card3Texto",
    t.card3Texto
  );

  setText(
    "exemplos",
    t.exemplos
  );

  setText(
    "resultadosTitulo",
    t.resultadosTitulo
  );

  setText(
    "footerText",
    t.footerText
  );
}

/* ==========================================================
   TAMANHO DA FONTE
========================================================== */

function applyFontSize(size) {

  const sizes = {

    small: "14px",
    medium: "16px",
    large: "19px"

  };

  document.documentElement.style.fontSize =
    sizes[size] || "16px";
}

/* ==========================================================
   IDIOMA
========================================================== */

const languageSelect =
  document.getElementById("languageSelect");

if (languageSelect) {

  const savedLanguage =
    localStorage.getItem("agronova-lang") || "pt";

  languageSelect.value =
    savedLanguage;

  applyTranslation(
    savedLanguage
  );

  languageSelect.addEventListener(
    "change",
    () => {

      applyTranslation(
        languageSelect.value
      );

      localStorage.setItem(
        "agronova-lang",
        languageSelect.value
      );
    }
  );
}

/* ==========================================================
   TAMANHO DA FONTE
========================================================== */

const fontSizeSelect =
  document.getElementById("fontSizeSelect");

if (fontSizeSelect) {

  const savedFont =
    localStorage.getItem("agronova-font") || "medium";

  fontSizeSelect.value =
    savedFont;

  applyFontSize(
    savedFont
  );

  fontSizeSelect.addEventListener(
    "change",
    () => {

      applyFontSize(
        fontSizeSelect.value
      );

      localStorage.setItem(
        "agronova-font",
        fontSizeSelect.value
      );
    }
  );
}

/* ==========================================================
   TEMA ESCURO
========================================================== */

const themeToggle =
  document.getElementById("themeToggle");

if (themeToggle) {

  const savedTheme =
    localStorage.getItem("agronova-theme");

  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark-theme"
    );

    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark-theme"
      );

      const darkMode =
        document.body.classList.contains(
          "dark-theme"
        );

      themeToggle.textContent =
        darkMode ? "☀️" : "🌙";

      localStorage.setItem(
        "agronova-theme",
        darkMode ? "dark" : "light"
      );
    }
  );
}

/* ==========================================================
   BOTÃO VER MAIS
========================================================== */

const exploreButton =
  document.getElementById("explorarBtn");

if (exploreButton) {

  exploreButton.addEventListener(
    "click",
    () => {

      const section =
        document.getElementById(
          "praticas"
        );

      if (section) {

        section.scrollIntoView({

          behavior: "smooth"

        });
      }
    }
  );
}

/* ==========================================================
   MENU MOBILE
========================================================== */

const menuToggle =
  document.getElementById("menuToggle");

const menu =
  document.getElementById("menu");

if (menuToggle && menu) {

  menuToggle.addEventListener(
    "click",
    () => {

      menu.classList.toggle(
        "active"
      );
    }
  );
}

/* ==========================================================
   FECHAR MENU AO CLICAR
========================================================== */

const links =
  document.querySelectorAll("#menu a");

links.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      menu.classList.remove(
        "active"
      );
    }
  );
});
```
