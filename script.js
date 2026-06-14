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
      fillFields: "Preencha todos os campos antes de calcular.",
      areaZero: "A área total deve ser maior que zero.",
      plantioError: "A área de plantio não pode ser maior que a área total.",
      mataError: "A área de mata não pode ser maior que a área total.",
      sumError: "A soma das áreas não pode ultrapassar a área total.",
      result: {
        exemplar: "🌳 Sustentabilidade Exemplar",
        excellent: "🌿 Excelente",
        veryGood: "🌱 Muito Boa",
        good: "🌾 Boa",
        regular: "⚠️ Regular",
        low: "🚨 Baixa",
        critical: "❌ Crítica"
      }
    },

    resultadosTitulo: "Impactos positivos:",
    resultado1: "Aumenta a produção agrícola",
    resultado2: "Preserva os recursos naturais",
    resultado3: "Reduz custos e desperdícios",

    footer: "© 2026 AgroNá | Projeto Agrinho.",

    saudacao: {
      morning: "🌅 Bom dia! Seja bem-vindo ao AgroNá.",
      afternoon: "☀️ Boa tarde! Seja bem-vindo ao AgroNá.",
      night: "🌙 Boa noite! Seja bem-vindo ao AgroNá."
    }
  }
};

/* =========================
   TRADUÇÃO
========================= */
function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

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
      !total ||
      !plantio ||
      !mata
    ) {
      avisoCalc.textContent = t.fillFields;
      return;
    }

    if (total <= 0) {
      avisoCalc.textContent = t.areaZero;
      return;
    }

    if (plantio > total) {
      avisoCalc.textContent = t.plantioError;
      return;
    }

    if (mata > total) {
      avisoCalc.textContent = t.mataError;
      return;
    }

    if (plantio + mata > total) {
      avisoCalc.textContent = t.sumError;
      return;
    }

    avisoCalc.textContent = "";

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

    if (nota >= 85) barra.style.background = "#43a047";
    else if (nota >= 55) barra.style.background = "#fbc02d";
    else barra.style.background = "#e53935";
  });
}

/* =========================
   SAUDAÇÃO
========================= */
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

/* =========================
   MENU MOBILE
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* =========================
   EVENTOS INICIAIS
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

/* =========================
   FONTE
========================= */
const fontSelect = document.getElementById("fontSizeSelect");

if (fontSelect) {
  const saved = localStorage.getItem("font") || "medium";
  fontSelect.value = saved;

  const sizes = {
    small: "14px",
    medium: "16px",
    large: "19px"
  };

  document.documentElement.style.fontSize = sizes[saved];

  fontSelect.addEventListener("change", () => {
    localStorage.setItem("font", fontSelect.value);
    document.documentElement.style.fontSize = sizes[fontSelect.value];
  });
}

/* =========================
   TEMA
========================= */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
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

/* =========================
   SCROLL TOP
========================= */
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
