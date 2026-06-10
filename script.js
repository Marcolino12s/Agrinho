/* ========================= */
/* BOTÃO SCROLL (HERO → SOLUÇÃO) */
/* ========================= */

document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("solucao").scrollIntoView({ behavior: "smooth" });
});

/* ========================= */
/* TEMA ESCURO COM MEMÓRIA */
/* ========================= */

const themeToggle = document.getElementById("themeToggle");

// carregar tema salvo
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme","dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme","light");
  }
});

/* ========================= */
/* SCROLL REVEAL (ENTRADA SUAVE DAS SEÇÕES) */
/* ========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.15});

document.querySelectorAll(".section, .split, .impact, .block, .impact-card")
.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* ========================= */
/* TRADUÇÃO COMPLETA */
/* ========================= */

const translations = {

  pt:{
    nav1:"Início",
    nav2:"Problema",
    nav3:"Solução",
    nav4:"Impacto",
    nav5:"Conclusão",

    heroTitle:"Agro forte, futuro sustentável",
    heroDesc:"Equilíbrio entre produção agrícola e preservação ambiental através da inovação.",
    btn:"Explorar",

    problemaTitulo:"O desafio do agro moderno",
    problemaTexto:"Texto aqui",

    solucao1Titulo:"Produção eficiente",
    solucao1Texto:"Texto aqui",
    centro:"Equilíbrio sustentável",
    solucao2Titulo:"Preservação ambiental",
    solucao2Texto:"Texto aqui",

    impactoTitulo:"Impactos positivos",
    impacto1:"Tecnologia no campo",
    impacto2:"Uso consciente da água",
    impacto3:"Conservação do solo",

    finalTitulo:"Conclusão",
    finalTexto:"Texto aqui",

    footerText:"Projeto Agrinho | Desenvolvido por aluno"
  },

  en:{
    nav1:"Home",
    nav2:"Problem",
    nav3:"Solution",
    nav4:"Impact",
    nav5:"Conclusion",

    heroTitle:"Strong agriculture, sustainable future",
    heroDesc:"Balance between agricultural production and environmental preservation through innovation.",
    btn:"Explore",

    problemaTitulo:"Modern agriculture challenge",
    problemaTexto:"Text here",

    solucao1Titulo:"Efficient production",
    solucao1Texto:"Text here",
    centro:"Sustainable balance",
    solucao2Titulo:"Environmental preservation",
    solucao2Texto:"Text here",

    impactoTitulo:"Positive impacts",
    impacto1:"Farm technology",
    impacto2:"Water efficiency",
    impacto3:"Soil conservation",

    finalTitulo:"Conclusion",
    finalTexto:"Text here",

    footerText:"Agrinho Project | Student developed"
  },

  es:{
    nav1:"Inicio",
    nav2:"Problema",
    nav3:"Solución",
    nav4:"Impacto",
    nav5:"Conclusión",

    heroTitle:"Agricultura fuerte, futuro sostenible",
    heroDesc:"Equilibrio entre producción agrícola y preservación ambiental mediante innovación.",
    btn:"Explorar",

    problemaTitulo:"Desafío agrícola moderno",
    problemaTexto:"Texto aquí",

    solucao1Titulo:"Producción eficiente",
    solucao1Texto:"Texto aquí",
    centro:"Equilibrio sostenible",
    solucao2Titulo:"Preservación ambiental",
    solucao2Texto:"Texto aquí",

    impactoTitulo:"Impactos positivos",
    impacto1:"Tecnología agrícola",
    impacto2:"Uso del agua",
    impacto3:"Conservación del suelo",

    finalTitulo:"Conclusión",
    finalTexto:"Texto aquí",

    footerText:"Proyecto Agrinho | Desarrollado por estudiante"
  }
};

/* ========================= */
/* TROCA DE IDIOMA */
/* ========================= */

document.getElementById("languageSelect").addEventListener("change",(e)=>{

  const t = translations[e.target.value];

  for(const id in t){
    const el = document.getElementById(id);
    if(el){
      el.textContent = t[id];
    }
  }
});
