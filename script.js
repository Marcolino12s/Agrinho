```javascript
/* ========================= */
/* BOTÃO EXPLORAR */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

  const explorarBtn = document.getElementById("explorarBtn");

  if (explorarBtn) {
    explorarBtn.addEventListener("click", () => {

      const secao = document.getElementById("solucoes");

      if (secao) {
        secao.scrollIntoView({
          behavior: "smooth"
        });
      }

    });
  }

  /* ========================= */
  /* VOLTAR AO TOPO */
  /* ========================= */

  const voltarTopo = document.getElementById("voltarTopo");

  if (voltarTopo) {
    voltarTopo.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });
  }

  /* ========================= */
  /* TEMA ESCURO */
  /* ========================= */

  const themeToggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }

  }

  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("dark-theme");

      const darkMode =
        document.body.classList.contains("dark-theme");

      localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
      );

      themeToggle.textContent =
        darkMode ? "☀️" : "🌙";

    });

  }

  /* ========================= */
  /* TRADUÇÕES */
  /* ========================= */

  const translations = {

    pt: {

      navDesafio: "Desafio",
      navSolucoes: "Soluções",
      navBeneficios: "Benefícios",

      heroTag: "AGRICULTURA • TECNOLOGIA • FUTURO",

      heroTitle: "Agro forte,<br>futuro sustentável",

      heroDescription:
        "[Escreva aqui uma breve apresentação do tema.]",

      explorarBtn: "Explorar",

      desafioTag: "CONTEXTO",
      desafioTitulo: "O desafio",

      desafioTexto:
        "[Explique aqui qual é o desafio de produzir alimentos e preservar o meio ambiente.]",

      producaoTitulo: "Produção",
      producaoTexto:
        "[Escreva aqui sobre a importância da produção agrícola.]",

      equilibrioTitulo: "Equilíbrio",
      equilibrioTexto:
        "[Explique aqui como unir desenvolvimento e preservação.]",

      ambienteTitulo: "Meio ambiente",
      ambienteTexto:
        "[Escreva aqui sobre a conservação dos recursos naturais.]",

      solucoesTag: "SOLUÇÕES",
      solucoesTitulo: "Caminhos para o futuro",

      card1Titulo: "Uso inteligente da água",
      card1Texto: "[Explique aqui.]",

      card2Titulo: "Tecnologia no campo",
      card2Texto: "[Explique aqui.]",

      card3Titulo: "Conservação do solo",
      card3Texto: "[Explique aqui.]",

      beneficiosTag: "RESULTADOS",
      beneficiosTitulo: "Benefícios",

      beneficio1: "✔ Benefício 1",
      beneficio2: "✔ Benefício 2",
      beneficio3: "✔ Benefício 3",
      beneficio4: "✔ Benefício 4",

      conclusaoTitulo: "Conclusão",
      conclusaoTexto:
        "[Escreva aqui sua conclusão.]",

      voltarTopo: "Voltar ao topo",

      footerText:
        "© 2026 AgroNova | Projeto Agrinho"
    },

    en: {

      navDesafio: "Challenge",
      navSolucoes: "Solutions",
      navBeneficios: "Benefits",

      heroTag: "AGRICULTURE • TECHNOLOGY • FUTURE",

      heroTitle:
        "Strong agriculture,<br>sustainable future",

      heroDescription:
        "[Write a brief introduction here.]",

      explorarBtn: "Explore",

      desafioTag: "CONTEXT",
      desafioTitulo: "The challenge",

      desafioTexto:
        "[Explain here the challenge of producing food while preserving nature.]",

      producaoTitulo: "Production",
      producaoTexto:
        "[Write here about agricultural production.]",

      equilibrioTitulo: "Balance",
      equilibrioTexto:
        "[Explain how development and preservation can work together.]",

      ambienteTitulo: "Environment",
      ambienteTexto:
        "[Write about environmental preservation.]",

      solucoesTag: "SOLUTIONS",
      solucoesTitulo: "Paths to the future",

      card1Titulo: "Smart water use",
      card1Texto: "[Explain here.]",

      card2Titulo: "Technology in agriculture",
      card2Texto: "[Explain here.]",

      card3Titulo: "Soil conservation",
      card3Texto: "[Explain here.]",

      beneficiosTag: "RESULTS",
      beneficiosTitulo: "Benefits",

      beneficio1: "✔ Benefit 1",
      beneficio2: "✔ Benefit 2",
      beneficio3: "✔ Benefit 3",
      beneficio4: "✔ Benefit 4",

      conclusaoTitulo: "Conclusion",
      conclusaoTexto:
        "[Write your conclusion here.]",

      voltarTopo: "Back to top",

      footerText:
        "© 2026 AgroNova | Agrinho Project"
    },

    es: {

      navDesafio: "Desafío",
      navSolucoes: "Soluciones",
      navBeneficios: "Beneficios",

      heroTag: "AGRICULTURA • TECNOLOGÍA • FUTURO",

      heroTitle:
        "Agro fuerte,<br>futuro sostenible",

      heroDescription:
        "[Escriba aquí una breve introducción.]",

      explorarBtn: "Explorar",

      desafioTag: "CONTEXTO",
      desafioTitulo: "El desafío",

      desafioTexto:
        "[Explique aquí el desafío de producir alimentos y preservar el medio ambiente.]",

      producaoTitulo: "Producción",
      producaoTexto:
        "[Escriba aquí sobre la producción agrícola.]",

      equilibrioTitulo: "Equilibrio",
      equilibrioTexto:
        "[Explique aquí cómo unir desarrollo y preservación.]",

      ambienteTitulo: "Medio ambiente",
      ambienteTexto:
        "[Escriba aquí sobre la conservación de los recursos naturales.]",

      solucoesTag: "SOLUCIONES",
      solucoesTitulo: "Caminos hacia el futuro",

      card1Titulo: "Uso inteligente del agua",
      card1Texto: "[Explique aquí.]",

      card2Titulo: "Tecnología en el campo",
      card2Texto: "[Explique aquí.]",

      card3Titulo: "Conservación del suelo",
      card3Texto: "[Explique aquí.]",

      beneficiosTag: "RESULTADOS",
      beneficiosTitulo: "Beneficios",

      beneficio1: "✔ Beneficio 1",
      beneficio2: "✔ Beneficio 2",
      beneficio3: "✔ Beneficio 3",
      beneficio4: "✔ Beneficio 4",

      conclusaoTitulo: "Conclusión",
      conclusaoTexto:
        "[Escriba aquí su conclusión.]",

      voltarTopo: "Volver arriba",

      footerText:
        "© 2026 AgroNova | Proyecto Agrinho"
    }

  };

  function applyTranslation(lang) {

    const t = translations[lang];

    Object.keys(t).forEach(key => {

      const element =
        document.getElementById(key);

      if (!element) return;

      if (key === "heroTitle") {
        element.innerHTML = t[key];
      } else {
        element.textContent = t[key];
      }

    });

  }

  const languageSelect =
    document.getElementById("languageSelect");

  const savedLanguage =
    localStorage.getItem("language") || "pt";

  applyTranslation(savedLanguage);

  if (languageSelect) {

    languageSelect.value =
      savedLanguage;

    languageSelect.addEventListener(
      "change",
      () => {

        const lang =
          languageSelect.value;

        localStorage.setItem(
          "language",
          lang
        );

        applyTranslation(lang);

      }
    );

  }

});
```
