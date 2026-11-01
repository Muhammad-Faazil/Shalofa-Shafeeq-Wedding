/**
 * ============================================================================
 * Linen Thread Pink — Wedding Invitation Client Configuration & Logic
 * Aysha Shalofa & Farooq Mohammed Shafeeq — Nikah Invitation
 * ============================================================================
 * 
 * Future Client Customization:
 * To use this template for another wedding, update the WEDDING_CONFIG object below.
 * All texts, dates, names, venues, and media are centralized here.
 */

const WEDDING_CONFIG = {
  // --- Couple Details (Bride's name first) ---
  brideName: "Aysha Shalofa",
  groomName: "Farooq Mohammed Shafeeq",
  footerNames: "Shalofa  &  Shafeeq",
  envelopeInitials: ["S", "S"],
  ceremonyType: "Nikah",

  // --- Hosts & Family Details ---
  hostLabel: "WITH GREAT PLEASURE",
  hostedBy: "Mr Iliyas & Mrs Maimoona",
  hostAddress: "Ullal, Mangaluru",
  hostIntro: "Cordially invite you to the Nikah Ceremony of our\nbeloved daughter",
  brideGrandparents: "Daughter of Mr Iliyas & Mrs Maimoona",
  namesJoiner: "with",
  groomParents: "Son of Mr Ummer Farooq & Mrs. Maimuna",
  groomHouse: "",

  // --- Ceremony & Date Details ---
  ceremonyHeading: "The Nikah",
  ceremonySubtitle: "In Sha Allah",
  eventWeekday: "THURSDAY",
  eventDay: "10",
  eventMonthYear: "DECEMBER 2026",
  eventDateFormatted: "Thursday, 10 December 2026",
  hijriDate: "1 RAJAB 1448 AH",
  timeText: "AT 7:00 PM",
  lunchNote: "Dinner followed by Nikah",
  
  // --- Dress Code ---
  dressCodeLabel: "DRESS CODE",
  dressCode: "Soft Pastel Colours",

  // ISO Timestamp for live countdown & calendar events (UTC+05:30)
  eventDateISO: "2026-12-10T19:00:00+05:30",
  eventEndDateISO: "2026-12-10T23:00:00+05:30",
  countdownLabel: "Counting down to the Nikah",

  // --- Venue & Location ---
  venueLabel: "VENUE",
  venueName: "ROYAL GARDEN BEACH RESORT",
  venueAddress: "16-91/4, Caico Beach Road, Mukkachery, Ullal, Mangaluru, Karnataka 575020, India",
  mapsUrl: "https://maps.app.goo.gl/JpKH8pUQWJ98SSLL7",

  // --- Islamic Opening & Inscriptions ---
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTranslation: "In the name of Allah, the Most Gracious, the Most Merciful.",
  
  verseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
  verseReference: "SURAH AR-RUM · 30:21",
  verseTranslation: "“And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.”",

  // --- Assets & Media ---
  audioSrc: "assets/audio/Music-fixed.mp3",
  bgTexture: "assets/images/linen-thread-bg.webp",
  envelopeTexture: "assets/images/linen-thread-envelope.webp"
};

/* ============================================================================
   SVG Floral & Botanical Ornament Generators (Exact match to reference)
   ============================================================================ */
const SVG_COLORS = {
  stem: '#8b8868',
  leaf: '#a9a486',
  leafEdge: '#8b8868',
  vein: '#e8e6d4',
  petal: '#e4aea2',
  petalEdge: '#cf9188',
  sheen: '#ffffff',
  centre: '#6f6b45',
  centreEdge: '#4f4b2e',
  knot: '#f3e9de',
  knotEdge: '#bfae8f',
  bud: '#e4aea2',
  budEdge: '#cf9188'
};

const SVG_COLORS_FOOTER = {
  stem: '#d8d4bd',
  leaf: '#b9b498',
  leafEdge: '#e2ddc6',
  vein: '#eeeadb',
  petal: '#f0c9bf',
  petalEdge: '#e4aea2',
  sheen: '#ffffff',
  centre: '#6f6b45',
  centreEdge: '#4f4b2e',
  knot: '#f3e9de',
  knotEdge: '#bfae8f',
  bud: '#f0c9bf',
  budEdge: '#e4aea2'
};

// Flower head (J)
function createFlowerHeadSVG(c, plain = false) {
  const dPath = "M0 -20 C6 -18 9 -12 8 -5 C7 -1 4 1 0 1 C-4 1 -7 -1 -8 -5 C-9 -12 -6 -18 0 -20 Z";
  const petals = [0, 60, 120, 180, 240, 300].map(r => `
    <g transform="rotate(${r})">
      <path d="${dPath}" fill="${c.petal}"/>
      <path d="M0 -17 L0 -1" stroke="${c.sheen}" stroke-opacity=".3" stroke-width=".8"/>
      <path d="M-3.5 -15 L-2.8 -2 M3.5 -15 L2.8 -2" stroke="${c.sheen}" stroke-opacity=".18" stroke-width=".6"/>
      <path d="M1 -18.4 C5.4 -17 7.6 -13 7.4 -8.6" fill="none" stroke="${c.sheen}" stroke-opacity=".5" stroke-width="1" stroke-linecap="round"/>
      ${plain 
        ? `<path d="${dPath}" fill="none" stroke="${c.petalEdge}" stroke-opacity=".55" stroke-width=".7"/>`
        : `<path d="${dPath}" fill="none" stroke="${c.petalEdge}" stroke-width=".8" stroke-dasharray="2.2 1.6" stroke-linecap="round"/>`}
    </g>`).join('');

  const knots = [0, 45, 90, 135, 180, 225, 270, 315].map(i => {
    const cx = (8.6 * Math.cos(i * Math.PI / 180)).toFixed(2);
    const cy = (8.6 * Math.sin(i * Math.PI / 180)).toFixed(2);
    return `<circle cx="${cx}" cy="${cy}" r="1.25" fill="${c.knot}" stroke="${c.knotEdge}" stroke-width=".5"/>`;
  }).join('');

  return `
    <g>
      ${petals}
      <circle r="6.2" fill="${c.centre}"/>
      ${!plain ? `<circle r="6.2" fill="none" stroke="${c.centreEdge}" stroke-width=".7" stroke-dasharray="1.4 1.2"/>` : ''}
      ${knots}
      <circle cx="-1.4" cy="-1.4" r="1.6" fill="#8e8a5e"/>
    </g>`;
}

// Leaf (Q)
function createLeafSVG(x, y, rot, s = 0.42, c, plain = false) {
  const R = "M6 1 C10.2 6 11.4 15 6 29 C.6 15 1.8 6 6 1 Z";
  return `
    <g transform="translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-6 -29)">
      ${plain 
        ? `<path d="${R}" fill="${c.leaf}" stroke="${c.leafEdge}" stroke-opacity=".6" stroke-width=".9"/>`
        : `<path d="${R}" fill="${c.leaf}" stroke="${c.leafEdge}" stroke-width="1.2" stroke-dasharray="2.6 2" stroke-linecap="round"/>`}
      <path d="M6 4 L6 27" stroke="${c.vein}" stroke-opacity=".8" stroke-width="1.1"/>
    </g>`;
}

// Bud (EE)
function createBudSVG(x, y, rot = 0, s = 1, c, plain = false) {
  return `
    <g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
      <ellipse cx="0" cy="-5.2" rx="3.1" ry="4.6" fill="${c.bud}" stroke="${c.budEdge}" stroke-width=".7" ${plain ? 'stroke-opacity=".6"' : 'stroke-dasharray="1.6 1.2"'}/>
      <path d="M0 -8.6 L0 -2" stroke="${c.sheen}" stroke-opacity=".35" stroke-width=".7"/>
      <path d="M-2.8 -2.4 L0 0 L2.8 -2.4 L0 -4.4 Z" fill="${c.leaf}" stroke="${c.leafEdge}" stroke-width=".5"/>
    </g>`;
}

// Circular Floral Spray (ei)
function renderFloralSpraySVG(width = 96, tone = 'linen') {
  const c = tone === 'footer' ? SVG_COLORS_FOOTER : SVG_COLORS;
  const a = 40;
  const o = (deg, t = a) => {
    const rad = deg * Math.PI / 180;
    return [+(60 + t * Math.cos(rad)).toFixed(2), +(60 + t * Math.sin(rad)).toFixed(2)];
  };
  const l = [-90, -18, 54, 126, 198];

  const leaves = l.flatMap(e => [[e + 16, -1], [e + 28, 1], [e + 44, -1], [e + 56, 1]]).map(([e, i]) => {
    const [lx, ly] = o(e, a + 3 * i);
    return createLeafSVG(lx, ly, e + 180 + 34 * i, 0.5, c, true);
  }).join('');

  const buds = l.map(e => {
    const [bx, by] = o(e + 36, a + 2);
    return createBudSVG(bx, by, e + 36 + 90, 0.9, c, true);
  }).join('');

  const flowers = l.map((e, idx) => {
    const [fx, fy] = o(e);
    return `<g transform="translate(${fx} ${fy}) scale(${idx === 0 ? 0.7 : 0.6})">${createFlowerHeadSVG(c, true)}</g>`;
  }).join('');

  return `<svg width="${width}" height="${width}" viewBox="0 0 120 120" aria-hidden="true" style="display:block;overflow:visible;">${leaves}${buds}${flowers}</svg>`;
}

// Wave Horizontal Floral Divider (en)
function renderFloralDividerSVG(width = "min(60vw,240px)") {
  const c = SVG_COLORS;
  return `
    <svg viewBox="0 0 220 26" aria-hidden="true" style="display:block;width:100%;overflow:visible;">
      <path d="M2 13 C22 4 40 22 60 13 S98 4 118 13 S156 22 176 13 S206 6 218 13" fill="none" stroke="${c.stem}" stroke-width="1.2" stroke-linecap="round"/>
      ${createLeafSVG(18, 8.5, -48, 0.34, c)}
      ${createLeafSVG(46, 17.5, 140, 0.3, c)}
      ${createBudSVG(72, 10.5, -30, 0.72, c)}
      ${createLeafSVG(96, 8, -40, 0.32, c)}
      ${createLeafSVG(140, 17.5, 145, 0.3, c)}
      ${createBudSVG(160, 11, -28, 0.72, c)}
      ${createLeafSVG(196, 9, -46, 0.32, c)}
      <g transform="translate(110 13) scale(.34)">${createFlowerHeadSVG(c)}</g>
    </svg>`;
}

// Flower Bud Stem Ornament (U)
function renderBudStemSVG(size = 28) {
  return `
    <svg width="${size}" height="${(1.15 * size).toFixed(1)}" viewBox="0 0 30 34" aria-hidden="true" style="display:block;">
      <path d="M15 33 L15 12" stroke="#8b8868" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M15 24 C10 24 6 20 5 15 C10 15 14 18 15 24 Z" fill="#a9a486" stroke="#8b8868" stroke-width=".6" stroke-dasharray="1.8 1.4"/>
      <path d="M15 24 C20 24 24 20 25 15 C20 15 16 18 15 24 Z" fill="#a9a486" stroke="#8b8868" stroke-width=".6" stroke-dasharray="1.8 1.4"/>
      <path d="M15 2 C19.2 4.2 20.4 9.4 15 13.4 C9.6 9.4 10.8 4.2 15 2 Z" fill="#e4aea2" stroke="#cf9188" stroke-width=".6" stroke-dasharray="1.8 1.4"/>
      <path d="M15 4.6 C17 6 17.2 9 15 11" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width=".8" stroke-linecap="round"/>
    </svg>`;
}

// Stitched Needle (P)
function renderNeedleSVG() {
  return `
    <svg width="26" height="14" viewBox="0 0 26 14" aria-hidden="true" style="display:block;">
      <path d="M1 12.5 C3.6 7 7.6 5.2 11.6 8.6" fill="none" stroke="#a86860" stroke-width="1" stroke-linecap="round"/>
      <line x1="6" y1="12" x2="24" y2="2" stroke="#8a8a88" stroke-width="1.7" stroke-linecap="round"/>
      <line x1="6" y1="12" x2="24" y2="2" stroke="#ecebe7" stroke-width=".6" stroke-linecap="round"/>
      <ellipse cx="8.6" cy="10.6" rx="1.7" ry="1" transform="rotate(-29 8.6 10.6)" fill="#ece1d3" stroke="#6f6f6d" stroke-width=".8"/>
    </svg>`;
}

// Stitched Running Needle Divider Line Component (Y)
function createStitchLineElement(width = "min(46vw, 200px)") {
  const container = document.createElement('div');
  container.className = 'lt-stitch-line';
  container.style.width = width;
  container.setAttribute('aria-hidden', 'true');
  container.innerHTML = `
    <svg width="100%" height="14" preserveAspectRatio="none">
      <line x1="0" y1="7" x2="100%" y2="7" stroke="#a5886b" stroke-width="1.3" stroke-dasharray="7 5" stroke-linecap="round"/>
    </svg>
    <span class="lt-needle-head">${renderNeedleSVG()}</span>
  `;
  return container;
}

// Wooden Embroidery Hoop SVG
function renderEmbroideryHoopSVG() {
  return `
    <svg class="lt-hoop-svg" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <linearGradient id="lt-hoop-wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e0c199"/>
          <stop offset=".5" stop-color="#cfa97c"/>
          <stop offset="1" stop-color="#ad865a"/>
        </linearGradient>
      </defs>
      <!-- Top Brass Screw Clamp -->
      <rect x="90" y="-9" width="20" height="14" rx="3" fill="#9a7548"/>
      <rect x="96.5" y="-14" width="7" height="9" rx="1.5" fill="#cfa97c"/>
      <line x1="100" y1="-13" x2="100" y2="-6" stroke="#9a7548" stroke-width="1.2"/>
      <!-- Outer Wooden Hoop -->
      <circle cx="100" cy="100" r="98" fill="url(#lt-hoop-wood)"/>
      <circle cx="100" cy="100" r="98" fill="none" stroke="#9a7548" stroke-width=".8" opacity=".7"/>
      <circle cx="100" cy="100" r="94" fill="none" stroke="#9a7548" stroke-width=".7" opacity=".45"/>
      <!-- Inner Linen Fabric Area -->
      <circle cx="100" cy="100" r="90" fill="#f4ece1"/>
      <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(95,80,53,.22)" stroke-width="2.4"/>
      <!-- Inner Running Stitch Circle -->
      <circle cx="100" cy="100" r="85" fill="none" stroke="#a5886b" stroke-width="1" stroke-dasharray="5 4" stroke-linecap="round" opacity=".85"/>
    </svg>`;
}

/* ============================================================================
   Couple Walking Video Playback & Visibility Management
   ============================================================================ */
/* ============================================================================
   Couple Walking Video & Canvas Playback (iPhone Safari / Mobile Compatible)
   ============================================================================ */
function initCoupleWalkingVideo() {
  const video = document.getElementById('couple-walking-video');
  const canvas = document.getElementById('couple-walking-canvas');
  const container = document.querySelector('.lt-walking-container');
  if (!video) return;

  // Modern browsers require muted for inline autoplay
  video.muted = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.setAttribute('x5-playsinline', '');

  let canvasCtx = null;
  let animFrameId = null;
  let isCanvasActive = false;
  let isVisible = true;

  if (canvas && canvas.getContext) {
    try {
      canvasCtx = canvas.getContext('2d', { willReadFrequently: true });
    } catch (e) {
      canvasCtx = null;
    }
  }

  function resizeCanvas() {
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round((rect.width || 240) * dpr);
    const h = Math.round((rect.height || (rect.width ? rect.width * 1.12 : 269)) * dpr);
    if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
      canvas.width = w;
      canvas.height = h;
    }
  }

  function renderCanvasFrame() {
    if (!isVisible) {
      animFrameId = null;
      return;
    }

    if (canvasCtx && video && !video.paused && !video.ended && video.readyState >= 2 && video.videoWidth > 0) {
      if (!isCanvasActive) {
        isCanvasActive = true;
        if (container) container.classList.add('has-canvas');
      }

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw > 0 && ch > 0) {
        canvasCtx.clearRect(0, 0, cw, ch);

        // Aspect ratio cover with bottom alignment
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        const containerAspect = cw / ch;
        const videoAspect = vw / vh;

        let sWidth, sHeight, sx, sy;
        if (containerAspect > videoAspect) {
          sWidth = vw;
          sHeight = vw / containerAspect;
          sx = 0;
          sy = Math.max(0, vh - sHeight);
        } else {
          sHeight = vh;
          sWidth = vh * containerAspect;
          sx = Math.max(0, (vw - sWidth) * 0.52);
          sy = 0;
        }

        try {
          canvasCtx.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, cw, ch);

          // Alpha key out light background so couple floats directly on linen texture
          const imgData = canvasCtx.getImageData(0, 0, cw, ch);
          const d = imgData.data;
          const len = d.length;
          for (let i = 0; i < len; i += 4) {
            const dr = d[i] - 224;
            const dg = d[i + 1] - 220;
            const db = d[i + 2] - 201;
            const distSq = dr * dr + dg * dg + db * db;
            if (distSq < 289) { // dist < 17
              d[i + 3] = 0;
            } else if (distSq < 1156) { // 17 <= dist < 34
              d[i + 3] = Math.round(((Math.sqrt(distSq) - 17) / 17) * 255);
            }
          }
          canvasCtx.putImageData(imgData, 0, 0);
        } catch (e) {
          // If getImageData is restricted (e.g. file:// origin policy), canvas continues rendering seamlessly via CSS multiply blend
          canvas.style.mixBlendMode = 'multiply';
        }
      }
    }

    animFrameId = requestAnimationFrame(renderCanvasFrame);
  }

  function startRenderLoop() {
    if (!animFrameId) {
      animFrameId = requestAnimationFrame(renderCanvasFrame);
    }
  }

  function stopRenderLoop() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  // Modern browsers allow muted inline autoplay
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }

  if (canvasCtx) {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    video.addEventListener('loadedmetadata', resizeCanvas);
    video.addEventListener('play', () => {
      isVisible = true;
      startRenderLoop();
    });
    startRenderLoop();
  }

  // Optimize playback: pause when offscreen, play when onscreen
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true;
          if (video.paused) {
            video.play().catch(() => {});
          }
          startRenderLoop();
        } else {
          isVisible = false;
          if (!video.paused) {
            video.pause();
          }
          stopRenderLoop();
        }
      });
    }, { threshold: 0.1 });

    videoObserver.observe(container || video);
  }
}

/* ============================================================================
   Audio Player Management (iPhone Safari & Mobile Compatible)
   ============================================================================ */
let audioPlayer = null;
let musicToggleBtn = null;
let isAudioPlaying = false;
let hasUserInteracted = false;

function initAudio() {
  audioPlayer = document.getElementById('bg-audio');
  musicToggleBtn = document.getElementById('music-toggle-btn');

  if (audioPlayer) {
    audioPlayer.loop = true;
    audioPlayer.preload = 'auto';

    // Ensure audio has valid source element with audio/mpeg MIME type
    if (!audioPlayer.querySelector('source') && WEDDING_CONFIG.audioSrc) {
      const source = document.createElement('source');
      source.src = WEDDING_CONFIG.audioSrc;
      source.type = 'audio/mpeg';
      audioPlayer.appendChild(source);
    }

    // Synchronize UI with actual audio playback events
    audioPlayer.addEventListener('play', () => {
      isAudioPlaying = true;
      updateMusicToggleButton(true);
    });
    audioPlayer.addEventListener('playing', () => {
      isAudioPlaying = true;
      updateMusicToggleButton(true);
    });
    audioPlayer.addEventListener('pause', () => {
      isAudioPlaying = false;
      updateMusicToggleButton(false);
    });
    audioPlayer.addEventListener('ended', () => {
      isAudioPlaying = false;
      updateMusicToggleButton(false);
    });
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', toggleMusic);
    musicToggleBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      toggleMusic(e);
    }, { passive: false });
  }
}

function startAudioWithFadeIn() {
  if (!audioPlayer) return;

  // Reveal floating music button so user always has playback controls
  if (musicToggleBtn) {
    musicToggleBtn.classList.add('visible');
  }

  audioPlayer.muted = false;

  // On iOS Safari, volume is read-only (1.0). Safely try volume configuration
  try {
    audioPlayer.volume = 0.38;
  } catch (e) {}

  const playPromise = audioPlayer.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isAudioPlaying = true;
        updateMusicToggleButton(true);

        // Smooth volume ramp on browsers supporting programmatic volume control
        try {
          audioPlayer.volume = 0.04;
          let vol = 0.04;
          const rampInterval = setInterval(() => {
            vol = Math.min(vol + 0.04, 0.38);
            audioPlayer.volume = vol;
            if (vol >= 0.38) {
              clearInterval(rampInterval);
            }
          }, 80);
        } catch (e) {}
      })
      .catch((err) => {
        console.warn('Audio autoplay blocked or waiting for explicit gesture:', err);
        isAudioPlaying = false;
        updateMusicToggleButton(false);
      });
  }
}

function toggleMusic(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
  if (!audioPlayer) return;

  if (audioPlayer.paused || audioPlayer.muted) {
    audioPlayer.muted = false;
    try {
      if (audioPlayer.volume === 0) audioPlayer.volume = 0.38;
    } catch (err) {}

    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isAudioPlaying = true;
          updateMusicToggleButton(true);
        })
        .catch((err) => {
          console.warn('Audio play toggle failed:', err);
          isAudioPlaying = false;
          updateMusicToggleButton(false);
        });
    }
  } else {
    audioPlayer.pause();
    isAudioPlaying = false;
    updateMusicToggleButton(false);
  }
}

function updateMusicToggleButton(playing) {
  if (!musicToggleBtn) return;
  musicToggleBtn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
  musicToggleBtn.title = playing ? 'Pause music' : 'Play music';

  if (playing) {
    // Music playing icon (notes)
    musicToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="1.8"/>
      </svg>`;
  } else {
    // Music paused / muted icon (notes with slash)
    musicToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="1.8"/>
        <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>`;
  }
}

/* ============================================================================
   Envelope Opening Sequence
   ============================================================================ */
function initEnvelopeOpening() {
  const overlay = document.getElementById('envelope-overlay');
  const waxSeal = document.getElementById('wax-seal-wrapper');
  const sealContainer = document.querySelector('.wax-seal-container');
  const sealLeft = document.querySelector('.wax-seal-half.left');
  const sealRight = document.querySelector('.wax-seal-half.right');
  const sealHeart = document.querySelector('.wax-seal-heart-svg');
  const flap = document.querySelector('.envelope-upper-flap');
  const flapText = document.querySelector('.envelope-flap-text');
  const insideCard = document.querySelector('.envelope-card-inside');
  const promptBadge = document.querySelector('.tap-to-open-prompt');
  const invitationContent = document.getElementById('invitation-content');

  function openEnvelope() {
    if (hasUserInteracted) return;
    hasUserInteracted = true;

    // Start background music
    startAudioWithFadeIn();

    // 1. Crack wax seal halves and prime couple walking video playback on user gesture
    const walkingVideo = document.getElementById('couple-walking-video');
    if (walkingVideo) {
      walkingVideo.muted = true;
      walkingVideo.play().catch(() => {});
    }

    if (sealContainer) sealContainer.classList.add('cracking');
    if (sealLeft) sealLeft.classList.add('cracked');
    if (sealRight) sealRight.classList.add('cracked');
    if (sealHeart) sealHeart.classList.add('fade-out');
    if (promptBadge) promptBadge.classList.add('fade-out');

    // 2. Open flap & slide card up
    setTimeout(() => {
      if (flap) flap.classList.add('open');
      if (flapText) flapText.classList.add('fade-out');
    }, 300);

    setTimeout(() => {
      if (insideCard) insideCard.classList.add('slide-up');
    }, 460);

    // 3. Fade out overlay
    setTimeout(() => {
      if (overlay) overlay.classList.add('fading');
      if (invitationContent) invitationContent.classList.add('visible');

      const walkingVideo = document.getElementById('couple-walking-video');
      if (walkingVideo && walkingVideo.paused) {
        walkingVideo.play().catch(() => {});
      }
    }, 1340);

    // 4. Remove overlay from DOM flow
    setTimeout(() => {
      if (overlay) overlay.classList.add('hidden');
      document.body.style.overflow = 'auto';
      initScrollObservers();
    }, 2090);
  }

  // Allow clicking or tapping anywhere on envelope overlay, seal, or pressing Enter/Space
  if (overlay) {
    overlay.addEventListener('click', openEnvelope);
    overlay.addEventListener('touchend', (e) => {
      // Direct touch on iPhone Safari to synchronously unlock audio
      openEnvelope();
    }, { passive: true });
  }
  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
    waxSeal.addEventListener('touchend', (e) => {
      e.stopPropagation();
      openEnvelope();
    }, { passive: true });
    waxSeal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEnvelope();
      }
    });
  }
}

/* ============================================================================
   Live Countdown Timer
   ============================================================================ */
function initCountdown() {
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minsEl = document.getElementById('countdown-mins');
  const secsEl = document.getElementById('countdown-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetTime = new Date(WEDDING_CONFIG.eventDateISO).getTime();

  function update() {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================================
   "Add to Calendar" Dropdown & iCal (.ics) Generator
   ============================================================================ */
function initCalendarDropdown() {
  const btn = document.getElementById('btn-calendar-toggle');
  const dropdown = document.getElementById('calendar-dropdown');
  const googleLink = document.getElementById('cal-link-google');
  const icsBtn = document.getElementById('cal-btn-ics');

  if (!btn || !dropdown) return;

  // Toggle dropdown
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== btn) {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Set Google Calendar URL
  if (googleLink) {
    const startObj = new Date(WEDDING_CONFIG.eventDateISO);
    const endObj = new Date(WEDDING_CONFIG.eventEndDateISO);
    const startDate = startObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = endObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const title = encodeURIComponent(`${WEDDING_CONFIG.ceremonyHeading}: ${WEDDING_CONFIG.brideName} with ${WEDDING_CONFIG.groomName}`);
    const details = encodeURIComponent(`${WEDDING_CONFIG.hostIntro.replace(/\n/g, ' ')} ${WEDDING_CONFIG.brideName} with ${WEDDING_CONFIG.groomName}.\n${WEDDING_CONFIG.lunchNote}\nDress Code: ${WEDDING_CONFIG.dressCode}`);
    const location = encodeURIComponent(`${WEDDING_CONFIG.venueName}, ${WEDDING_CONFIG.venueAddress}`);

    googleLink.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  }

  // Handle Apple / Outlook iCal (.ics) download
  if (icsBtn) {
    icsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadICSFile();
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }
}

function downloadICSFile() {
  const formatICSDate = (isoStr) => {
    const d = new Date(isoStr);
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const start = formatICSDate(WEDDING_CONFIG.eventDateISO);
  const end = formatICSDate(WEDDING_CONFIG.eventEndDateISO);
  const title = `${WEDDING_CONFIG.ceremonyHeading}: ${WEDDING_CONFIG.brideName} with ${WEDDING_CONFIG.groomName}`;
  const desc = `${WEDDING_CONFIG.hostIntro.replace(/\n/g, ' ')} ${WEDDING_CONFIG.brideName} with ${WEDDING_CONFIG.groomName}.\\n${WEDDING_CONFIG.lunchNote}\\nDress Code: ${WEDDING_CONFIG.dressCode}`;
  const loc = `${WEDDING_CONFIG.venueName}, ${WEDDING_CONFIG.venueAddress}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Invytor//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:nikah-${Date.now()}@invytor.com`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${desc}`,
    `LOCATION:${loc}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${WEDDING_CONFIG.brideName.split(' ')[0]}-${WEDDING_CONFIG.groomName.split(' ')[0]}-Wedding.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============================================================================
   Intersection Observers for Stitched Needle Lines & Scroll Hints
   ============================================================================ */
function initScrollObservers() {
  // 1. Stitched line drawing animation on scroll
  const stitchLines = document.querySelectorAll('.lt-stitch-line');
  if ('IntersectionObserver' in window && stitchLines.length > 0) {
    const lineObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    stitchLines.forEach((line) => lineObserver.observe(line));
  } else {
    stitchLines.forEach((line) => line.classList.add('drawn'));
  }

  // 2. Hide scroll hint chevrons when user scrolls past 20px
  const scrollHints = document.querySelectorAll('.lt-scroll-hint');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      scrollHints.forEach(h => h.classList.add('faded'));
    }
  }, { passive: true });
}

/* ============================================================================
   Inject SVGs & Dynamic Configuration into DOM
   ============================================================================ */
function populateTemplate() {
  // 1. Envelope Elements
  const flapSubtitle = document.getElementById('envelope-subtitle');
  if (flapSubtitle) flapSubtitle.textContent = `${WEDDING_CONFIG.ceremonyType} Invitation`;

  const initA = document.getElementById('envelope-initial-1');
  const initB = document.getElementById('envelope-initial-2');
  if (initA) initA.textContent = WEDDING_CONFIG.envelopeInitials[0];
  if (initB) initB.textContent = WEDDING_CONFIG.envelopeInitials[1];

  // 2. Inject Ornaments into placeholder slots
  const bismillahBudSlot = document.getElementById('bismillah-bud-slot');
  if (bismillahBudSlot) bismillahBudSlot.innerHTML = renderBudStemSVG(28);

  const verseSpraySlot = document.getElementById('verse-spray-slot');
  if (verseSpraySlot) verseSpraySlot.innerHTML = renderFloralSpraySVG(40, 'cream');

  const heroDividerSlot = document.getElementById('hero-divider-slot');
  if (heroDividerSlot) heroDividerSlot.innerHTML = renderFloralDividerSVG("min(60vw, 240px)");

  const ceremonyHoopSlot = document.getElementById('ceremony-hoop-slot');
  if (ceremonyHoopSlot) {
    ceremonyHoopSlot.insertAdjacentHTML('afterbegin', renderEmbroideryHoopSVG());
  }

  const ceremonyDividerSlot = document.getElementById('ceremony-divider-slot');
  if (ceremonyDividerSlot) ceremonyDividerSlot.innerHTML = renderFloralDividerSVG("min(60vw, 240px)");

  const footerSpraySlot = document.getElementById('footer-spray-slot');
  if (footerSpraySlot) footerSpraySlot.innerHTML = renderFloralSpraySVG(74, 'footer');

  // Insert animated stitch line dividers where marked
  document.querySelectorAll('.stitch-line-slot').forEach((slot) => {
    slot.appendChild(createStitchLineElement(slot.dataset.width || "min(46vw, 200px)"));
  });

  // 3. Couple details in Hero
  const hostLabel = document.getElementById('host-label');
  if (hostLabel) hostLabel.textContent = WEDDING_CONFIG.hostLabel;

  const hostedBy = document.getElementById('hosted-by');
  if (hostedBy) hostedBy.textContent = WEDDING_CONFIG.hostedBy;

  const hostAddress = document.getElementById('host-address');
  if (hostAddress) hostAddress.textContent = WEDDING_CONFIG.hostAddress;

  const hostIntro = document.getElementById('host-intro');
  if (hostIntro) hostIntro.innerHTML = WEDDING_CONFIG.hostIntro.replace(/\n/g, '<br>');

  const brideName = document.getElementById('bride-name');
  if (brideName) brideName.innerHTML = WEDDING_CONFIG.brideName.replace(/\n/g, '<br>');

  const brideGrandparents = document.getElementById('bride-grandparents');
  if (brideGrandparents) brideGrandparents.textContent = WEDDING_CONFIG.brideGrandparents;

  const namesJoiner = document.getElementById('names-joiner');
  if (namesJoiner) namesJoiner.textContent = WEDDING_CONFIG.namesJoiner;

  const groomName = document.getElementById('groom-name');
  if (groomName) groomName.textContent = WEDDING_CONFIG.groomName;

  const groomParents = document.getElementById('groom-parents');
  if (groomParents) groomParents.textContent = WEDDING_CONFIG.groomParents;

  const groomHouse = document.getElementById('groom-house');
  if (groomHouse) {
    if (WEDDING_CONFIG.groomHouse) {
      groomHouse.textContent = WEDDING_CONFIG.groomHouse;
      groomHouse.style.display = '';
    } else {
      groomHouse.textContent = '';
      groomHouse.style.display = 'none';
    }
  }

  // 4. Ceremony details
  const ceremonyHeading = document.getElementById('ceremony-heading');
  if (ceremonyHeading) ceremonyHeading.textContent = WEDDING_CONFIG.ceremonyHeading;

  const ceremonySubtitle = document.getElementById('ceremony-subtitle');
  if (ceremonySubtitle) ceremonySubtitle.textContent = WEDDING_CONFIG.ceremonySubtitle;

  const hoopWeekday = document.getElementById('hoop-weekday');
  if (hoopWeekday) hoopWeekday.textContent = WEDDING_CONFIG.eventWeekday;

  const hoopDay = document.getElementById('hoop-day');
  if (hoopDay) hoopDay.textContent = WEDDING_CONFIG.eventDay;

  const hoopMonthYear = document.getElementById('hoop-month-year');
  if (hoopMonthYear) hoopMonthYear.textContent = WEDDING_CONFIG.eventMonthYear;

  const hoopTime = document.getElementById('hoop-time');
  if (hoopTime) hoopTime.textContent = WEDDING_CONFIG.timeText;

  const hijriDate = document.getElementById('hijri-date');
  if (hijriDate) hijriDate.textContent = WEDDING_CONFIG.hijriDate;

  const lunchNote = document.getElementById('lunch-note');
  if (lunchNote) lunchNote.textContent = WEDDING_CONFIG.lunchNote;

  const venueName = document.getElementById('venue-name');
  if (venueName) {
    venueName.textContent = WEDDING_CONFIG.venueName;
    if (venueName.tagName.toLowerCase() === 'a') {
      venueName.href = WEDDING_CONFIG.mapsUrl;
    }
  }

  const venueAddress = document.getElementById('venue-address');
  if (venueAddress) venueAddress.textContent = WEDDING_CONFIG.venueAddress;

  const mapsBtn = document.getElementById('btn-get-directions');
  if (mapsBtn) mapsBtn.href = WEDDING_CONFIG.mapsUrl;

  const dressCodeText = document.getElementById('dress-code-text');
  if (dressCodeText) dressCodeText.textContent = WEDDING_CONFIG.dressCode;

  const countdownLabel = document.getElementById('countdown-label');
  if (countdownLabel) countdownLabel.textContent = WEDDING_CONFIG.countdownLabel;

  // 5. Islamic Texts
  const bismillahArabic = document.getElementById('bismillah-arabic');
  if (bismillahArabic) bismillahArabic.textContent = WEDDING_CONFIG.bismillahArabic;

  const bismillahTrans = document.getElementById('bismillah-trans');
  if (bismillahTrans) bismillahTrans.textContent = WEDDING_CONFIG.bismillahTranslation;

  const verseArabic = document.getElementById('verse-arabic');
  if (verseArabic) verseArabic.textContent = WEDDING_CONFIG.verseArabic;

  const verseRef = document.getElementById('verse-ref');
  if (verseRef) verseRef.textContent = WEDDING_CONFIG.verseReference;

  const verseTrans = document.getElementById('verse-trans');
  if (verseTrans) verseTrans.textContent = WEDDING_CONFIG.verseTranslation;

  // 6. Footer
  const footerNames = document.getElementById('footer-names');
  if (footerNames) footerNames.textContent = WEDDING_CONFIG.footerNames;

  const footerDate = document.getElementById('footer-date');
  if (footerDate) footerDate.textContent = `${WEDDING_CONFIG.eventDay} ${WEDDING_CONFIG.eventMonthYear}`;
}

/* ============================================================================
   Application Initialization
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  populateTemplate();
  initCoupleWalkingVideo();
  initAudio();
  initEnvelopeOpening();
  initCountdown();
  initCalendarDropdown();
});
