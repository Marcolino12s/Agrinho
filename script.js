/* BOTÃO SCROLL */

document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("solucoes").scrollIntoView({ behavior:"smooth" });
});

/* ========================= */
/* TEMA COM MEMÓRIA */
/* ========================= */

const themeToggle = document.getElementById("themeToggle");

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
/* SCROLL ANIMATION */
/* ========================= */

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

document.querySelectorAll(".section,.split,.cards,.box").forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});

/* ========================= */
/* TRADUÇÃO */
/* ========================= */

const translations = {

  pt:{
    navSobre:"Sobre",
    navDesafio:"Desafio",
    navSolucoes:"Soluções",
    navConclusao:"Conclusão",

    heroTitle:"Agro forte, futuro sustentável",
    heroDesc:"Equilíbrio entre produção agrícola e preservação ambiental.",
    btn:"Explorar",

    sobreTitulo:"Sobre o projeto",
    sobreTexto:"Texto aqui",

    desafio1Titulo:"Produção",
    desafio1Texto:"Texto aqui",
    desafioCentro:"Equilíbrio",
    desafio2Titulo:"Meio ambiente",
    desafio2Texto:"Texto aqui",

    card1Titulo:"Tecnologia no campo",
    card1Texto:"Texto aqui",
    card2Titulo:"Uso consciente da água",
    card2Texto:"Texto aqui",
    card3Titulo:"Conservação do solo",
    card3Texto:"Texto aqui",

    conclusaoTitulo:"Conclusão",
    conclusaoTexto:"Texto aqui",

    footerText:"Projeto Agrinho"
  },

  en:{
    navSobre:"About",
    navDesafio:"Challenge",
    navSolucoes:"Solutions",
    navConclusao:"Conclusion",

    heroTitle:"Strong agriculture, sustainable future",
    heroDesc:"Balance between production and environmental preservation.",
    btn:"Explore",

    sobreTitulo:"About",
    sobreTexto:"Text here",

    desafio1Titulo:"Production",
    desafio1Texto:"Text here",
    desafioCentro:"Balance",
    desafio2Titulo:"Environment",
    desafio2Texto:"Text here",

    card1Titulo:"Farm technology",
    card1Texto:"Text here",
    card2Titulo:"Water efficiency",
    card2Texto:"Text here",
    card3Titulo:"Soil conservation",
    card3Texto:"Text here",

    conclusaoTitulo:"Conclusion",
    conclusaoTexto:"Text here",

    footerText:"Agrinho Project"
  },

  es:{
    navSobre:"Sobre",
    navDesafio:"Desafío",
    navSolucoes:"Soluciones",
    navConclusao:"Conclusión",

    heroTitle:"Agricultura fuerte, futuro sostenible",
    heroDesc:"Equilibrio entre producción y medio ambiente.",
    btn:"Explorar",

    sobreTitulo:"Sobre",
    sobreTexto:"Texto aquí",

    desafio1Titulo:"Producción",
    desafio1Texto:"Texto aquí",
    desafioCentro:"Equilibrio",
    desafio2Titulo:"Medio ambiente",
    desafio2Texto:"Texto aquí",

    card1Titulo:"Tecnología agrícola",
    card1Texto:"Texto aquí",
    card2Titulo:"Uso del agua",
    card2Texto:"Texto aquí",
    card3Titulo:"Conservación del suelo",
    card3Texto:"Texto aquí",

    conclusaoTitulo:"Conclusión",
    conclusaoTexto:"Texto aquí",

    footerText:"Proyecto Agrinho"
  }
};

document.getElementById("languageSelect").addEventListener("change",(e)=>{
  const t = translations[e.target.value];

  for(const id in t){
    const el = document.getElementById(id);
    if(el) el.textContent = t[id];
  }
});
