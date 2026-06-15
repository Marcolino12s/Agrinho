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

    sobreTitulo: "Um simples projeto sobre sustentabilidade?",
    sobreTexto: "AgroNá é um projeto criado para divulgar e promover ações sustentáveis no setor agrícola, visando não somente a diminuição dos impactos ambientais, mas também o aumento da produção, através de práticas limpas e seguras.",

    secao: "SUSTENTABILIDADE",
    exemplos: "Como funciona na prática?",

    card1Titulo: "Maior produção",
    card1Texto: "Aproveitamento inteligente de recursos para uma produção mais eficiente.",
    card2Titulo: "Menor impacto",
    card2Texto: "Tecnologia e inovação para diminuir cada vez mais os danos ao ambiente.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    projeto1Titulo: "Economiza recursos",
    projeto1Texto: "Incentiva a adoção de hábitos que reduzam o consumo de água e energia.",
    projeto2Titulo: "Protege a fauna e flora nativa",
    projeto2Texto: "Zela pelo habitat de animais como aves, mamíferos e insetos benéficos.",
    projeto3Titulo: "Apoia pequenos produtores",
    projeto3Texto: "Valoriza formas de produção que reduzem a emissão de gases poluentes.",

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
      sumError: "A soma das áreas não pode ultrapassar o total.",

      exemplar: "Exemplar",
      excelente: "Excelente",
      muitoBoa: "Muito boa",
      boa: "Boa",
      regular: "Regular",
      baixa: "Baixa",
      critica: "Crítica"
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

    sobreTitulo: "A simple project about sustainability?",
    sobreTexto: "AgroNá is a project created to promote sustainable actions in agriculture, aiming not only to reduce environmental impacts but also to increase production through clean and safe practices.",

    secao: "SUSTAINABILITY",
    exemplos: "How does it work in practice?",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources for more efficient production.",
    card2Titulo: "Lower impact",
    card2Texto: "Technology and innovation to reduce damage more and more..",
    card3Titulo: "Balance",
    card3Texto: "Production and nature in harmony.",

    projeto1Titulo: "Saves resources",
    projeto1Texto: "Encourages habits that reduce water and energy consumption.",
    projeto2Titulo: "Protects native wildlife",
    projeto2Texto: "Preserves habitats of birds, mammals and beneficial insects.",
    projeto3Titulo: "Supports small farmers",
    projeto3Texto: "Promotes production methods that reduce pollution emissions.",

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
      sumError: "Sum cannot exceed total.",

      exemplar: "Exemplary",
      excelente: "Excellent",
      muitoBoa: "Very good",
      boa: "Good",
      regular: "Regular",
      baixa: "Low",
      critica: "Critical"
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
    sobreTexto: "AgroNá es un proyecto creado para promover acciones sostenibles en la agricultura, buscando no solo reducir los impactos ambientales, sino también aumentar la producción mediante prácticas limpias y seguras.",

    secao: "SOSTENIBILIDAD",
    exemplos: "¿Un simple proyecto sobre sostenibilidad?",

    card1Titulo: "Mayor producción",
    card1Texto: "Aprovechamiento inteligente de recursos para una producción más eficiente.",
    card2Titulo: "Menor impacto",
    card2Texto: "Tecnología e innovación para reducir cada vez más los daños..",
    card3Titulo: "Equilibrio",
    card3Texto: "Producción y naturaleza en armonía.",

    projeto1Titulo: "Ahorra recursos",
    projeto1Texto: "Fomenta hábitos que reducen el consumo de agua y energía.",
    projeto2Titulo: "Protege la fauna y flora nativa",
    projeto2Texto: "Mantiene hábitats de aves, mamíferos e insectos beneficiosos.",
    projeto3Titulo: "Apoya pequeños productores",
    projeto3Texto: "Promueve prácticas que reducen emisiones contaminantes.",

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
      fill: "Complete todos los campos correctamente.",
      areaZero: "El área debe ser mayor que cero.",
      plantioError: "El cultivo no puede superar el total.",
      mataError: "El bosque no puede superar el total.",
      sumError: "La suma no puede superar el total.",

      exemplar: "Ejemplar",
      excelente: "Excelente",
      muitoBoa: "Muy bueno",
      boa: "Bueno",
      regular: "Regular",
      baixa: "Bajo",
      critica: "Crítico"
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

   const select = document.getElementById("agrotoxico");

if (select) {
  const valorAtual = select.value;

  const textos = {
    pt: { sim: "Sim", nao: "Não" },
    en: { sim: "Yes", nao: "No" },
    es: { sim: "Sí", nao: "No" }
  };

  select.innerHTML = `
    <option value="nao">${textos[lang].nao}</option>
    <option value="sim">${textos[lang].sim}</option>
  `;

  select.value = valorAtual;
}

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

    aviso.textContent = "";
    notaEl.textContent = "0/100";
    barra.style.width = "0%";
    classEl.textContent = "";

    if (!total || !plantio || !mata) {
      aviso.textContent = t.fill;
      return;
    }

    if (total <= 0) return aviso.textContent = t.areaZero;
    if (plantio > total) return aviso.textContent = t.plantioError;
    if (mata > total) return aviso.textContent = t.mataError;
    if (plantio + mata > total) return aviso.textContent = t.sumError;

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

    let classificacao = "";

    if (nota >= 95) classificacao = "🌳 " + t.exemplar;
    else if (nota >= 85) classificacao = "🌿 " + t.excelente;
    else if (nota >= 70) classificacao = "🌱 " + t.muitoBoa;
    else if (nota >= 55) classificacao = "🌾 " + t.boa;
    else if (nota >= 40) classificacao = "⚠️ " + t.regular;
    else if (nota >= 20) classificacao = "🚨 " + t.baixa;
    else classificacao = "❌ " + t.critica;

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
   BOTÃO TOPO
========================= */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (!scrollBtn) return;
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

});
