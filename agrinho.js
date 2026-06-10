const botao = document.getElementById("explorarBtn");

botao.addEventListener("click", () => {
  document.getElementById("projetos").scrollIntoView({
    behavior: "smooth"
  });
});

/* Efeito simples nos cards */

const cards = document.querySelectorAll(".projeto-card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});

/* ========================= */
/* TEMA CLARO / ESCURO */
/* ========================= */

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
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
    nav1: "Sobre",
    nav2: "Projetos",
    nav3: "Resultados",

    tag: "INOVAÇÃO • PRESERVAÇÃO • TRANSFORMAÇÃO",

    heroTitle: "Um agro forte,<br>inteligente e sustentável.",

    heroDesc:
      "Incentivando práticas agrícolas modernas, sustentáveis, econômicas e conscientes, para proteger não somente o meio ambiente, mas também o futuro.",

    btn: "Ver mais",

    sobreTitulo: "Produzir sem destruir",

    sobreTexto:
      "O agro sustentável combina produtividade, inovação e preservação ambiental. Com técnicas modernas, é possível reduzir desperdícios, economizar recursos naturais e ainda melhorar a qualidade da produção.",

    card1: "☀ Menos desperdício",
    card2: "☀ Mais eficiência",
    card3: "☀ Futuro sustentável",

    secao: "SUSTENTABILIDADE",
    exemplos: "Exemplos e resultados",

    resultados: "Impactos positivos"
  },

  en: {
    nav1: "About",
    nav2: "Projects",
    nav3: "Results",

    tag: "INNOVATION • PRESERVATION • TRANSFORMATION",

    heroTitle: "A strong,<br>smart and sustainable agriculture.",

    heroDesc:
      "Encouraging modern, sustainable, economical and conscious agricultural practices to protect not only the environment, but also the future.",

    btn: "See more",

    sobreTitulo: "Producing without destroying",

    sobreTexto:
      "Sustainable agriculture combines productivity, innovation and environmental preservation. With modern techniques it is possible to reduce waste, save natural resources and improve production quality.",

    card1: "☀ Less waste",
    card2: "☀ More efficiency",
    card3: "☀ Sustainable future",

    secao: "SUSTAINABILITY",
    exemplos: "Examples and results",

    resultados: "Positive impacts"
  },

  es: {
    nav1: "Acerca",
    nav2: "Proyectos",
    nav3: "Resultados",

    tag: "INNOVACIÓN • PRESERVACIÓN • TRANSFORMACIÓN",

    heroTitle: "Una agricultura fuerte,<br>inteligente y sostenible.",

    heroDesc:
      "Promoviendo prácticas agrícolas modernas, sostenibles, económicas y responsables para proteger no solo el medio ambiente, sino también el futuro.",

    btn: "Ver más",

    sobreTitulo: "Producir sin destruir",

    sobreTexto:
      "La agricultura sostenible combina productividad, innovación y preservación ambiental. Con técnicas modernas es posible reducir desperdicios, ahorrar recursos naturales y mejorar la calidad de la producción.",

    card1: "☀ Menos desperdicio",
    card2: "☀ Más eficiencia",
    card3: "☀ Futuro sostenible",

    secao: "SOSTENIBILIDAD",
    exemplos: "Ejemplos y resultados",

    resultados: "Impactos positivos"
  }

};

const languageSelect = document.getElementById("languageSelect");

if(languageSelect){

  languageSelect.addEventListener("change", () => {

    const t = translations[languageSelect.value];

    document.querySelectorAll("nav ul li a")[0].textContent = t.nav1;
    document.querySelectorAll("nav ul li a")[1].textContent = t.nav2;
    document.querySelectorAll("nav ul li a")[2].textContent = t.nav3;

    document.querySelector(".tag").innerHTML = t.tag;

    document.querySelector(".hero-content h2").innerHTML =
      t.heroTitle;

    document.querySelector(".description").innerHTML =
      t.heroDesc;

    document.getElementById("explorarBtn").textContent =
      t.btn;

    document.querySelector(".texto h3").textContent =
      t.sobreTitulo;

    document.querySelector(".texto p").textContent =
      t.sobreTexto;

    document.querySelectorAll(".mini-card h4")[0].textContent =
      t.card1;

    document.querySelectorAll(".mini-card h4")[1].textContent =
      t.card2;

    document.querySelectorAll(".mini-card h4")[2].textContent =
      t.card3;

    document.querySelector(".section-title p").textContent =
      t.secao;

    document.querySelector(".section-title h3").textContent =
      t.exemplos;

    document.querySelector(".resultado-box h3").textContent =
      t.resultados;

  });

}
