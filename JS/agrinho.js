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
  pt: { /* ... (inalterado) ... */ },
  en: { /* ... (inalterado) ... */ },
  es: { /* ... (inalterado) ... */ }
};

/* =========================
   APLICAR IDIOMA
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
const themeIcon = document.getElementById("themeIcon");

if (themeBtn) {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-theme");
    if (themeIcon) themeIcon.textContent = "☀️";
  } else {
    if (themeIcon) themeIcon.textContent = "🌙";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeIcon) {
      themeIcon.textContent = isDark ? "☀️" : "🌙";
    }
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
   SCROLL TOP BUTTON
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
