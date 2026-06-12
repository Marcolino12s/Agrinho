/* ========================================= */
/* AGRONOVA - SCRIPT.JS */
/* ========================================= */

/* ========================================= */
/* BOTÃO "SAIBA MAIS" */
/* ========================================= */

const explorarBtn = document.getElementById("explorarBtn");

if (explorarBtn) {
  explorarBtn.addEventListener("click", () => {
    document.getElementById("equilibrio").scrollIntoView({
      behavior: "smooth"
    });
  });
}

/* ========================================= */
/* BOTÃO "VOLTAR AO TOPO" */
/* ========================================= */

const topBtn = document.getElementById("topBtn");

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ========================================= */
/* TEMA ESCURO */
/* ========================================= */

const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {

  if (theme === "dark") {

    document.body.classList.add("dark-theme");

    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }

  } else {

    document.body.classList.remove("dark-theme");

    if (themeToggle) {
      themeToggle.textContent = "🌙";
    }

  }

}

const savedTheme = localStorage.getItem("theme") || "light";

applyTheme(savedTheme);

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    const isDark =
      document.body.classList.contains("dark-theme");

    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);

  });

}

/* ========================================= */
/* TRADUÇÕES */
/* ========================================= */

const translations = {

  pt: {

    navSobre: "Equilíbrio",
    navProjetos: "Soluções",
    navResultados: "Benefícios",

    heroTag: "PRODUÇÃO • EQUILÍBRIO • FUTURO",

    heroTitle:
      "Agro forte,<br>futuro sustentável",

    heroDescription:
      "Escreva aqui uma breve introdução sobre o tema do projeto.",

    explorarBtn:
      "Saiba mais",

    equilibrioTag:
      "O TEMA",

    equilibrioTitulo:
      "Produção e preservação",

    producaoTitulo:
      "Produção agrícola",

    producaoTexto:
      "Escreva aqui sobre a importância da produção agrícola para a sociedade.",

    equilibrioCardTitulo:
      "Equilíbrio",

    equilibrioCardTexto:
      "Explique aqui como a produção e a preservação podem caminhar juntas.",

    ambienteTitulo:
      "Meio ambiente",

    ambienteTexto:
      "Escreva aqui sobre a importância da conservação dos recursos naturais.",

    solucoesTag:
      "SOLUÇÕES",

    solucoesTitulo:
      "Caminhos para um futuro sustentável",

    projeto1Titulo:
      "Agricultura de precisão",

    projeto1Texto:
      "Escreva aqui sobre o uso de tecnologias no campo.",

    projeto1Info:
      "Tecnologia e eficiência",

    projeto2Titulo:
      "Uso consciente da água",

    projeto2Texto:
      "Escreva aqui sobre o uso responsável dos recursos hídricos.",

    projeto2Info:
      "Economia e preservação",

    projeto3Titulo:
      "Conservação do solo",

    projeto3Texto:
      "Escreva aqui sobre práticas que ajudam a preservar o solo.",

    projeto3Info:
      "Fertilidade e proteção",

    beneficiosTag:
      "BENEFÍCIOS",

    beneficiosTitulo:
      "Resultados da sustentabilidade",

    beneficio1Titulo:
      "Maior produtividade",

    beneficio1Texto:
      "Explique aqui um benefício relacionado à produção.",

    beneficio2Titulo:
      "Menor desperdício",

    beneficio2Texto:
      "Explique aqui um benefício relacionado à eficiência.",

    beneficio3Titulo:
      "Preservação ambiental",

    beneficio3Texto:
      "Explique aqui um benefício relacionado ao meio ambiente.",

    conclusaoTitulo:
      "Conclusão",

    conclusaoTexto:
      "Escreva aqui sua conclusão sobre o tema trabalhado.",

    topBtn:
      "Voltar ao topo",

    footerText:
      "© 2026 AgroNova | Projeto Agrinho"
  },

  en: {

    navSobre: "Balance",
    navProjetos: "Solutions",
    navResultados: "Benefits",

    heroTag:
      "PRODUCTION • BALANCE • FUTURE",

    heroTitle:
      "Strong agriculture,<br>sustainable future",

    heroDescription:
      "Write a brief introduction about the project theme here.",

    explorarBtn:
      "Learn more",

    equilibrioTag:
      "THE THEME",

    equilibrioTitulo:
      "Production and preservation",

    producaoTitulo:
      "Agricultural production",

    producaoTexto:
      "Write here about the importance of agricultural production for society.",

    equilibrioCardTitulo:
      "Balance",

    equilibrioCardTexto:
      "Explain here how production and preservation can work together.",

    ambienteTitulo:
      "Environment",

    ambienteTexto:
      "Write here about the importance of conserving natural resources.",

    solucoesTag:
      "SOLUTIONS",

    solucoesTitulo:
      "Paths to a sustainable future",

    projeto1Titulo:
      "Precision agriculture",

    projeto1Texto:
      "Write here about the use of technology in the field.",

    projeto1Info:
      "Technology and efficiency",

    projeto2Titulo:
      "Responsible water use",

    projeto2Texto:
      "Write here about the responsible use of water resources.",

    projeto2Info:
      "Savings and preservation",

    projeto3Titulo:
      "Soil conservation",

    projeto3Texto:
      "Write here about practices that help preserve the soil.",

    projeto3Info:
      "Fertility and protection",

    beneficiosTag:
      "BENEFITS",

    beneficiosTitulo:
      "Results of sustainability",

    beneficio1Titulo:
      "Higher productivity",

    beneficio1Texto:
      "Explain here a production-related benefit.",

    beneficio2Titulo:
      "Less waste",

    beneficio2Texto:
      "Explain here an efficiency-related benefit.",

    beneficio3Titulo:
      "Environmental preservation",

    beneficio3Texto:
      "Explain here an environment-related benefit.",

    conclusaoTitulo:
      "Conclusion",

    conclusaoTexto:
      "Write your conclusion about the theme here.",

    topBtn:
      "Back to top",

    footerText:
      "© 2026 AgroNova | Agrinho Project"
  },

  es: {

    navSobre: "Equilibrio",
    navProjetos: "Soluciones",
    navResultados: "Beneficios",

    heroTag:
      "PRODUCCIÓN • EQUILIBRIO • FUTURO",

    heroTitle:
      "Agricultura fuerte,<br>futuro sostenible",

    heroDescription:
      "Escriba aquí una breve introducción sobre el tema del proyecto.",

    explorarBtn:
      "Saber más",

    equilibrioTag:
      "EL TEMA",

    equilibrioTitulo:
      "Producción y preservación",

    producaoTitulo:
      "Producción agrícola",

    producaoTexto:
      "Escriba aquí sobre la importancia de la producción agrícola para la sociedad.",

    equilibrioCardTitulo:
      "Equilibrio",

    equilibrioCardTexto:
      "Explique aquí cómo la producción y la preservación pueden avanzar juntas.",

    ambienteTitulo:
      "Medio ambiente",

    ambienteTexto:
      "Escriba aquí sobre la importancia de conservar los recursos naturales.",

    solucoesTag:
      "SOLUCIONES",

    solucoesTitulo:
      "Caminos hacia un futuro sostenible",

    projeto1Titulo:
      "Agricultura de precisión",

    projeto1Texto:
      "Escriba aquí sobre el uso de tecnologías en el campo.",

    projeto1Info:
      "Tecnología y eficiencia",

    projeto2Titulo:
      "Uso responsable del agua",

    projeto2Texto:
      "Escriba aquí sobre el uso responsable de los recursos hídricos.",

    projeto2Info:
      "Ahorro y preservación",

    projeto3Titulo:
      "Conservación del suelo",

    projeto3Texto:
      "Escriba aquí sobre prácticas que ayudan a preservar el suelo.",

    projeto3Info:
      "Fertilidad y protección",

    beneficiosTag:
      "BENEFICIOS",

    beneficiosTitulo:
      "Resultados de la sostenibilidad",

    beneficio1Titulo:
      "Mayor productividad",

    beneficio1Texto:
      "Explique aquí un beneficio relacionado con la producción.",

    beneficio2Titulo:
      "Menor desperdicio",

    beneficio2Texto:
      "Explique aquí un beneficio relacionado con la eficiencia.",

    beneficio3Titulo:
      "Preservación ambiental",

    beneficio3Texto:
      "Explique aquí un beneficio relacionado con el medio ambiente.",

    conclusaoTitulo:
      "Conclusión",

    conclusaoTexto:
      "Escriba aquí su conclusión sobre el tema trabajado.",

    topBtn:
      "Volver arriba",

    footerText:
      "© 2026 AgroNova | Proyecto Agrinho"
  }

};

/* ========================================= */
/* APLICAR IDIOMA */
/* ========================================= */

function applyLanguage(lang) {

  const t = translations[lang];

  if (!t) return;

  Object.keys(t).forEach(id => {

    const element = document.getElementById(id);

    if (!element) return;

    if (
      id === "heroTitle"
    ) {
      element.innerHTML = t[id];
    } else {
      element.textContent = t[id];
    }

  });

}

/* ========================================= */
/* SELETOR DE IDIOMA */
/* ========================================= */

const languageSelect =
  document.getElementById("languageSelect");

const savedLanguage =
  localStorage.getItem("language") || "pt";

applyLanguage(savedLanguage);

if (languageSelect) {

  languageSelect.value = savedLanguage;

  languageSelect.addEventListener("change", () => {

    const lang = languageSelect.value;

    applyLanguage(lang);

    localStorage.setItem(
      "language",
      lang
    );

  });

}

/* ========================================= */
/* ANIMAÇÃO AO ROLAR */
/* ========================================= */

const animatedElements = document.querySelectorAll(
  ".info-card, .projeto-card, .beneficio-card, .section-title, .conclusao-box"
);

animatedElements.forEach(element => {
  element.classList.add("fade-in");
});

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);

animatedElements.forEach(element => {
  observer.observe(element);
});
