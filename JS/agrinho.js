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
    fontSmall: "Fonte pequena",
    fontMedium: "Fonte média",
    fontLarge: "Fonte grande",

    nav1: "O que é?",
    nav2: "Exemplos",
    nav3: "Calcular",
    nav4: "Vantagens",

    tag: "PRODUÇÃO & PRESERVAÇÃO",
    heroTitle: "Um agro forte,<br>inteligente e sustentável.",
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura.",

    sobreTitulo: "O que é sustentabilidade?",
    sobreTexto: "AgroNá incentiva práticas agrícolas sustentáveis.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Como funciona na prática?",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    //  CARDS COM IMAGENS (PROJETOS)
    projeto1Titulo: "Economiza recursos",
    projeto1Texto: "Uso consciente de água e energia.",

    projeto2Titulo: "Protege a biodiversidade",
    projeto2Texto: "Preserva fauna e flora nativa.",

    projeto3Titulo: "Apoia produtores locais",
    projeto3Texto: "Fortalece a economia rural.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta a produção agrícola",
    resultado2: "Preserva os recursos naturais",
    resultado3: "Reduz custos e desperdícios",

    footer: "© 2026 AgroNá | Projeto Agrinho",

    calcTitle: "Calculadora de Sustentabilidade",
    calcSubtitle: "Descubra se sua propriedade é sustentável",
    areaTotal: "Área total (ha)",
    areaPlantio: "Área de plantio (ha)",
    areaMata: "Área de mata nativa (ha)",
    agrotoxico: "Utiliza agrotóxicos?",
    button: "Calcular",

    calcPlaceholder: "Preencha os dados para calcular.",

    calc: {
      fill: "Preencha todos os campos corretamente.",
      areaZero: "A área total deve ser maior que zero.",
      plantioError: "Área de plantio não pode ultrapassar o total.",
      mataError: "Área de mata não pode ultrapassar o total.",
      sumError: "A soma das áreas não pode ultrapassar o total."
    },

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
    nav3: "Calculate",
    nav4: "Benefits",

    tag: "PRODUCTION & PRESERVATION",
    heroTitle: "Strong, smart and sustainable agriculture.",
    heroDesc: "Connecting the future and present of agriculture.",

    sobreTitulo: "What is sustainability?",
    sobreTexto: "AgroNá promotes sustainable farming practices.",

    secao: "SUSTAINABILITY",
    exemplos: "How does it work in practice?",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reducing environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Production and nature in harmony.",

    projeto1Titulo: "Saves resources",
    projeto1Texto: "Efficient use of water and energy.",

    projeto2Titulo: "Protects biodiversity",
    projeto2Texto: "Preserves native flora and fauna.",

    projeto3Titulo: "Supports local farmers",
    projeto3Texto: "Strengthens rural economy.",

    resultadosTitulo: "Positive impacts",
    resultado1: "Increases agricultural production",
    resultado2: "Preserves natural resources",
    resultado3: "Reduces costs and waste",

    footer: "© 2026 AgroNá | Agrinho Project",

    calcTitle: "Sustainability Calculator",
    calcSubtitle: "Check if your farm is sustainable",
    areaTotal: "Total area (ha)",
    areaPlantio: "Crop area (ha)",
    areaMata: "Forest area (ha)",
    agrotoxico: "Uses pesticides?",
    button: "Calculate",

    calcPlaceholder: "Fill in the data to calculate.",

    calc: {
      fill: "Fill in all fields correctly.",
      areaZero: "Total area must be greater than zero.",
      plantioError: "Crop area cannot exceed total.",
      mataError: "Forest area cannot exceed total.",
      sumError: "Sum cannot exceed total."
    },

    saudacao: {
      morning: "🌅 Good morning!",
      afternoon: "☀️ Good afternoon!",
      night: "🌙 Good evening!"
    }
  },

  es: {
    fontSmall: "Fuente pequeña",
    fontMedium: "Fuente media",
    fontLarge: "Fuente grande",

    nav1: "¿Qué es?",
    nav2: "Ejemplos",
    nav3: "Calcular",
    nav4: "Ventajas",

    tag: "PRODUCCIÓN & PRESERVACIÓN",
    heroTitle: "Agricultura fuerte, inteligente y sostenible.",
    heroDesc: "Conectando el presente y futuro de la agricultura.",

    sobreTitulo: "¿Qué es la sostenibilidad?",
    sobreTexto: "AgroNá promueve prácticas agrícolas sostenibles.",

    secao: "SOSTENIBILIDAD",
    exemplos: "¿Cómo funciona en la práctica?",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Reducción de daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Producción y naturaleza en armonía.",

    projeto1Titulo: "Ahorra recursos",
    projeto1Texto: "Uso eficiente de agua y energía.",

    projeto2Titulo: "Protege la biodiversidad",
    projeto2Texto: "Preserva flora y fauna nativa.",

    projeto3Titulo: "Apoya agricultores locales",
    projeto3Texto: "Fortalece la economía rural.",

    resultadosTitulo: "Impactos positivos",
    resultado1: "Aumenta la producción agrícola",
    resultado2: "Preserva los recursos naturales",
    resultado3: "Reduce costos y desperdicios",

    footer: "© 2026 AgroNá | Proyecto Agrinho",

    calcTitle: "Calculadora de Sostenibilidad",
    calcSubtitle: "Descubre si tu propiedad es sostenible",
    areaTotal: "Área total (ha)",
    areaPlantio: "Área de cultivo (ha)",
    areaMata: "Área de bosque nativo (ha)",
    agrotoxico: "¿Usa pesticidas?",
    button: "Calcular",

    calcPlaceholder: "Complete los datos para calcular.",

    calc: {
      fill: "Complete todos los campos.",
      areaZero: "El área debe ser mayor que cero.",
      plantioError: "El cultivo no puede superar el total.",
      mataError: "El bosque no puede superar el total.",
      sumError: "La suma no puede superar el total."
    },

    saudacao: {
      morning: "🌅 ¡Buenos días!",
      afternoon: "☀️ ¡Buenas tardes!",
      night: "🌙 ¡Buenas noches!"
    }
  }
};

/* =========================
   APPLY LANGUAGE
========================= */
function applyLanguage(lang) {
  const t = translations[lang] || translations.pt;

  setText("navSobre", t.nav1);
  setText("navProjetos", t.nav2);
  setText("navCalculadora", t.nav3);
  setText("navResultados", t.nav4);

  setText("optSmall", t.fontSmall);
  setText("optMedium", t.fontMedium);
  setText("optLarge", t.fontLarge);

  setText("heroTag", t.tag);
  setHTML("heroTitle", t.heroTitle);
  setText("heroDescription", t.heroDesc);

  setText("sobreTitulo", t.sobreTitulo);
  setText("sobreTexto", t.sobreTexto);

  setText("secao", t.secao);
  setText("exemplos", t.exemplos);

  setText("card1Titulo", t.card1Titulo);
  setText("card1Texto", t.card1Texto);
  setText("card2Titulo", t.card2Titulo);
  setText("card2Texto", t.card2Texto);
  setText("card3Titulo", t.card3Titulo);
  setText("card3Texto", t.card3Texto);

  // PROJETOS (CARDS COM IMAGEM)
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

  setText("calcTitle", t.calcTitle);
  setText("calcSubtitle", t.calcSubtitle);

  setText("labelAreaTotal", t.areaTotal);
  setText("labelAreaPlantio", t.areaPlantio);
  setText("labelAreaMata", t.areaMata);
  setText("labelAgrotoxico", t.agrotoxico);
  setText("calcularBtn", t.button);

  setText("classificacao", t.calcPlaceholder);

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

    const notaEl = document.getElementById("notaFinal");
    const barra = document.getElementById("barraProgresso");
    const classEl = document.getElementById("classificacao");

    // RESET VISUAL SEMPRE
    aviso.textContent = "";
    notaEl.textContent = "0/100";
    barra.style.width = "0%";
    classEl.textContent = "";

    if (!total || !plantio || !mata) {
      aviso.textContent = t.fill;
      return;
    }

    if (total <= 0) {
      aviso.textContent = t.areaZero;
      return;
    }

    if (plantio > total) {
      aviso.textContent = t.plantioError;
      return;
    }

    if (mata > total) {
      aviso.textContent = t.mataError;
      return;
    }

    if (plantio + mata > total) {
      aviso.textContent = t.sumError;
      return;
    }

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

    // CLASSIFICAÇÃO
    let classificacao = "";

    if (nota >= 95) classificacao = "🌳 Exemplar";
    else if (nota >= 85) classificacao = "🌿 Excelente";
    else if (nota >= 70) classificacao = "🌱 Muito boa";
    else if (nota >= 55) classificacao = "🌾 Boa";
    else if (nota >= 40) classificacao = "⚠️ Regular";
    else if (nota >= 20) classificacao = "🚨 Baixa";
    else classificacao = "❌ Crítica";

    notaEl.textContent = `${nota}/100`;
    barra.style.width = `${nota}%`;
    classEl.textContent = classificacao;
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

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
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
   
   /* =========================
   BOTÃO DE VOLTAR AO TOPO
========================= */
const scrollBtn = document.getElementById("scrollTopBtn");

// mostrar/ocultar botão ao rolar
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// voltar ao topo
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
   
});
