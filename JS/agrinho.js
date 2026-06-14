document.addEventListener("DOMContentLoaded", () => {

/* =========================
   HELPERS
========================= */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* =========================
   TRADUÇÕES
========================= */
const translations = {
  pt: {
    nav1: "O que é?",
    nav2: "Exemplos",
    nav3: "Calcular",
    nav4: "Vantagens",

    tag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura.",

    sobreTitulo: "O que é sustentabilidade?",
    sobreTexto: "AgroNá é um projeto criado para divulgar e promover ações sustentáveis no setor agrícola, visando não somente a diminuição dos impactos ambientais, mas também o aumento da produção, através de práticas limpas e seguras.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta a produção agrícola",
    resultado2: "Preserva os recursos naturais",
    resultado3: "Reduz custos e desperdícios",

    footer: "© 2026 AgroNá | Projeto Agrinho",

    saudacao: {
      morning: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      afternoon: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      night: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    },

    calc: {
      fill: "Preencha todos os campos corretamente.",
      areaZero: "A área total deve ser maior que zero.",
      plantioError: "Área de plantio não pode ultrapassar o total.",
      mataError: "Área de mata não pode ultrapassar o total.",
      sumError: "A soma das áreas não pode ultrapassar o total."
    }
  },

  en: {
    nav1: "What is it?",
    nav2: "Examples",
    nav3: "Calculate",
    nav4: "Benefits",

    tag: "PRODUCTION & PRESERVATION",
    heroTitle: "Strong, smart and sustainable agriculture.",
    heroDesc: "Connecting the future and present of agriculture.",

    sobreTitulo: "What is sustainability?",
    sobreTexto: "AgroNá is a project created to promote sustainable actions in the agricultural sector, aiming not only to reduce environmental impacts but also to increase production through clean and safe practices.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reducing environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Production and nature in harmony.",

    resultadosTitulo: "Positive impacts",
    resultado1: "Increases agricultural production",
    resultado2: "Preserves natural resources",
    resultado3: "Reduces costs and waste",

    footer: "© 2026 AgroNá | Agrinho Project",

    saudacao: {
      morning: "🌅 Good morning! Welcome to AgroNá.",
      afternoon: "☀️ Good afternoon! Welcome to AgroNá.",
      night: "🌙 Good evening! Welcome to AgroNá."
    },

    calc: {
      fill: "Fill in all fields correctly.",
      areaZero: "Total area must be greater than zero.",
      plantioError: "Crop area cannot exceed total.",
      mataError: "Forest area cannot exceed total.",
      sumError: "Sum of areas cannot exceed total."
    }
  },

  es: {
    nav1: "¿Qué es?",
    nav2: "Ejemplos",
    nav3: "Calcular",
    nav4: "Ventajas",

    tag: "PRODUCCIÓN & PRESERVACIÓN",
    heroTitle: "Agricultura fuerte, inteligente y sostenible.",
    heroDesc: "Conectando el presente y futuro de la agricultura.",

    sobreTitulo: "¿Qué es la sostenibilidad?",
    sobreTexto: "AgroNá es un proyecto creado para divulgar y promover acciones sostenibles en el sector agrícola, buscando no solo la reducción de los impactos ambientales, sino también el aumento de la producción mediante prácticas limpias y seguras.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Reducción de daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Producción y naturaleza en armonía.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta la producción agrícola",
    resultado2: "Preserva los recursos naturales",
    resultado3: "Reduce costos y desperdicios",

    footer: "© 2026 AgroNá | Proyecto Agrinho",

    saudacao: {
      morning: "🌅 ¡Buenos días!",
      afternoon: "☀️ ¡Buenas tardes!",
      night: "🌙 ¡Buenas noches!"
    },

    calc: {
      fill: "Complete todos los campos.",
      areaZero: "El área total debe ser mayor que cero.",
      plantioError: "El cultivo no puede superar el total.",
      mataError: "El bosque no puede superar el total.",
      sumError: "La suma no puede superar el total."
    }
  }
};

/* =========================
   IDIOMA
========================= */
function applyLanguage(lang) {
  const t = translations[lang] || translations.pt;

  setText("navSobre", t.nav1);
  setText("navProjetos", t.nav2);
  setText("navCalculadora", t.nav3);
  setText("navResultados", t.nav4);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("sobreTitulo", t.sobreTitulo);
  setText("sobreTexto", t.sobreTexto);

  setText("card1Titulo", t.card1Titulo);
  setText("card1Texto", t.card1Texto);
  setText("card2Titulo", t.card2Titulo);
  setText("card2Texto", t.card2Texto);
  setText("card3Titulo", t.card3Titulo);
  setText("card3Texto", t.card3Texto);

  setText("resultadosTitulo", t.resultadosTitulo);
  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("footerText", t.footer);

  atualizarSaudacao();
}

/* =========================
   SAUDAÇÃO
========================= */
function atualizarSaudacao() {
  const lang = document.getElementById("languageSelect").value;
  const t = translations[lang];

  const hora = new Date().getHours();
  const el = document.getElementById("saudacao");

  if (!el) return;

  if (hora < 12) el.textContent = t.saudacao.morning;
  else if (hora < 18) el.textContent = t.saudacao.afternoon;
  else el.textContent = t.saudacao.night;
}

/* =========================
   CALCULADORA
========================= */
const btn = document.getElementById("calcularBtn");

if (btn) {
  btn.addEventListener("click", () => {

    const lang = document.getElementById("languageSelect").value;
    const t = translations[lang].calc;

    const total = Number(document.getElementById("areaTotal").value);
    const plantio = Number(document.getElementById("areaPlantio").value);
    const mata = Number(document.getElementById("areaMata").value);
    const agro = document.getElementById("agrotoxico").value;

    const aviso = document.getElementById("avisoCalc");

// sempre limpa no início
aviso.textContent = "";
aviso.classList.add("hidden");

if (!total || !plantio || !mata) {
  aviso.textContent = t.fill;
  aviso.classList.remove("hidden");
  return;
}

if (total <= 0) {
  aviso.textContent = t.areaZero;
  aviso.classList.remove("hidden");
  return;
}

if (plantio > total) {
  aviso.textContent = t.plantioError;
  aviso.classList.remove("hidden");
  return;
}

if (mata > total) {
  aviso.textContent = t.mataError;
  aviso.classList.remove("hidden");
  return;
}

if (plantio + mata > total) {
  aviso.textContent = t.sumError;
  aviso.classList.remove("hidden");
  return;
}

// sucesso → esconde aviso
aviso.textContent = "";
aviso.classList.add("hidden");

    aviso.textContent = "";

    let nota = 0;

    const percMata = (mata / total) * 100;
    const usoSolo = (plantio / total) * 100;

    if (percMata >= 40) nota += 40;
    else if (percMata >= 30) nota += 35;
    else if (percMata >= 20) nota += 25;
    else nota += 10;

    nota += agro === "nao" ? 20 : 5;

    if (usoSolo <= 60) nota += 40;
    else if (usoSolo <= 75) nota += 30;
    else nota += 15;

    if (nota > 100) nota = 100;

    document.getElementById("notaFinal").textContent = `${nota}/100`;
    document.getElementById("barraProgresso").style.width = `${nota}%`;
  });
}

/* =========================
   MENU MOBILE
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* =========================
   DARK MODE
========================= */
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-theme");
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* =========================
   FONTE
========================= */
const fontSelect = document.getElementById("fontSizeSelect");

if (fontSelect) {
  const saved = localStorage.getItem("font") || "medium";
  fontSelect.value = saved;

  setFont(saved);

  fontSelect.addEventListener("change", () => {
    setFont(fontSelect.value);
  });
}

function setFont(size) {
  if (size === "small") document.documentElement.style.fontSize = "14px";
  if (size === "medium") document.documentElement.style.fontSize = "16px";
  if (size === "large") document.documentElement.style.fontSize = "18px";

  localStorage.setItem("font", size);
}

/* =========================
   INIT
========================= */
const langSelect = document.getElementById("languageSelect");

if (langSelect) {
  const saved = localStorage.getItem("lang") || "pt";
  langSelect.value = saved;

  applyLanguage(saved);
  atualizarSaudacao();

  langSelect.addEventListener("change", () => {
    localStorage.setItem("lang", langSelect.value);
    applyLanguage(langSelect.value);
  });
}

});
