/* SCROLL */

document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("solucoes").scrollIntoView({ behavior:"smooth" });
});

/* TEMA COM MEMÓRIA */

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

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.15 });

document.querySelectorAll(".section, .split, .cards").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* TRADUÇÃO */

const translations = {

  pt:{
    navSobre:"Sobre",
    navDesafio:"Desafio",
    navSolucoes:"Soluções",
    navConclusao:"Conclusão",

    heroTitle:"Agro forte, futuro sustentável",
    heroDesc:"Equilíbrio entre produção e preservação ambiental.",
    btn:"Explorar",

    sobreTitulo:"Sobre o projeto",
    sobreTexto:"texto aqui",

    desafio1Titulo:"Produção",
    desafio1Texto:"texto aqui",
    desafioCentro:"Equilíbrio",
    desafio2Titulo:"Meio ambiente",
    desafio2Texto:"texto aqui",

    card1Titulo:"Agricultura de precisão",
    card1Texto:"texto aqui",
    card2Titulo:"Uso da água",
    card2Texto:"texto aqui",
    card3Titulo:"Solo saudável",
    card3Texto:"texto aqui",

    conclusaoTitulo:"Conclusão",
    conclusaoTexto:"texto aqui",

    footer:"Projeto Agrinho"
  },

  en:{
    navSobre:"About",
    navDesafio:"Challenge",
    navSolucoes:"Solutions",
    navConclusao:"Conclusion",

    heroTitle:"Strong agriculture, sustainable future",
    heroDesc:"Balance between production and environmental preservation.",
    btn:"Explore"
  },

  es:{
    navSobre:"Sobre",
    navDesafio:"Desafío",
    navSolucoes:"Soluciones",
    navConclusao:"Conclusión",

    heroTitle:"Agricultura fuerte, futuro sostenible",
    heroDesc:"Equilibrio entre producción y preservación ambiental.",
    btn:"Explorar"
  }
};

document.getElementById("languageSelect").addEventListener("change",(e)=>{
  const t = translations[e.target.value];

  for(let id in t){
    const el = document.getElementById(id);
    if(el) el.textContent = t[id];
  }
});
