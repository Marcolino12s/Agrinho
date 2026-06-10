/* ========================= */
/* BOTÃO SCROLL */
/* ========================= */

document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("solucoes").scrollIntoView({ behavior: "smooth" });
});

/* ========================= */
/* TEMA (com memória local) */
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
/* SCROLL REVEAL (FEIRA ESTADUAL STYLE) */
/* ========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.15 });

document.querySelectorAll(".section, .split, .cards, .stats").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* ========================= */
/* CONTADOR ANIMADO (ESTATÍSTICAS) */
/* ========================= */

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const speed = target / 60;

  const update = () => {
    if(count < target){
      count += speed;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.querySelectorAll(".counter").forEach(runCounter);
    }
  });
},{ threshold:0.5 });

document.querySelectorAll(".stats").forEach(section => {
  statsObserver.observe(section);
});

/* ========================= */
/* TRADUÇÃO COMPLETA */
/* ========================= */

const translations = {

  pt:{
    navSobre:"Sobre",
    navDesafio:"Desafio",
    navSolucoes:"Soluções",
    navDados:"Dados",
    navConclusao:"Conclusão",

    heroTitle:"Agro forte, futuro sustentável",
    heroDesc:"Equilíbrio entre produção agrícola e preservação ambiental através da inovação.",
    btn:"Explorar",

    sobreTitulo:"Sobre o projeto",
    sobreTexto:"Texto aqui",

    desafio1Titulo:"Produção agrícola",
    desafio1Texto:"Texto aqui",
    desafioCentro:"O equilíbrio é essencial",
    desafio2Titulo:"Preservação ambiental",
    desafio2Texto:"Texto aqui",

    card1Titulo:"Agricultura de precisão",
    card1Texto:"Texto aqui",
    card2Titulo:"Uso consciente da água",
    card2Texto:"Texto aqui",
    card3Titulo:"Conservação do solo",
    card3Texto:"Texto aqui",

    conclusaoTitulo:"Conclusão",
    conclusaoTexto:"Texto aqui",

    footer:"Feira Agrinho | Projeto desenvolvido por aluno"
  },

  en:{
    navSobre:"About",
    navDesafio:"Challenge",
    navSolucoes:"Solutions",
    navDados:"Data",
    navConclusao:"Conclusion",

    heroTitle:"Strong agriculture, sustainable future",
    heroDesc:"Balance between production and environmental preservation through innovation.",
    btn:"Explore",

    sobreTitulo:"About the project",
    sobreTexto:"Text here",

    desafio1Titulo:"Agricultural production",
    desafio1Texto:"Text here",
    desafioCentro:"Balance is essential",
    desafio2Titulo:"Environmental preservation",
    desafio2Texto:"Text here",

    card1Titulo:"Precision farming",
    card1Texto:"Text here",
    card2Titulo:"Water efficiency",
    card2Texto:"Text here",
    card3Titulo:"Soil conservation",
    card3Texto:"Text here",

    conclusaoTitulo:"Conclusion",
    conclusaoTexto:"Text here",

    footer:"Agrinho Fair | Student project"
  },

  es:{
    navSobre:"Sobre",
    navDesafio:"Desafío",
    navSolucoes:"Soluciones",
    navDados:"Datos",
    navConclusao:"Conclusión",

    heroTitle:"Agricultura fuerte, futuro sostenible",
    heroDesc:"Equilibrio entre producción y preservación ambiental mediante innovación.",
    btn:"Explorar",

    sobreTitulo:"Sobre el proyecto",
    sobreTexto:"Texto aquí",

    desafio1Titulo:"Producción agrícola",
    desafio1Texto:"Texto aquí",
    desafioCentro:"El equilibrio es esencial",
    desafio2Titulo:"Preservación ambiental",
    desafio2Texto:"Texto aquí",

    card1Titulo:"Agricultura de precisión",
    card1Texto:"Texto aquí",
    card2Titulo:"Uso eficiente del agua",
    card2Texto:"Texto aquí",
    card3Titulo:"Conservación del suelo",
    card3Texto:"Texto aquí",

    conclusaoTitulo:"Conclusión",
    conclusaoTexto:"Texto aquí",

    footer:"Feria Agrinho | Proyecto estudiantil"
  }
};

/* ========================= */
/* TROCA DE IDIOMA */
/* ========================= */

document.getElementById("languageSelect").addEventListener("change",(e)=>{
  const lang = e.target.value;
  const t = translations[lang];

  for(const id in t){
    const el = document.getElementById(id);
    if(el) el.textContent = t[id];
  }
});
