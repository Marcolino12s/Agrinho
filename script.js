/* ============================================================
   HELPERS
   ============================================================ */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* ============================================================
   TRADUÇÕES
   ============================================================ */

const translations = {
  pt: {
    fontSmall: "Fonte pequena",
    fontMedium: "Fonte média",
    fontLarge: "Fonte grande",

    nav1: "O que é?",
    nav2: "Exemplos",
    nav3: "Vantagens",

    tag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura!",
    btnTop: "Voltar ao topo",

    whatTitle: "Um projeto sobre sustentabilidade",
    whatText:
      "AgroNá é um projeto criado para divulgar e promover ações sustentáveis no setor agrícola, visando não somente a diminuição dos impactos ambientais, mas também o aumento da produção, através de práticas limpas e seguras.",

    card1Titulo: "Maior produção",
    card1Texto: "Aproveitamento inteligente de recursos para uma produção mais eficiente.",
    card2Titulo: "Menor impacto",
    card2Texto: "Tecnologia e inovação para diminuir cada vez mais os danos.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Equilíbrio entre produtividade e sustentabilidade.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Como ela funciona na prática?",

    projeto1Titulo: "Economiza água e energia",
    projeto1Texto: "Incentiva a adoção de hábitos que reduzam o consumo de água e energia.",

    projeto2Titulo: "Protege a fauna e flora nativa",
    projeto2Texto: "Mantém e zela pelo habitat de animais como aves, mamíferos e insetos benéficos.",

    projeto3Titulo: "Apoia produtores locais",
    projeto3Texto: "Valoriza formas de produção que reduzem a emissão de gases poluentes.",

    resultadosTitulo: "Impactos positivos:",
    resultado1: "a produção",
    resultado2: "os recursos naturais",
    resultado3: "os desperdícios e custos",

    footer: "© 2026 AgroNá | Projeto Agrinho.",

    saudacao: {
      morning: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      afternoon: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      night: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    }
  },

  en: {
    fontSmall: "Small font",
    fontMedium: "Medium font",
    fontLarge: "Large font",

    nav1: "What is it?",
    nav2: "Examples",
    nav3: "Advantages",

    tag: "PRODUCTION & PRESERVATION",
    heroTitle: "A strong, smart and sustainable agriculture.",
    heroDesc: "Building paths between the future and present of agriculture!",
    btnTop: "Back to top",

    whatTitle: "A sustainability project",
    whatText:
      "AgroNá is a project created to promote sustainable actions in agriculture, aiming not only to reduce environmental impacts but also to increase production through clean and safe practices.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources for more efficient production.",
    card2Titulo: "Lower impact",
    card2Texto: "Technology and innovation to reduce environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Balance between productivity and sustainability.",

    secao: "SUSTAINABILITY",
    exemplos: "How does it work in practice?",

    projeto1Titulo: "Saves water and energy",
    projeto1Texto: "Encourages habits that reduce water and energy consumption.",

    projeto2Titulo: "Protects native wildlife",
    projeto2Texto: "Preserves habitats of birds, mammals and beneficial insects.",

    projeto3Titulo: "Supports local farmers",
    projeto3Texto: "Promotes production methods that reduce pollution emissions.",

    resultadosTitulo: "Positive impacts:",
    resultado1: "production",
    resultado2: "natural resources",
    resultado3: "waste and costs",

    footer: "© 2026 AgroNá | Agrinho Project.",

    saudacao: {
      morning: "🌅 Good morning! Welcome to AgroNá.",
      afternoon: "☀️ Good afternoon! Welcome to AgroNá.",
      night: "🌙 Good evening! Welcome to AgroNá."
    }
  },

  es: {
    fontSmall: "Fuente pequeña",
    fontMedium: "Fuente media",
    fontLarge: "Fuente grande",

    nav1: "¿Qué es?",
    nav2: "Ejemplos",
    nav3: "Ventajas",

    tag: "PRODUCCIÓN & PRESERVACIÓN",
    heroTitle: "Una agricultura fuerte, inteligente y sostenible.",
    heroDesc: "Creando caminos entre el futuro y el presente de la agricultura!",
    btnTop: "Volver arriba",

    whatTitle: "Un proyecto de sostenibilidad",
    whatText:
      "AgroNá es un proyecto creado para promover acciones sostenibles en la agricultura, buscando no solo reducir los impactos ambientales, sino también aumentar la producción mediante prácticas limpias y seguras.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos para una producción más eficiente.",
    card2Titulo: "Menor impacto",
    card2Texto: "Tecnología e innovación para reducir los daños.",
    card3Titulo: "Equilibrio",
    card3Texto: "Equilibrio entre productividad y sostenibilidad.",

    secao: "SOSTENIBILIDAD",
    exemplos: "¿Cómo funciona en la práctica?",

    projeto1Titulo: "Ahorra agua y energía",
    projeto1Texto: "Fomenta hábitos que reducen el consumo de agua y energía.",

    projeto2Titulo: "Protege la fauna y flora nativa",
    projeto2Texto: "Mantiene hábitats de aves, mamíferos e insectos beneficiosos.",

    projeto3Titulo: "Apoya a productores locales",
    projeto3Texto: "Promueve prácticas que reducen emisiones contaminantes.",

    resultadosTitulo: "Impactos positivos:",
    resultado1: "la producción",
    resultado2: "los recursos naturales",
    resultado3: "los desperdicios y costos",

    footer: "© 2026 AgroNá | Proyecto Agrinho.",

    saudacao: {
      morning: "🌅 ¡Buenos días! Bienvenido a AgroNá.",
      afternoon: "☀️ ¡Buenas tardes! Bienvenido a AgroNá.",
      night: "🌙 ¡Buenas noches! Bienvenido a AgroNá."
    }
  }
};

/* ============================================================
   APLICAR TRADUÇÃO
   ============================================================ */

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("optSmall", t.fontSmall);
  setText("optMedium", t.fontMedium);
  setText("optLarge", t.fontLarge);

  setText("navSobre", t.nav1);
  setText("navProjetos", t.nav2);
  setText("navResultados", t.nav3);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("sobreTitulo", t.whatTitle);
  setText("sobreTexto", t.whatText);

  setText("card1Titulo", t.card1Titulo);
  setText("card1Texto", t.card1Texto);
  setText("card2Titulo", t.card2Titulo);
  setText("card2Texto", t.card2Texto);
  setText("card3Titulo", t.card3Titulo);
  setText("card3Texto", t.card3Texto);

  setText("secao", t.secao);
  setText("exemplos", t.exemplos);

  setText("projeto1Titulo", t.projeto1Titulo);
  setText("projeto1Texto", t.projeto1Texto);
  setText("projeto2Titulo", t.projeto2Titulo);
  setText("projeto2Texto", t.projeto2Texto);
  setText("projeto3Titulo", t.projeto3Titulo);
  setText("projeto3Texto", t.projeto3Texto);

  setText("resultadosTitulo", t.resultadosTitulo);
  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("footerText", t.footer);

  atualizarSaudacao();
}

/* ============================================================
   SAUDAÇÃO
   ============================================================ */

function obterSaudacao() {
  const hora = new Date().getHours();
  const lang = document.getElementById("languageSelect")?.value || "pt";

  const t = translations[lang].saudacao;

  if (hora < 12) return t.morning;
  if (hora < 18) return t.afternoon;
  return t.night;
}

function atualizarSaudacao() {
  const el = document.getElementById("saudacao");
  if (el) el.textContent = obterSaudacao();
}

/* ============================================================
   FONTE
   ============================================================ */

function applyFontSize(size) {
  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[size] || "16px";
}

/* ============================================================
   MENU MOBILE
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* ============================================================
   EVENTOS
   ============================================================ */

const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
  const savedLang = localStorage.getItem("lang") || "pt";
  languageSelect.value = savedLang;

  applyTranslation(savedLang);

  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    localStorage.setItem("lang", lang);
    applyTranslation(lang);
    atualizarSaudacao();
  });
}

const fontSelect = document.getElementById("fontSizeSelect");
if (fontSelect) {
  const savedFont = localStorage.getItem("font") || "medium";
  fontSelect.value = savedFont;

  applyFontSize(savedFont);

  fontSelect.addEventListener("change", () => {
    localStorage.setItem("font", fontSelect.value);
    applyFontSize(fontSelect.value);
  });
}

/* ============================================================
   TEMA
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* ============================================================
   BOTÃO SCROLL TOP
   ============================================================ */

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 500 ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
