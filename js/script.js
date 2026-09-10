/* =========================================================
   NUESTRA HISTORIA — lógica de la revista
   -----------------------------------------------------------
   👉 ESTO ES LO ÚNICO QUE NECESITAS EDITAR:
      1. RELATIONSHIP_START más abajo, con la fecha real en que
         empezó todo.
      2. INTRO: la portada de esa fecha (el día 0, el comienzo).
      3. MESES: un bloque por cada mes cumplido (mes 1, mes 2...).

      Cada mes usa DOS fotos, y la portada usa CUATRO, con nombre
      imagenX.jpg, numeradas solas en orden:
      portada -> imagen1.jpg, imagen2.jpg, imagen3.jpg, imagen4.jpg
      mes 1   -> imagen5.jpg, imagen6.jpg
      mes 2   -> imagen7.jpg, imagen8.jpg  ...etc.
      Guarda esas imágenes dentro de la carpeta /images.

      El link de Spotify (spotifyEmbed) se pega unos días antes
      de cada 10 (ver README.md).
   ========================================================= */

// Fecha en la que empezó todo (año-mes-día). Ese día es la portada.
// El mes 1 cae el REVEAL_DAY del mes siguiente (el primer mes cumplido),
// y de ahí uno por mes. Ej: si empezaron el 10 de enero 2026, la portada
// es el 10 de enero 2026, el mes 1 es el 10 de febrero 2026, y el mes 12
// cae el 10 de enero 2027 (el año cumplido).
const RELATIONSHIP_START = "2026-01-10";

// Día del mes en el que se revela cada capítulo mensual.
const REVEAL_DAY = 10;

// La portada, estilo "perfil de pareja" (como una tarjeta de Netflix).
const INTRO = {
  isIntro: true,
  photoCount: 4,          // la portada usa 4 fotos en vez de 2
  names: "Vico y Echeflique",       // el título grande, en cursiva
  badge: "N Parejas",              // etiqueta roja arriba del título
  tag: "1ª Favorito",              // etiqueta verde junto al año
  handle: "@vibra",              // se muestra junto a los botones
  diary: "Todo volvió a encenderse un 10 de enero, exactamente a las 5:20 de la madrugada. Lo que inició como una gran cita terminó con un beso apasionado que lo cambió todo. En ese instante nos dimos cuenta de que la química entre nosotros jamás se había apagado; solo estaba esperando el momento perfecto para salir a flote. Entendimos que no importaba el tiempo ni la distancia: estábamos destinados a volver a encontrarnos",
  spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6WBkUQoNie4RIY1cFaqUnP?utm_source=generator&si=4100d3c7a0ce4435" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>` // la canción de ese día, si quieres
};

const MESES = [
  {
    eyebrow: "Mes I",
    headline: "El primer mes",
    diary: "Primer mes: Adaptandonos a la distancia.",
    caption1: "hermosa",
    caption2: "coqueto",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/05SZ279Bnz9Zst21BMoZWg?utm_source=generator&si=affe7412466a4ffe" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>` // pega aquí el iframe src de Spotify
  },
  {
    eyebrow: "Mes II",
    headline: "Destino o casualidad",
    diary: "Segundo mes: La distancia es temporal",
    caption1: "fotazo",
    caption2: "esa risa",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0KAqMRUSZwzG3dZLdDA4eH?utm_source=generator&si=3b69e13870094989" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes III",
    headline: "Los OSOS",
    diary: "Tercer mes: nuestro dia a dia em fotos y notas de video",
    caption1: "osa",
    caption2: "oso",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5l6hpyTGBK0LAAxgPnqTQL?utm_source=generator&si=8961ee7a917d4ccd" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes IV",
    headline: "Sentirme amado",
    diary: "Cuarto mes: Falta muy poco para vernos de nuevo ",
    caption1: "besitos",
    caption2: "selfie",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3LCdO528GxAl5pRvaQgOZd?utm_source=generator&si=aeff5f8cf31d4858" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes V",
    headline: "Cinco meses de nosotros",
    diary: "Quinto mes: El tiempo juntos fue hermoso",
    caption1: "de nuevo",
    caption2: "siempre",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0bK3jxkbq5cDKWr68KtO8G?utm_source=generator&si=fa5a33dba3ce47b7" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes VI",
    headline: "Medio año",
    diary: "Sexto mes: a mitad de carrera para la meta ",
    caption1: "hoy",
    caption2: "y mañana",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6Wtc1K3dvTIEsWU3rSIZXn?utm_source=generator&si=20baf02f948740b5" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes VII",
    headline: "Costumbre bonita",
    diary: "Séptimo mes: se volvio una costumbre bonita realizar videollamda en la madrugada.",
    caption1: "todavía",
    caption2: "contigo",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5hnyJvgoWiQUYZttV4wXy6?utm_source=generator&si=191c0d1d111f48bd" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes VIII",
    headline: "Lo que no se compra con nada",
    diary: "Octavo mes: nuestro primer mesario juntos",
    caption1: "cena",
    caption2: "especial",
    spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6WBkUQoNie4RIY1cFaqUnP?utm_source=generator&si=4100d3c7a0ce4435" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    eyebrow: "Mes IX",
    headline: "Nueve",
    diary: "Noveno mes: ....",
    caption1: "aquí",
    caption2: "ahora",
    spotifyEmbed: ""
  },
  {
    eyebrow: "Mes X",
    headline: "Diez",
    diary: "Décimo mes:........",
    caption1: "casi un año",
    caption2: "nosotros",
    spotifyEmbed: ""
  },
  {
    eyebrow: "Mes XI",
    headline: "Once",
    diary: "Onceavo mes: .....",
    caption1: "cerca",
    caption2: "más",
    spotifyEmbed: ""
  },
  {
    eyebrow: "Mes XII",
    headline: "Un año",
    diary: "Doceavo mes: .............",
    caption1: "un año",
    caption2: "y sigue",
    spotifyEmbed: ""
  }
];

/* =========================================================
   A partir de aquí ya no hace falta tocar nada.
   ========================================================= */

// La portada + los meses, en un solo arreglo para renderizar.
const PAGES = [INTRO, ...MESES];

const NOMBRES_MES = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];

function buildDates(startDateStr, revealDay, monthCount){
  const [y, m, d] = startDateStr.split("-").map(Number);
  const dates = [ new Date(y, m-1, d) ]; // índice 0 = portada, el día real de inicio
  // capítulo n (1..monthCount) = revealDay del mes (m + n) del año y.
  // new Date normaliza solo el desborde de mes/año (ej. mes 13 -> enero del año siguiente).
  for(let n=1; n<=monthCount; n++){
    dates.push(new Date(y, (m-1)+n, revealDay));
  }
  return dates;
}

const pageDates = buildDates(RELATIONSHIP_START, REVEAL_DAY, MESES.length);

// índice de la primera foto de cada página (la portada ocupa 4, los meses 2 cada uno)
function buildPhotoStarts(pages){
  const starts = [];
  let n = 1;
  pages.forEach(p=>{
    starts.push(n);
    n += (p.photoCount || 2);
  });
  return starts;
}
const photoStarts = buildPhotoStarts(PAGES);
const today = new Date();
today.setHours(0,0,0,0);

function isUnlocked(date){
  return today >= date;
}

const track = document.getElementById("pages-track");
const tabsEl = document.getElementById("issue-tabs");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const issueLabel = document.getElementById("issue-label");
const todayDateEl = document.getElementById("today-date");

todayDateEl.textContent = today.toLocaleDateString("es-ES", { day:"2-digit", month:"long", year:"numeric" });

function ribbonThreadSVG(){
  return `<svg class="ribbon-thread" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M8,55 C 30,20 65,85 92,45" fill="none" stroke="#C1392B" stroke-width="0.8"
      stroke-dasharray="2 3" opacity="0.55" />
  </svg>`;
}

function spotifySlotHTML(embed){
  if(embed && embed.trim()){
    // admite tanto una URL de embed como el <iframe> completo pegado desde Spotify
    if(embed.includes("<iframe")){
      return `<div class="spotify-slot"><div class="slot-label">♪ La canción de este mes</div>${embed}</div>`;
    }
    return `<div class="spotify-slot"><div class="slot-label">♪ La canción de este mes</div>
      <iframe src="${embed}" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`;
  }
  return `<div class="spotify-slot"><div class="slot-label">♪ La canción de este mes</div>
    <div class="spotify-empty">todavía no hay canción para este mes…</div></div>`;
}

function daysUntil(date){
  const ms = date.getTime() - today.getTime();
  return Math.max(0, Math.ceil(ms / 86400000));
}

function pageHTML(mes, idx, date, unlocked, isIntro){
  return isIntro
    ? introPageHTML(mes, idx, date, unlocked)
    : monthPageHTML(mes, idx, date, unlocked);
}

/* ---------- Portada estilo "perfil de pareja" (Netflix) ---------- */
function introPageHTML(mes, idx, date, unlocked){
  const start = photoStarts[idx];
  const hero = `images/imagen${start}.jpg`;
  const ep = [`images/imagen${start+1}.jpg`, `images/imagen${start+2}.jpg`, `images/imagen${start+3}.jpg`];
  const dateLabel = `${date.getDate()} de ${date.toLocaleDateString("es-ES",{month:"long"})} · ${date.getFullYear()}`;
  const dLeft = daysUntil(date);
  const countdownLabel = dLeft === 0 ? "se abre hoy" : (dLeft === 1 ? "falta 1 día" : `faltan ${dLeft} días`);

  return `
  <article class="page intro ${unlocked ? "" : "locked"}" data-index="${idx}">
    <div class="nf-card">
      <div class="nf-nav">
        <span class="nf-logo">NUESTRA<span>FLIX</span></span>
        <nav class="nf-menu">
          <span>Inicio</span><span>Series</span><span>Filmes</span><span>Próximamente</span>
        </nav>
        <div class="nf-icons">
          <span>&#128269;</span><span>&#127873;</span><span>&#128276;</span><span class="nf-avatar"></span>
        </div>
      </div>

      <div class="nf-hero" style="background-image:url('${hero}')">
        <div class="nf-hero-fade"></div>
        <div class="nf-hero-content">
          <div class="nf-badge"><span class="nf-n">N</span> PAREJAS</div>
          ${unlocked
            ? `<h1 class="nf-title">${mes.names}</h1>`
            : `<h1 class="nf-title nf-title-locked">&bull;&bull;&bull;&bull;&bull;&bull;</h1>`}
          <div class="nf-meta">
            <span class="nf-dot-year">${date.getFullYear()}</span>
            <span class="nf-tag">${mes.tag}</span>
            <span class="nf-cc">HD</span>
          </div>
          ${unlocked
            ? `<p class="nf-desc">${mes.diary}</p>`
            : `<p class="nf-desc nf-desc-locked">Prepárate para la nueva aventura ✨ — se estrena el ${dateLabel} (${countdownLabel})</p>`}
          <div class="nf-actions">
            <button class="nf-play">&#9654; Reproducir</button>
            <button class="nf-info">Más información</button>
            <span class="nf-handle">${mes.handle}</span>
          </div>
        </div>
      </div>

      <div class="nf-episodes">
        ${ep.map((src,i)=>`<div class="nf-ep"><img src="${src}" alt="episodio ${i+1}" loading="lazy"
          onerror="this.parentElement.textContent='falta ${src.split('/')[1]}';"></div>`).join("")}
      </div>
    </div>
  </article>`;
}

/* ---------- Página de mes, estilo revista/scrapbook ---------- */
function monthPageHTML(mes, idx, date, unlocked){
  const start = photoStarts[idx];
  const img1 = `images/imagen${start}.jpg`;
  const img2 = `images/imagen${start+1}.jpg`;
  const dateLabel = `${date.getDate()} de ${date.toLocaleDateString("es-ES",{month:"long"})} · ${date.getFullYear()}`;
  const dLeft = daysUntil(date);
  const countdownLabel = dLeft === 0 ? "se abre hoy" : (dLeft === 1 ? "falta 1 día" : `faltan ${dLeft} días`);
  const sealTxt = NOMBRES_MES[date.getMonth()];

  return `
  <article class="page ${unlocked ? "" : "locked"}" data-index="${idx}">
    <div class="page-photos">
      ${ribbonThreadSVG()}
      <div class="polaroid">
        <div class="tape"></div>
        <div class="frame"><img src="${img1}" alt="${mes.headline}" loading="lazy"
          onerror="this.parentElement.parentElement.querySelector('.cap').textContent='falta ${img1.split('/')[1]}'; this.style.display='none';"></div>
        <div class="cap">${mes.caption1}</div>
      </div>
      <div class="polaroid">
        <div class="tape"></div>
        <div class="frame"><img src="${img2}" alt="${mes.headline}" loading="lazy"
          onerror="this.parentElement.parentElement.querySelector('.cap').textContent='falta ${img2.split('/')[1]}'; this.style.display='none';"></div>
        <div class="cap">${mes.caption2}</div>
      </div>
      <div class="sticky">${mes.headline}&nbsp;💌</div>
      <div class="seal"><span class="num">${date.getDate()}</span><span class="txt">${sealTxt}</span></div>
      <div class="coming-banner">Próxima edición</div>
    </div>

    <div class="page-copy">
      <div class="eyebrow">${unlocked ? mes.eyebrow : "En edición"}</div>
      <h2 class="headline">${mes.headline}</h2>
      <div class="dateline">${dateLabel}</div>
      <p class="diary">${mes.diary}</p>
      <div class="lock-note">
        <span class="lock-title">Prepárate para la nueva aventura</span>
        <span class="lock-countdown">${countdownLabel} para el ${dateLabel}</span>
      </div>
      ${spotifySlotHTML(mes.spotifyEmbed)}
    </div>
  </article>`;
}

let current = 0;

function render(){
  track.innerHTML = PAGES.map((mes,i)=> pageHTML(mes, i, pageDates[i], isUnlocked(pageDates[i]), i===0)).join("");
  tabsEl.innerHTML = PAGES.map((mes,i)=>{
    const unlocked = isUnlocked(pageDates[i]);
    const label = i===0 ? "Inicio" : `${NOMBRES_MES[pageDates[i].getMonth()]} ${pageDates[i].getFullYear()}`;
    return `<button class="tab ${unlocked ? "" : "tab-locked"}" data-index="${i}">${label}</button>`;
  }).join("");

  tabsEl.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click", ()=> goTo(Number(btn.dataset.index)));
  });

  goTo(defaultIndex(), true);
}

function defaultIndex(){
  // abre en el último capítulo desbloqueado (portada incluida)
  let idx = 0;
  for(let i=0;i<pageDates.length;i++){
    if(isUnlocked(pageDates[i])) idx = i;
  }
  return idx;
}

function goTo(idx, silent){
  current = Math.max(0, Math.min(PAGES.length-1, idx));
  track.style.transform = `translateX(-${current * 100}%)`;
  issueLabel.textContent = current === 0 ? "Portada" : `Nº ${String(current).padStart(2,"0")}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === PAGES.length-1;
  tabsEl.querySelectorAll(".tab").forEach((b,i)=> b.classList.toggle("active", i===current));
  if(!silent){
    const activeTab = tabsEl.children[current];
    if(activeTab) activeTab.scrollIntoView({inline:"center", block:"nearest", behavior:"smooth"});
  }
}

prevBtn.addEventListener("click", ()=> goTo(current-1));
nextBtn.addEventListener("click", ()=> goTo(current+1));

document.addEventListener("keydown", (e)=>{
  if(e.key === "ArrowRight") goTo(current+1);
  if(e.key === "ArrowLeft") goTo(current-1);
});

// swipe táctil
let touchStartX = null;
track.addEventListener("touchstart", (e)=>{ touchStartX = e.touches[0].clientX; }, {passive:true});
track.addEventListener("touchend", (e)=>{
  if(touchStartX===null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx) > 50) goTo(dx < 0 ? current+1 : current-1);
  touchStartX = null;
}, {passive:true});

render();
