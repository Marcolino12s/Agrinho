/* ============================================================
   TRADUÇÕES — declaradas primeiro para ficarem disponíveis
   para todas as funções abaixo
   ============================================================ */

const translations = {

  pt: {
    fontSmall: "Pequena",
    fontMedium: "Média",
    fontLarge: "Grande",
    nav1: "Sobre",
    nav2: "Projetos",
    nav3: "Resultados",
    tag: "INOVAÇÃO • PRESERVAÇÃO • TRANSFORMAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Incentivando práticas agrícolas modernas, sustentáveis, econômicas e conscientes, para proteger não somente o meio ambiente, mas também o futuro.",
    btn: "Ver mais",
    sobreTitulo: "Produzir sem destruir",
    sobreTexto: "O agro sustentável combina produtividade, inovação e preservação ambiental. Com técnicas modernas, é possível reduzir desperdícios, economizar recursos naturais e ainda melhorar a qualidade da produção.",
    card1Titulo: "Menos desperdício",
    card1Texto: "Aproveitamento inteligente de recursos e produção mais consciente.",
    card2Titulo: "Mais eficiência",
    card2Texto: "Tecnologia e inovação para produzir mais com menos.",
    card3Titulo: "Futuro sustentável",
    card3Texto: "Equilíbrio entre produtividade, natureza e desenvolvimento.",
    secao: "SUSTENTABILIDADE",
    exemplos: "Exemplos e resultados",
    projeto1Titulo: "Cultivo sustentável",
    projeto1Texto: "Tecnologia e cuidado ambiental trabalhando juntos no campo.",
    projeto1Info: "✔ Preservação e produtividade",
    projeto2Titulo: "Produção eficiente",
    projeto2Texto: "Métodos modernos para reduzir desperdícios e aumentar resultados.",
    projeto2Info: "✔ Mais rendimento agrícola",
    projeto3Titulo: "Solo preservado",
    projeto3Texto: "Técnicas naturais que fortalecem a terra e melhoram a colheita.",
    projeto3Info: "✔ Maior fertilidade natural",
    resultados: "Impactos positivos",
    resultado1: "Eficiência agrícola.",
    resultado2: "Desperdício hídrico.",
    resultado3: "Uso de energia limpa.",
    footer: "© 2026 AgroNova | Projeto Agrinho."
  },

  en: {
    fontSmall: "Small",
    fontMedium: "Medium",
    fontLarge: "Large",
    nav1: "About",
    nav2: "Projects",
    nav3: "Results",
    tag: "INNOVATION • PRESERVATION • TRANSFORMATION",
    heroTitle: "A strong,<br>smart and sustainable agriculture.",
    heroDesc: "Encouraging modern, sustainable, economical and conscious agricultural practices to protect not only the environment, but also the future.",
    btn: "See more",
    sobreTitulo: "Producing without destroying",
    sobreTexto: "Sustainable agriculture combines productivity, innovation and environmental preservation. With modern techniques it is possible to reduce waste, save natural resources and improve production quality.",
    card1Titulo: "Less waste",
    card1Texto: "Smart use of resources and more conscious production.",
    card2Titulo: "More efficiency",
    card2Texto: "Technology and innovation to produce more with less.",
    card3Titulo: "Sustainable future",
    card3Texto: "Balance between productivity, nature and development.",
    secao: "SUSTAINABILITY",
    exemplos: "Examples and results",
    projeto1Titulo: "Sustainable cultivation",
    projeto1Texto: "Technology and environmental care working together in the field.",
    projeto1Info: "✔ Preservation and productivity",
    projeto2Titulo: "Efficient production",
    projeto2Texto: "Modern methods to reduce waste and increase results.",
    projeto2Info: "✔ Higher agricultural yield",
    projeto3Titulo: "Preserved soil",
    projeto3Texto: "Natural techniques that strengthen the soil and improve harvests.",
    projeto3Info: "✔ Greater natural fertility",
    resultados: "Positive impacts",
    resultado1: "Agricultural efficiency.",
    resultado2: "Water waste.",
    resultado3: "Clean energy usage.",
    footer: "© 2026 AgroNova | Projeto Agrinho."
  },

  es: {
    fontSmall: "Pequeña",
    fontMedium: "Mediana",
    fontLarge: "Grande",
    nav1: "Acerca",
    nav2: "Proyectos",
    nav3: "Resultados",
    tag: "INNOVACIÓN • PRESERVACIÓN • TRANSFORMACIÓN",
    heroTitle: "Una agricultura fuerte,<br>inteligente y sostenible.",
    heroDesc: "Promoviendo prácticas agrícolas modernas, sostenibles, económicas y responsables para proteger no solo el medio ambiente, sino también el futuro.",
    btn: "Ver más",
    sobreTitulo: "Producir sin destruir",
    sobreTexto: "La agricultura sostenible combina productividad, innovación y preservación ambiental. Con técnicas modernas es posible reducir desperdicios, ahorrar recursos naturales y mejorar la calidad de la producción.",
    card1Titulo: "Menos desperdicio",
    card1Texto: "Uso inteligente de recursos y producción más consciente.",
    card2Titulo: "Más eficiencia",
    card2Texto: "Tecnología e innovación para producir más con menos.",
    card3Titulo: "Futuro sostenible",
    card3Texto: "Equilibrio entre productividad, naturaleza y desarrollo.",
    secao: "SOSTENIBILIDAD",
    exemplos: "Ejemplos y resultados",
    projeto1Titulo: "Cultivo sostenible",
    projeto1Texto: "Tecnología y cuidado ambiental trabajando juntos en el campo.",
    projeto1Info: "✔ Preservación y productividad",
    projeto2Titulo: "Producción eficiente",
    projeto2Texto: "Métodos modernos para reducir desperdicios y aumentar resultados.",
    projeto2Info: "✔ Mayor rendimiento agrícola",
    projeto3Titulo: "Suelo preservado",
    projeto3Texto: "Técnicas naturales que fortalecen la tierra y mejoran la cosecha.",
    projeto3Info: "✔ Mayor fertilidad natural",
    resultados: "Impactos positivos",
    resultado1: "Eficiencia agrícola.",
    resultado2: "Desperdicio hídrico.",
    resultado3: "Uso de energía limpia.",
    footer: "© 2026 AgroNova | Projeto Agrinho."
  }

};

/* Idioma: */
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
  const savedLang = localStorage.getItem("agronova-lang") || "pt";
  languageSelect.value = savedLang;
  applyTranslation(savedLang);

  languageSelect.addEventListener("change", () => {
    applyTranslation(languageSelect.value);
    localStorage.setItem("agronova-lang", languageSelect.value);
  });
}

/* Tamanho de fonte: */
const fontSelect = document.getElementById("fontSizeSelect");
if (fontSelect) {
  const savedFont = localStorage.getItem("agronova-font") || "medium";
  fontSelect.value = savedFont;
  applyFontSize(savedFont);

  fontSelect.addEventListener("change", () => {
    applyFontSize(fontSelect.value);
    localStorage.setItem("agronova-font", fontSelect.value);
  });
}

/* Tema claro/escuro: */
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const savedTheme = localStorage.getItem("agronova-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("agronova-theme", isDark ? "dark" : "light");
  });
}

/* Botão explorar: */
const botao = document.getElementById("explorarBtn");
if (botao) {
  botao.addEventListener("click", () => {
    document.getElementById("projetos").scrollIntoView({ behavior: "smooth" });
  });
}
