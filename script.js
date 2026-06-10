/* ========================= */
/* SCROLL BOTÃO HERO */
/* ========================= */

const explorarBtn = document.getElementById("explorarBtn");

if (explorarBtn) {
  explorarBtn.addEventListener("click", () => {
    document.getElementById("desafio").scrollIntoView({
      behavior: "smooth"
    });
  });
}

/* ========================= */
/* VOLTAR AO TOPO */
/* ========================= */

const topButton = document.getElementById("topButton");

if (topButton) {
  topButton.addEventListener("click", () => {
    document.getElementById("topo").scrollIntoView({
      behavior: "smooth"
    });
  });
}

/* ========================= */
/* TEMA ESCURO / CLARO */
/* ========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
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
    navConclusao: "Conclusão",

    heroTag: "TEXTO AQUI",
    heroTitle: "TÍTULO AQUI",
    heroDescription: "TEXTO AQUI",
    explorarBtn: "SAIBA MAIS",

    desafioTag: "TEXTO AQUI",
    desafioTitulo: "TÍTULO AQUI",
    desafioTexto: "TEXTO AQUI",

    desafioCard1Titulo: "TÍTULO AQUI",
    desafioCard1Texto: "TEXTO AQUI",

    desafioCard2Titulo: "TÍTULO AQUI",
    desafioCard2Texto: "TEXTO AQUI",

    solucoesTag: "TEXTO AQUI",
    solucoesTitulo: "TÍTULO AQUI",

    solucao1Titulo: "TÍTULO AQUI",
    solucao1Texto: "TEXTO AQUI",

    solucao2Titulo: "TÍTULO AQUI",
    solucao2Texto: "TEXTO AQUI",

    solucao3Titulo: "TÍTULO AQUI",
    solucao3Texto: "TEXTO AQUI",

    beneficiosTag: "TEXTO AQUI",
    beneficiosTitulo: "TÍTULO AQUI",

    beneficio1: "BENEFÍCIO AQUI",
    beneficio2: "BENEFÍCIO AQUI",
    beneficio3: "BENEFÍCIO AQUI",
    beneficio4: "BENEFÍCIO AQUI",

    resultadoTitulo: "TÍTULO AQUI",
    resultado1: "TEXTO AQUI",
    resultado2: "TEXTO AQUI",
    resultado3: "TEXTO AQUI",

    conclusaoTitulo: "TÍTULO AQUI",
    conclusaoTexto: "TEXTO AQUI",
    topButton: "VOLTAR AO TOPO"
  },

  en: {
    navDesafio: "Challenge",
    navSolucoes: "Solutions",
    navBeneficios: "Benefits",
    navConclusao: "Conclusion",

    heroTag: "TEXT HERE",
    heroTitle: "TITLE HERE",
    heroDescription: "TEXT HERE",
    explorarBtn: "LEARN MORE",

    desafioTag: "TEXT HERE",
    desafioTitulo: "TITLE HERE",
    desafioTexto: "TEXT HERE",

    desafioCard1Titulo: "TITLE HERE",
    desafioCard1Texto: "TEXT HERE",

    desafioCard2Titulo: "TITLE HERE",
    desafioCard2Texto: "TEXT HERE",

    solucoesTag: "TEXT HERE",
    solucoesTitulo: "TITLE HERE",

    solucao1Titulo: "TITLE HERE",
    solucao1Texto: "TEXT HERE",

    solucao2Titulo: "TITLE HERE",
    solucao2Texto: "TEXT HERE",

    solucao3Titulo: "TITLE HERE",
    solucao3Texto: "TEXT HERE",

    beneficiosTag: "TEXT HERE",
    beneficiosTitulo: "TITLE HERE",

    beneficio1: "BENEFIT HERE",
    beneficio2: "BENEFIT HERE",
    beneficio3: "BENEFIT HERE",
    beneficio4: "BENEFIT HERE",

    resultadoTitulo: "TITLE HERE",
    resultado1: "TEXT HERE",
    resultado2: "TEXT HERE",
    resultado3: "TEXT HERE",

    conclusaoTitulo: "TITLE HERE",
    conclusaoTexto: "TEXT HERE",
    topButton: "BACK TO TOP"
  },

  es: {
    navDesafio: "Desafío",
    navSolucoes: "Soluciones",
    navBeneficios: "Beneficios",
    navConclusao: "Conclusión",

    heroTag: "TEXTO AQUÍ",
    heroTitle: "TÍTULO AQUÍ",
    heroDescription: "TEXTO AQUÍ",
    explorarBtn: "VER MÁS",

    desafioTag: "TEXTO AQUÍ",
    desafioTitulo: "TÍTULO AQUÍ",
    desafioTexto: "TEXTO AQUÍ",

    desafioCard1Titulo: "TÍTULO AQUÍ",
    desafioCard1Texto: "TEXTO AQUÍ",

    desafioCard2Titulo: "TÍTULO AQUÍ",
    desafioCard2Texto: "TEXTO AQUÍ",

    solucoesTag: "TEXTO AQUÍ",
    solucoesTitulo: "TÍTULO AQUÍ",

    solucao1Titulo: "TÍTULO AQUÍ",
    solucao1Texto: "TEXTO AQUÍ",

    solucao2Titulo: "TÍTULO AQUÍ",
    solucao2Texto: "TEXTO AQUÍ",

    solucao3Titulo: "TÍTULO AQUÍ",
    solucao3Texto: "TEXTO AQUÍ",

    beneficiosTag: "TEXTO AQUÍ",
    beneficiosTitulo: "TÍTULO AQUÍ",

    beneficio1: "BENEFICIO AQUÍ",
    beneficio2: "BENEFICIO AQUÍ",
    beneficio3: "BENEFICIO AQUÍ",
    beneficio4: "BENEFICIO AQUÍ",

    resultadoTitulo: "TÍTULO AQUÍ",
    resultado1: "TEXTO AQUÍ",
    resultado2: "TEXTO AQUÍ",
    resultado3: "TEXTO AQUÍ",

    conclusaoTitulo: "TÍTULO AQUÍ",
    conclusaoTexto: "TEXTO AQUÍ",
    topButton: "VOLVER ARRIBA"
  }

};

/* ========================= */
/* TROCA DE IDIOMA */
/* ========================= */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  languageSelect.addEventListener("change", () => {

    const t = translations[languageSelect.value];

    document.getElementById("navDesafio").textContent = t.navDesafio;
    document.getElementById("navSolucoes").textContent = t.navSolucoes;
    document.getElementById("navBeneficios").textContent = t.navBeneficios;
    document.getElementById("navConclusao").textContent = t.navConclusao;

    document.getElementById("heroTag").textContent = t.heroTag;
    document.getElementById("heroTitle").textContent = t.heroTitle;
    document.getElementById("heroDescription").textContent = t.heroDescription;
    document.getElementById("explorarBtn").textContent = t.explorarBtn;

    document.getElementById("desafioTag").textContent = t.desafioTag;
    document.getElementById("desafioTitulo").textContent = t.desafioTitulo;
    document.getElementById("desafioTexto").textContent = t.desafioTexto;

    document.getElementById("desafioCard1Titulo").textContent = t.desafioCard1Titulo;
    document.getElementById("desafioCard1Texto").textContent = t.desafioCard1Texto;

    document.getElementById("desafioCard2Titulo").textContent = t.desafioCard2Titulo;
    document.getElementById("desafioCard2Texto").textContent = t.desafioCard2Texto;

    document.getElementById("solucoesTag").textContent = t.solucoesTag;
    document.getElementById("solucoesTitulo").textContent = t.solucoesTitulo;

    document.getElementById("solucao1Titulo").textContent = t.solucao1Titulo;
    document.getElementById("solucao1Texto").textContent = t.solucao1Texto;

    document.getElementById("solucao2Titulo").textContent = t.solucao2Titulo;
    document.getElementById("solucao2Texto").textContent = t.solucao2Texto;

    document.getElementById("solucao3Titulo").textContent = t.solucao3Titulo;
    document.getElementById("solucao3Texto").textContent = t.solucao3Texto;

    document.getElementById("beneficiosTag").textContent = t.beneficiosTag;
    document.getElementById("beneficiosTitulo").textContent = t.beneficiosTitulo;

    document.getElementById("beneficio1").textContent = t.beneficio1;
    document.getElementById("beneficio2").textContent = t.beneficio2;
    document.getElementById("beneficio3").textContent = t.beneficio3;
    document.getElementById("beneficio4").textContent = t.beneficio4;

    document.getElementById("resultadoTitulo").textContent = t.resultadoTitulo;
    document.getElementById("resultado1").textContent = t.resultado1;
    document.getElementById("resultado2").textContent = t.resultado2;
    document.getElementById("resultado3").textContent = t.resultado3;

    document.getElementById("conclusaoTitulo").textContent = t.conclusaoTitulo;
    document.getElementById("conclusaoTexto").textContent = t.conclusaoTexto;
    document.getElementById("topButton").textContent = t.topButton;

  });
}
