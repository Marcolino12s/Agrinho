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

    tag: "PRODUÇÃO • PRESERVAÇÃO • FUTURO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura!",
    btn: "Ver mais",

    oqueTitulo: "Um projeto sobre sustentabilidade?",
    oqueTexto:
      "AgroNá é um projeto criado para divulgar práticas sustentáveis no campo, equilibrando produção e preservação ambiental.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos para melhorar a eficiência.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ao meio ambiente com tecnologia.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produzir respeitando a natureza.",

    secao: "SUSTENTABILIDADE",
    projTitulo: "Como ela funciona na prática?",

    proj1Titulo: "Economia de recursos",
    proj1Texto: "Redução do uso de água e energia no campo.",

    proj2Titulo: "Proteção da fauna",
    proj2Texto: "Preservação de animais e habitats naturais.",

    proj3Titulo: "Apoio local",
    proj3Texto: "Valorização de produtores da região.",

    resultadoTitulo: "Impactos positivos",
    resultado1: "Mais produção com menos desperdício",
    resultado2: "Preservação ambiental garantida",
    resultado3: "Redução de custos agrícolas",

    footer: "© 2026 AgroNá | Projeto Agrinho"
  },

  en: {
    fontSmall: "Small font",
    fontMedium: "Medium font",
    fontLarge: "Large font",

    nav1: "What is it?",
    nav2: "Examples",
    nav3: "Benefits",

    tag: "PRODUCTION • PRESERVATION • FUTURE",
    heroTitle: "A strong,<br>smart and sustainable agriculture.",
    heroDesc: "Connecting the future and present of agriculture.",
    btn: "See more",

    oqueTitulo: "A project about sustainability?",
    oqueTexto:
      "AgroNá promotes sustainable farming practices, balancing production and environmental care.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources for better efficiency.",
    card2Titulo: "Lower impact",
    card2Texto: "Technology reduces environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Producing while respecting nature.",

    secao: "SUSTAINABILITY",
    projTitulo: "How it works in practice?",

    proj1Titulo: "Resource saving",
    proj1Texto: "Lower use of water and energy.",

    proj2Titulo: "Wildlife protection",
    proj2Texto: "Preserving animals and natural habitats.",

    proj3Titulo: "Local support",
    proj3Texto: "Valuing local farmers.",

    resultadoTitulo: "Positive impacts",
    resultado1: "More production with less waste",
    resultado2: "Environmental preservation",
    resultado3: "Lower farming costs",

    footer: "© 2026 AgroNá | Agrinho Project"
  },

  es: {
    fontSmall: "Fuente pequeña",
    fontMedium: "Fuente media",
    fontLarge: "Fuente grande",

    nav1: "¿Qué es?",
    nav2: "Ejemplos",
    nav3: "Ventajas",

    tag: "PRODUCCIÓN • PRESERVACIÓN • FUTURO",
    heroTitle: "Una agricultura fuerte,<br>inteligente y sostenible.",
    heroDesc: "Conectando el presente y el futuro de la agricultura.",
    btn: "Ver más",

    oqueTitulo: "¿Un proyecto sobre sostenibilidad?",
    oqueTexto:
      "AgroNá promueve prácticas agrícolas sostenibles equilibrando producción y naturaleza.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Reducción de daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Producir respetando la naturaleza.",

    secao: "SOSTENIBILIDAD",
    projTitulo: "Cómo funciona en la práctica",

    proj1Titulo: "Ahorro de recursos",
    proj1Texto: "Menos uso de agua y energía.",

    proj2Titulo: "Protección de fauna",
    proj2Texto: "Preservación de animales.",

    proj3Titulo: "Apoyo local",
    proj3Texto: "Valoración de productores locales.",

    resultadoTitulo: "Impactos positivos",
    resultado1: "Mayor producción",
    resultado2: "Menos impacto ambiental",
    resultado3: "Menos costos",

    footer: "© 2026 AgroNá | Proyecto Agrinho"
  }
};

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
   TRADUÇÃO
   ============================================================ */

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  setText("optSmall", t.fontSmall);
  setText("optMedium", t.fontMedium);
  setText("optLarge", t.fontLarge);

  setText("navOque", t.nav1);
  setText("navExemplos", t.nav2);
  setText("navVantagens", t.nav3);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("oqueTitulo", t.oqueTitulo);
  setText("oqueTexto", t.oqueTexto);

  setText("card1Titulo", t.card1Titulo);
  setText("card1Texto", t.card1Texto);
  setText("card2Titulo", t.card2Titulo);
  setText("card2Texto", t.card2Texto);
  setText("card3Titulo", t.card3Titulo);
  setText("card3Texto", t.card3Texto);

  setText("secao", t.secao);
  setText("projTitulo", t.projTitulo);

  setText("projeto1Titulo", t.proj1Titulo);
  setText("projeto1Texto", t.proj1Texto);
  setText("projeto2Titulo", t.proj2Titulo);
  setText("projeto2Texto", t.proj2Texto);
  setText("projeto3Titulo", t.proj3Titulo);
  setText("projeto3Texto", t.proj3Texto);

  setText("resultadosTitulo", t.resultadoTitulo);
  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("footerText", t.footer);
}

/* ============================================================
   SAUDAÇÃO (CORRIGIDA)
   ============================================================ */

function obterSaudacao(lang) {
  const hora = new Date().getHours();

  const textos = {
    pt: {
      manha: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      tarde: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      noite: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    },
    en: {
      manha: "🌅 Good morning! Welcome to AgroNá.",
      tarde: "☀️ Good afternoon! Welcome to AgroNá.",
      noite: "🌙 Good evening! Welcome to AgroNá."
    },
    es: {
      manha: "🌅 ¡Buenos días! Bienvenido a AgroNá.",
      tarde: "☀️ ¡Buenas tardes! Bienvenido a AgroNá.",
      noite: "🌙 ¡Buenas noches! Bienvenido a AgroNá."
    }
  };

  const t = textos[lang] || textos.pt;

  if (hora >= 5 && hora < 12) return t.manha;
  if (hora >= 12 && hora < 18) return t.tarde;
  return t.noite;
}

function atualizarSaudacao() {
  const el = document.getElementById("saudacao");
  const lang = document.getElementById("languageSelect")?.value || "pt";
  if (el) el.textContent = obterSaudacao(lang);
}

/* ============================================================
   BOTÃO VOLTAR AO FINAL
   ============================================================ */

const btnTopo = document.getElementById("voltar-ao-topoBtn");

if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
}

/* ============================================================
   MOSTRAR BOTÃO NO FINAL DA PÁGINA
   ============================================================ */

window.addEventListener("scroll", () => {
  if (!btnTopo) return;

  const scrollY = window.scrollY;
  const alturaPagina = document.body.scrollHeight - window.innerHeight;

  if (scrollY >= alturaPagina - 50) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

/* ============================================================
   IDIOMA
   ============================================================ */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  const saved = localStorage.getItem("lang") || "pt";
  languageSelect.value = saved;

  applyTranslation(saved);
  atualizarSaudacao();

  languageSelect.addEventListener("change", () => {
    localStorage.setItem("lang", languageSelect.value);
    applyTranslation(languageSelect.value);
    atualizarSaudacao();
  });
}

/* ============================================================
   FONTE
   ============================================================ */

const fontSizeSelect = document.getElementById("fontSizeSelect");

if (fontSizeSelect) {
  const saved = localStorage.getItem("font") || "medium";
  fontSizeSelect.value = saved;

  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[saved];

  fontSizeSelect.addEventListener("change", () => {
    localStorage.setItem("font", fontSizeSelect.value);
    document.documentElement.style.fontSize = sizes[fontSizeSelect.value];
  });
}

/* ============================================================
   TEMA
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const dark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");
  });
}

/* ============================================================
   INIT
   ============================================================ */

atualizarSaudacao();
