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
    heroDesc: "Traçando caminhos entre o futuro e o presente da agricultura!",
    btnTop: "Voltar ao topo",

    whatTitle: "Um projeto sobre sustentabilidade?",
    whatText:
      "AgroNá é um projeto criado para divulgar e promover ações sustentáveis no setor agrícola.",

    card1Titulo: "Maior produção",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Redução de danos ambientais.",
    card3Titulo: "Equilíbrio",
    card3Texto: "Produção e natureza em harmonia.",

    resultadosTitulo: "Impactos positivos:",
    resultado1: "Aumenta a produção agrícola",
    resultado2: "Preserva os recursos naturais",
    resultado3: "Reduz custos e desperdícios",

    footer: "© 2026 AgroNá | Projeto Agrinho.",

    saudacao: {
      morning: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      afternoon: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      night: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    },

    calc: {
      title: "Calculadora de Sustentabilidade",
      subtitle: "Descubra se sua propriedade é sustentável",
      areaTotal: "Área total (ha)",
      areaPlantio: "Área de plantio (ha)",
      areaMata: "Área de mata nativa (ha)",
      agrotoxico: "Utiliza agrotóxicos?",
      sim: "Sim",
      nao: "Não",
      button: "Calcular",
      fillFields: "Preencha todos os campos.",
      areaZero: "Área total deve ser maior que zero.",
      plantioError: "Plantio não pode ser maior que o total.",
      mataError: "Mata não pode ser maior que o total.",
      sumError: "Soma não pode ultrapassar o total.",

      result: {
        exemplar: "🌳 Exemplar",
        excellent: "🌿 Excelente",
        veryGood: "🌱 Muito Boa",
        good: "🌾 Boa",
        regular: "⚠️ Regular",
        low: "🚨 Baixa",
        critical: "❌ Crítica"
      }
    }
  },

  en: {
    fontSmall: "Small font",
    fontMedium: "Medium font",
    fontLarge: "Large font",

    nav1: "What is it?",
    nav2: "Examples",
    nav3: "Calculate",
    nav4: "Advantages",

    tag: "PRODUCTION & PRESERVATION",
    heroTitle: "Strong, smart and sustainable agriculture.",
    heroDesc: "Connecting the future and present of agriculture!",
    btnTop: "Back to top",

    whatTitle: "A sustainability project?",
    whatText:
      "AgroNá is a project created to promote sustainable agricultural practices.",

    card1Titulo: "Higher production",
    card1Texto: "Smart use of resources.",
    card2Titulo: "Lower impact",
    card2Texto: "Reducing environmental damage.",
    card3Titulo: "Balance",
    card3Texto: "Production and nature in harmony.",

    resultadosTitulo: "Positive impacts:",
    resultado1: "Increases agricultural production",
    resultado2: "Preserves natural resources",
    resultado3: "Reduces costs and waste",

    footer: "© 2026 AgroNá | Agrinho Project.",

    saudacao: {
      morning: "🌅 Good morning! Welcome to AgroNá.",
      afternoon: "☀️ Good afternoon! Welcome to AgroNá.",
      night: "🌙 Good evening! Welcome to AgroNá."
    },

    calc: {
      title: "Sustainability Calculator",
      subtitle: "Check if your farm is sustainable",
      areaTotal: "Total area (ha)",
      areaPlantio: "Crop area (ha)",
      areaMata: "Native forest area (ha)",
      agrotoxico: "Uses pesticides?",
      sim: "Yes",
      nao: "No",
      button: "Calculate",
      fillFields: "Fill in all fields.",
      areaZero: "Total area must be greater than zero.",
      plantioError: "Crop area cannot exceed total.",
      mataError: "Forest area cannot exceed total.",
      sumError: "Sum cannot exceed total.",

      result: {
        exemplar: "🌳 Exemplary",
        excellent: "🌿 Excellent",
        veryGood: "🌱 Very Good",
        good: "🌾 Good",
        regular: "⚠️ Regular",
        low: "🚨 Low",
        critical: "❌ Critical"
      }
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
    heroDesc: "Conectando el presente y futuro de la agricultura!",
    btnTop: "Volver arriba",

    whatTitle: "¿Un proyecto de sostenibilidad?",
    whatText:
      "AgroNá promueve prácticas agrícolas sostenibles.",

    card1Titulo: "Mayor producción",
    card1Texto: "Uso inteligente de recursos.",
    card2Titulo: "Menor impacto",
    card2Texto: "Reducción de daños ambientales.",
    card3Titulo: "Equilibrio",
    card3Texto: "Producción y naturaleza en armonía.",

    resultadosTitulo: "Impactos positivos:",
    resultado1: "Aumenta la producción agrícola",
    resultado2: "Preserva los recursos naturales",
    resultado3: "Reduce costos y desperdicios",

    footer: "© 2026 AgroNá | Proyecto Agrinho.",

    saudacao: {
      morning: "🌅 ¡Buenos días! Bienvenido a AgroNá.",
      afternoon: "☀️ ¡Buenas tardes! Bienvenido a AgroNá.",
      night: "🌙 ¡Buenas noches! Bienvenido a AgroNá."
    },

    calc: {
      title: "Calculadora de Sostenibilidad",
      subtitle: "Descubre si tu propiedad es sostenible",
      areaTotal: "Área total (ha)",
      areaPlantio: "Área de cultivo (ha)",
      areaMata: "Área de bosque nativo (ha)",
      agrotoxico: "¿Usa pesticidas?",
      sim: "Sí",
      nao: "No",
      button: "Calcular",
      fillFields: "Complete todos los campos.",
      areaZero: "El área debe ser mayor que cero.",
      plantioError: "El cultivo no puede exceder el total.",
      mataError: "El bosque no puede exceder el total.",
      sumError: "La suma no puede exceder el total.",

      result: {
        exemplar: "🌳 Ejemplar",
        excellent: "🌿 Excelente",
        veryGood: "🌱 Muy bueno",
        good: "🌾 Bueno",
        regular: "⚠️ Regular",
        low: "🚨 Bajo",
        critical: "❌ Crítico"
      }
    }
  }
};

/* =========================
   TRADUÇÃO
========================= */
function applyTranslation(lang) {
  const t = translations[lang] || translations.pt;

  setText("navSobre", t.nav1);
  setText("navProjetos", t.nav2);
  setText("navCalculadora", t.nav3);
  setText("navResultados", t.nav4);

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

  setText("resultadosTitulo", t.resultadosTitulo);
  setText("resultado1", t.resultado1);
  setText("resultado2", t.resultado2);
  setText("resultado3", t.resultado3);

  setText("footerText", t.footer);

  atualizarSaudacao();
}

/* =========================
   CALCULADORA
========================= */
const calcularBtn = document.getElementById("calcularBtn");
const avisoCalc = document.getElementById("avisoCalc");

if (calcularBtn) {
  calcularBtn.addEventListener("click", () => {
    const lang = document.getElementById("languageSelect").value;
    const t = translations[lang].calc;
    const r = t.result;

    const total = Number(document.getElementById("areaTotal").value);
    const plantio = Number(document.getElementById("areaPlantio").value);
    const mata = Number(document.getElementById("areaMata").value);
    const agrotoxico = document.getElementById("agrotoxico").value;

    if (
      document.getElementById("areaTotal").value === "" ||
      document.getElementById("areaPlantio").value === "" ||
      document.getElementById("areaMata").value === ""
    ) {
      avisoCalc.textContent = t.fillFields;
      return;
    }

    let nota = 0;

    const percMata = (mata / total) * 100;
    if (percMata >= 40) nota += 40;
    else if (percMata >= 30) nota += 35;
    else if (percMata >= 20) nota += 25;
    else if (percMata >= 10) nota += 15;
    else nota += 5;

    if (agrotoxico === "nao") nota += 20;
    else nota += 5;

    const usoSolo = (plantio / total) * 100;
    if (usoSolo <= 60) nota += 40;
    else if (usoSolo <= 75) nota += 35;
    else if (usoSolo <= 85) nota += 25;
    else if (usoSolo <= 95) nota += 15;
    else nota += 5;

    let classificacao = "";
    if (nota >= 95) classificacao = r.exemplar;
    else if (nota >= 85) classificacao = r.excellent;
    else if (nota >= 70) classificacao = r.veryGood;
    else if (nota >= 55) classificacao = r.good;
    else if (nota >= 40) classificacao = r.regular;
    else if (nota >= 20) classificacao = r.low;
    else classificacao = r.critical;

    document.getElementById("notaFinal").textContent = `${nota}/100`;
    document.getElementById("classificacao").textContent = classificacao;

    const barra = document.getElementById("barraProgresso");
    barra.style.width = `${nota}%`;
  });
}

/* =========================
   SAUDAÇÃO
========================= */
function atualizarSaudacao() {
  const select = document.getElementById("languageSelect");
  const lang = select ? select.value : "pt";
  const t = translations[lang];

  const hora = new Date().getHours();

  const el = document.getElementById("saudacao");
  if (!el) return;

  if (hora < 12) el.textContent = t.saudacao.morning;
  else if (hora < 18) el.textContent = t.saudacao.afternoon;
  else el.textContent = t.saudacao.night;
}

/* =========================
   INIT
========================= */
const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  const saved = localStorage.getItem("lang") || "pt";
  languageSelect.value = saved;

  applyTranslation(saved);
  atualizarSaudacao();

  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    localStorage.setItem("lang", lang);
    applyTranslation(lang);
    atualizarSaudacao();
  });
}

});
