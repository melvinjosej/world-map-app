// World Map Explorer — Main App
// Interactive globe exploration for kids

(function () {
  'use strict';

  // ─── State ───
  let currentView = 'world'; // 'world' | 'continent' | 'factCard' | 'trainCard'
  let currentContinent = null;
  let currentCountry = null;
  let soundEnabled = true;

  // ─── DOM refs ───
  const worldView = document.getElementById('world-view');
  const continentView = document.getElementById('continent-view');
  const factCard = document.getElementById('fact-card');
  const backBtn = document.getElementById('back-btn');
  const headerTitle = document.getElementById('header-title');
  const continentSubtitle = document.getElementById('continent-subtitle');
  const countryGrid = document.getElementById('country-grid');
  const factFlag = document.getElementById('fact-flag');
  const factCountryName = document.getElementById('fact-country-name');
  const factCapital = document.getElementById('fact-capital');
  const factTabs = document.getElementById('fact-tabs');
  const factContent = document.getElementById('fact-content');
  const factFun = document.getElementById('fact-fun');
  const soundToggle = document.getElementById('sound-toggle');
  const worldMap = document.getElementById('world-map');
  const continentHero = document.getElementById('continent-hero');
  const continentHeroImg = document.getElementById('continent-hero-img');
  
  const viewTrainsBtn = document.getElementById('view-trains-btn');
  const trainOverlay = document.getElementById('train-overlay');
  const trainContinentTitle = document.getElementById('train-continent-title');
  const trainGrid = document.getElementById('train-grid');

  // ─── Simplified SVG continent paths ───
  const CONTINENT_PATHS = {
    africa: {
      paths: [
        'M480,195 L500,190 L520,200 L530,220 L540,260 L535,300 L525,340 L515,370 L505,380 L490,375 L475,355 L465,320 L458,285 L460,250 L465,225 L470,210 Z'
      ],
      labelX: 500, labelY: 285,
      emojiX: 500, emojiY: 260
    },
    asia: {
      paths: [
        'M560,80 L620,70 L680,75 L730,90 L760,110 L780,140 L770,170 L740,190 L720,210 L690,220 L660,215 L630,225 L600,220 L580,210 L560,195 L540,180 L530,160 L535,130 L545,100 Z',
        'M700,225 L720,220 L740,230 L745,250 L730,260 L710,255 L700,240 Z'
      ],
      labelX: 660, labelY: 155,
      emojiX: 660, emojiY: 130
    },
    europe: {
      paths: [
        'M460,80 L490,75 L520,82 L540,95 L545,110 L540,130 L530,145 L520,155 L505,160 L490,157 L475,150 L465,140 L455,125 L450,108 L452,92 Z'
      ],
      labelX: 497, labelY: 125,
      emojiX: 497, emojiY: 100
    },
    northAmerica: {
      paths: [
        'M120,60 L180,50 L240,55 L280,75 L310,100 L320,130 L310,160 L290,185 L260,200 L230,210 L200,205 L170,195 L145,180 L128,155 L115,130 L110,100 L112,80 Z',
        'M230,210 L250,215 L265,230 L260,245 L245,250 L235,240 L228,225 Z'
      ],
      labelX: 215, labelY: 135,
      emojiX: 215, emojiY: 108
    },
    southAmerica: {
      paths: [
        'M260,260 L290,255 L310,270 L320,300 L315,340 L305,375 L290,400 L275,415 L260,410 L250,390 L245,360 L240,330 L242,300 L248,275 Z'
      ],
      labelX: 280, labelY: 335,
      emojiX: 280, emojiY: 308
    },
    oceania: {
      paths: [
        'M760,290 L810,280 L850,290 L870,310 L860,335 L835,350 L800,355 L775,345 L755,325 L750,305 Z',
        'M880,340 L900,335 L910,350 L905,365 L890,370 L878,360 Z'
      ],
      labelX: 810, labelY: 320,
      emojiX: 810, emojiY: 295
    },
    antarctica: {
      paths: [
        'M150,460 L300,455 L450,450 L600,452 L750,458 L850,465 L870,475 L850,490 L700,495 L500,498 L300,496 L150,490 L130,478 Z'
      ],
      labelX: 500, labelY: 480,
      emojiX: 500, emojiY: 463
    }
  };

  // ─── Audio (inline base64 beep) ───
  function playTapSound() {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) { /* ignore audio errors */ }
  }

  function playOpenSound() {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) { /* ignore */ }
  }

  // ─── Render World Map ───
  function renderWorldMap() {
    worldMap.innerHTML = '';

    // Draw each continent
    Object.entries(CONTINENT_PATHS).forEach(([key, continent]) => {
      const data = WORLD_DATA[key];
      if (!data) return;

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.classList.add('continent-group');
      group.dataset.continent = key;

      // Draw paths
      continent.paths.forEach(d => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', data.color);
        path.style.filter = `drop-shadow(0 0 12px ${data.glowColor})`;
        group.appendChild(path);
      });

      // Emoji label
      const emoji = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      emoji.classList.add('continent-emoji');
      emoji.setAttribute('x', continent.emojiX);
      emoji.setAttribute('y', continent.emojiY);
      emoji.setAttribute('text-anchor', 'middle');
      emoji.textContent = data.emoji;
      group.appendChild(emoji);

      // Text label
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.classList.add('continent-label');
      label.setAttribute('x', continent.labelX);
      label.setAttribute('y', continent.labelY);
      label.textContent = data.name;
      group.appendChild(label);

      // Click handler
      group.addEventListener('click', () => {
        playTapSound();
        navigateToContinent(key);
      });

      worldMap.appendChild(group);
    });
  }

  // ─── Navigate to Continent ───
  function navigateToContinent(continentKey) {
    currentContinent = continentKey;
    currentView = 'continent';
    const data = WORLD_DATA[continentKey];

    headerTitle.textContent = `${data.emoji} ${data.name}`;
    continentSubtitle.textContent = data.description;
    backBtn.classList.remove('hidden');

    // Set hero image
    continentHero.classList.remove('loaded');
    continentHeroImg.onload = () => {
      continentHero.classList.add('loaded');
    };
    continentHeroImg.src = `images/continents/${continentKey}.png`;
    continentHeroImg.alt = `${data.name} illustration`;

    // Show/hide view trains btn
    if (data.trains && data.trains.length > 0) {
      viewTrainsBtn.style.display = 'inline-flex';
    } else {
      viewTrainsBtn.style.display = 'none';
    }

    // Build country cards
    countryGrid.innerHTML = '';
    Object.entries(data.countries).forEach(([key, country], i) => {
      const card = document.createElement('div');
      card.classList.add('country-card', 'animate-in');
      card.style.animationDelay = `${i * 0.08}s`;
      card.style.setProperty('--card-glow', data.glowColor);

      card.innerHTML = `
        <span class="card-flag">${country.flag}</span>
        <span class="card-name">${country.name}</span>
        <span class="card-capital">🏛️ ${country.capital}</span>
      `;

      card.addEventListener('click', () => {
        playOpenSound();
        openFactCard(continentKey, key);
      });

      countryGrid.appendChild(card);
    });

    // Transition views
    worldView.classList.remove('active');
    continentView.classList.add('active');
  }

  // ─── Open Fact Card ───
  function openFactCard(continentKey, countryKey) {
    currentCountry = countryKey;
    currentView = 'factCard';
    const country = WORLD_DATA[continentKey].countries[countryKey];

    factFlag.textContent = country.flag;
    factCountryName.textContent = country.name;
    factCapital.textContent = `🏛️ Capital: ${country.capital}`;
    factFun.textContent = country.funFact;

    // Build tabs
    const tabs = [
      { key: 'animals', label: '🦁 Animals', data: country.animals },
      { key: 'monuments', label: '🏛️ Landmarks', data: country.monuments },
      { key: 'geology', label: '⛰️ Nature', data: country.geology }
    ];

    factTabs.innerHTML = '';
    tabs.forEach((tab, i) => {
      const btn = document.createElement('button');
      btn.classList.add('tab-btn');
      if (i === 0) btn.classList.add('active');
      btn.textContent = tab.label;
      btn.addEventListener('click', () => {
        factTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFactItems(tab.data);
        playTapSound();
      });
      factTabs.appendChild(btn);
    });

    // Render first tab
    renderFactItems(tabs[0].data);

    // Show overlay
    factCard.classList.remove('hidden');
    requestAnimationFrame(() => {
      factCard.classList.add('visible');
    });
  }

  function renderFactItems(items) {
    factContent.innerHTML = '';
    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('fact-item');
      div.innerHTML = `
        <span class="fact-emoji">${item.emoji}</span>
        <div class="fact-text">
          <span class="fact-name">${item.name}</span>
          <span class="fact-desc">${item.fact}</span>
        </div>
      `;
      factContent.appendChild(div);
    });
  }

  // ─── Close Fact Card ───
  function closeFactCard() {
    factCard.classList.remove('visible');
    setTimeout(() => {
      factCard.classList.add('hidden');
    }, 350);
    currentView = 'continent';
    currentCountry = null;
  }

  // ─── Train Overlay ───
  function openTrainOverlay(continentKey) {
    currentView = 'trainCard';
    const data = WORLD_DATA[continentKey];
    trainContinentTitle.textContent = `🚂 Trains of ${data.name}`;
    
    trainGrid.innerHTML = '';
    
    if (data.trains) {
      data.trains.forEach((train, i) => {
        const card = document.createElement('div');
        card.classList.add('train-card', 'animate-in');
        card.style.animationDelay = `${i * 0.08}s`;
        
        card.innerHTML = `
          <img src="${train.image}" alt="${train.name}" class="train-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23ddd\\'/><text x=\\'50\\' y=\\'55\\' font-family=\\'Arial\\' font-size=\\'14\\' text-anchor=\\'middle\\' fill=\\'%23666\\'>Image missing</text></svg>'">
          <div class="train-info">
            <h3>${train.name}</h3>
            <p>${train.fact}</p>
          </div>
        `;
        trainGrid.appendChild(card);
      });
    }

    trainOverlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      trainOverlay.classList.add('visible');
    });
  }

  function closeTrainOverlay() {
    trainOverlay.classList.remove('visible');
    setTimeout(() => {
      trainOverlay.classList.add('hidden');
    }, 350);
    currentView = 'continent';
  }

  // ─── Back Navigation ───
  function goBack() {
    playTapSound();
    if (currentView === 'factCard') {
      closeFactCard();
    } else if (currentView === 'trainCard') {
      closeTrainOverlay();
    } else if (currentView === 'continent') {
      currentView = 'world';
      currentContinent = null;
      headerTitle.textContent = '🌍 World Explorer';
      backBtn.classList.add('hidden');
      continentView.classList.remove('active');
      worldView.classList.add('active');
    }
  }

  // ─── Event Listeners ───
  backBtn.addEventListener('click', goBack);

  // Close fact card on overlay click
  factCard.addEventListener('click', (e) => {
    if (e.target === factCard) {
      playTapSound();
      closeFactCard();
    }
  });

  // Close train overlay on overlay click
  trainOverlay.addEventListener('click', (e) => {
    if (e.target === trainOverlay) {
      playTapSound();
      closeTrainOverlay();
    }
  });

  // View trains button
  viewTrainsBtn.addEventListener('click', () => {
    playOpenSound();
    openTrainOverlay(currentContinent);
  });

  // Sound toggle
  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') goBack();
  });

  // Prevent double-tap zoom on mobile
  let lastTap = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      e.preventDefault();
    }
    lastTap = now;
  }, { passive: false });

  // ─── Initialize ───
  renderWorldMap();

})();
