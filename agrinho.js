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
