import './styles.css';

const STORAGE = '/assets/';

const slides = [
  {
    type: 'image',
    src: `${STORAGE}generated-grill.webp`,
    alt: 'A natural editorial photograph of grilled beef, chips and greens',
    eyebrow: 'Fire from the grill',
    title: 'Good food has a sound.',
    text: 'Hear the sizzle, catch the smoke, and settle in for a plate made to be remembered.',
    price: 'From KSh 220',
    label: 'Minji beef'
  },
  {
    type: 'video',
    src: `${STORAGE}cafe-video-2.mp4`,
    poster: `${STORAGE}grill-feature.jpeg`,
    alt: 'Video of food and service at Testimony Cafe',
    eyebrow: 'The plate to share',
    title: 'A little bit of everything.',
    text: 'Classic Kenyan comfort, generous portions, and the kind of lunch that fixes your whole day.',
    price: 'KSh 150',
    label: 'Githeri cabbage'
  },
  {
    type: 'image',
    src: `${STORAGE}generated-juice.webp`,
    alt: 'A natural editorial photograph of fresh mango and passion fruit juice',
    eyebrow: 'Made for the moment',
    title: 'Fresh juice. Cold glass.',
    text: 'Bright, no-added-sugar blends to go with the lunch you came for.',
    price: 'From KSh 70',
    label: 'Passion juice small'
  },
  {
    type: 'video',
    src: `${STORAGE}cafe-video-3.mp4`,
    poster: `${STORAGE}menu-githeri.jpeg`,
    alt: 'Video of githeri and rice dishes at Testimony Cafe',
    eyebrow: 'Everyday favourites',
    title: 'The comfort classics.',
    text: 'Githeri, matoke, mukimo and pilau, served the way a neighbourhood cafe should.',
    price: 'From KSh 100',
    label: 'Matoke'
  },
  {
    type: 'image',
    src: `${STORAGE}venue-front.jpeg`,
    alt: 'The front entrance of Testimony Cafe',
    eyebrow: 'Your table is ready',
    title: 'Come as you are.',
    text: 'A warm hotel cafe in Kasarani for quick bites, long catch-ups, and one more cup.',
    price: 'Open daily',
    label: 'Find us in Kasarani'
  }
];

const menu = [
  {
    id: 'main-dishes',
    label: 'Main dishes',
    kicker: 'House favourites',
    intro: 'The plates that keep the room full.',
    items: [
      ['Matumbo ugali', 'KSh 300'], ['Matumbo mukimo', 'KSh 270'], ['Matumbo pilau', 'KSh 300'], ['Matumbo plain', 'KSh 150'], ['Matumbo rice', 'KSh 300'], ['Matumbo ugali', 'KSh 200'],
      ['Githeri cabbage', 'KSh 150'], ['Githeri matoke', 'KSh 220'], ['Githeri ndengu', 'KSh 180'], ['Githeri sukuma', 'KSh 150'], ['Githeri veggies', 'KSh 150'],
      ['Minji beef', 'KSh 220'], ['Minji beef rice', 'KSh 300'], ['Minji mukimo', 'KSh 250'], ['Minji pilau', 'KSh 270'], ['Minji plain', 'KSh 140'], ['Minji ugali', 'KSh 180']
    ]
  },
  {
    id: 'fish',
    label: 'Fish',
    kicker: 'From the pan',
    intro: 'Freshly prepared favourites from the fish menu.',
    items: [['Fish masala', 'Ask today'], ['Fish biryani', 'Ask today'], ['Fish curry', 'Ask today'], ['Fish wet fry', 'Ask today'], ['Fish dry fry', 'Ask today'], ['Fish munye', 'Ask today']]
  },
  {
    id: 'beef',
    label: 'Beef',
    kicker: 'Slow, smoky, satisfying',
    intro: 'Comforting plates for a proper appetite.',
    items: [['Minji beef', 'KSh 220'], ['Minji beef rice', 'KSh 300'], ['Matumbo ugali', 'KSh 300'], ['Matumbo mukimo', 'KSh 270'], ['Matumbo pilau', 'KSh 300']]
  },
  {
    id: 'chicken',
    label: 'Chicken',
    kicker: 'Worth the wait',
    intro: 'Ask the team what is coming hot today.',
    items: [['Chicken plate', 'Ask today'], ['Chicken with rice', 'Ask today'], ['Chicken with ugali', 'Ask today']]
  },
  {
    id: 'vegetables',
    label: 'Vegetables',
    kicker: 'Bright sides',
    intro: 'Fresh greens and simple sides to build your plate.',
    items: [['Cabbage matoke', 'KSh 120'], ['Cabbage plain', 'KSh 50'], ['Cabbage rice', 'KSh 100'], ['Cabbage ugali', 'KSh 100'], ['Kienyeji plain', 'KSh 80'], ['Kienyeji ugali', 'KSh 130'], ['Kienyeji rice', 'KSh 130'], ['Avocado', 'KSh 40'], ['Sukuma plain', 'KSh 50']]
  },
  {
    id: 'juices',
    label: 'Juices',
    kicker: 'No added sugar',
    intro: 'Fresh fruit blends, bright enough to wake up the table.',
    items: [['Beetroot sugar', 'KSh 100'], ['Cocktail juice large', 'KSh 100'], ['Mango juice large', 'KSh 150'], ['Passion juice large', 'KSh 150'], ['Passion juice small', 'KSh 70'], ['Sugarcane juice', 'KSh 100']]
  },
  {
    id: 'soft-drinks',
    label: 'Soft drinks',
    kicker: 'Cold & easy',
    intro: 'Pick a cold one for the walk home or the table.',
    items: [['Afa kubwa', 'KSh 80'], ['Afa ndogo', 'KSh 60'], ['Azam', 'KSh 60'], ['Can soda', 'KSh 100'], ['Dasani 1L', 'KSh 80'], ['Dasani 500ml', 'KSh 50'], ['Lemonade', 'KSh 50'], ['Minute Maid kubwa', 'KSh 150'], ['Minute Maid ndogo', 'KSh 80'], ['Novida kubwa', 'KSh 60'], ['Novida ndogo', 'KSh 40'], ['Pepsi', 'KSh 50'], ['Plastic soda 1.2L', 'KSh 150'], ['Plastic soda 2L', 'KSh 250'], ['Plastic soda 500ml', 'KSh 80'], ['Plastic soda small', 'KSh 50'], ['Play', 'KSh 80'], ['Predator', 'KSh 70'], ['Soda 300ml', 'KSh 60'], ['Soda 500ml', 'KSh 70']]
  }
];

const gallery = [
  ['venue-front.jpeg', 'Find us in Kasarani', 'venue'],
  ['grill-feature.jpeg', 'Straight from the grill', 'food'],
  ['menu-cover.jpeg', 'The real menu, online', 'menu'],
  ['venue-entry.jpeg', 'Walk in hungry', 'venue'],
  ['menu-main-course.jpeg', 'Main course, made easy', 'menu'],
  ['menu-juices.jpeg', 'Bright, fresh, no added sugar', 'food']
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Testimony Cafe home">
      <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
      <span class="brand-copy"><strong>Testimony</strong><small>CAFE &amp; RESTAURANT</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#menu">Menu</a><a href="#story">Our story</a><a href="#gallery">Gallery</a><a href="#visit">Visit us</a>
    </nav>
    <a class="header-cta" href="#menu">See the menu <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation"><span></span><span></span></button>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#gallery">Gallery</a><a href="#visit">Visit us</a></nav>
  </header>

  <main id="top">
    <section class="hero" aria-label="Featured food and cafe moments">
      <div class="hero-media" id="hero-media"></div>
      <div class="hero-shade"></div>
      <div class="hero-topline"><span class="live-dot"></span><span>Good food. Good company.</span><span class="topline-rule"></span><span>Kasarani, Nairobi</span></div>
      <div class="hero-content">
        <div class="hero-copy" id="hero-copy"></div>
        <div class="hero-controls">
          <button class="round-control" type="button" id="prev-slide" aria-label="Previous featured item">←</button>
          <div class="slide-count" aria-live="polite"><span id="slide-current">01</span><span class="count-rule"></span><span>0${slides.length}</span></div>
          <button class="round-control" type="button" id="next-slide" aria-label="Next featured item">→</button>
          <button class="round-control pause-control" type="button" id="pause-slide" aria-label="Pause automatic rotation" aria-pressed="false">⏸</button>
        </div>
      </div>
      <div class="hero-progress" aria-label="Choose featured item" id="hero-progress"></div>
      <a class="scroll-cue" href="#menu"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
    </section>

    <section class="intro-band" id="story">
      <div class="section-label"><span>01</span><span class="label-line"></span><span>Our table</span></div>
      <div class="intro-grid">
        <h2>A warm welcome,<br><em>served daily.</em></h2>
        <div class="intro-copy"><p>Testimony Cafe is your neighbourhood hotel cafe in Kasarani — a place for a quick plate, a bright juice, or the long catch-up that turns into dinner.</p><p>We keep the room easy, the portions generous, and the welcome genuine. Come for the food. Stay for the feeling.</p><a class="text-link" href="#visit">Get to know us <span>↗</span></a></div>
      </div>
      <div class="intro-stats"><div><strong>7</strong><span>ways to<br>build a plate</span></div><div><strong>100%</strong><span>fresh juice<br>no added sugar</span></div><div><strong>1</strong><span>good reason<br>to come back</span></div></div>
    </section>

    <section class="menu-section" id="menu">
      <div class="section-heading"><div class="section-label"><span>02</span><span class="label-line"></span><span>Digital menu</span></div><h2>Pick your<br><em>kind of hungry.</em></h2><p>Real prices from the menu at the cafe, so you can decide before you arrive.</p></div>
      <nav class="menu-tabs" aria-label="Menu categories" id="menu-tabs"></nav>
      <div class="menu-panel" id="menu-panel" aria-live="polite"></div>
    </section>

    <section class="gallery-section" id="gallery">
      <div class="gallery-head"><div><div class="section-label"><span>03</span><span class="label-line"></span><span>From the cafe</span></div><h2>See you<br><em>at the table.</em></h2></div><p>Real plates, real people, real neighbourhood energy.</p></div>
      <div class="gallery-grid" id="gallery-grid"></div>
    </section>

    <section class="visit-section" id="visit">
      <div class="visit-photo"><img src="${STORAGE}venue-inside_bd897076.jpeg" alt="Inside the warm, casual dining room at Testimony Cafe"><div class="photo-caption"><span>Inside Testimony Cafe</span><span>01 / 02</span></div></div>
      <div class="visit-copy"><div class="section-label"><span>04</span><span class="label-line"></span><span>Find us</span></div><p class="visit-kicker">The best part of the day<br>is closer than you think.</p><h2>Come hungry.<br><em>Leave smiling.</em></h2><p class="visit-body">Find us in Kasarani, Nairobi. Walk in for a quick lunch or make a proper evening of it — there is always a seat, a cold drink, and something good on the way.</p><a class="map-button" href="https://maps.app.goo.gl/td7ZCNeRQx5hRbhT8" target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a><div class="visit-details"><div><span>Location</span><strong>Kasarani, Nairobi</strong></div><div><span>Best for</span><strong>Lunch · Dinner · Catch-ups</strong></div></div></div>
    </section>
  </main>

  <footer class="site-footer"><div class="footer-brand"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><strong>Testimony</strong></div><p>Come for the plate.<br>Stay for the testimony.</p><div class="footer-meta"><span>© 2026 Testimony Cafe</span><a href="#top">Back to top ↑</a></div></footer>
`;

let currentSlide = 0;
let slideTimer;
let isPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const media = document.querySelector('#hero-media');
const copy = document.querySelector('#hero-copy');
const progress = document.querySelector('#hero-progress');
const current = document.querySelector('#slide-current');
const pauseButton = document.querySelector('#pause-slide');
if (isPaused) { pauseButton.setAttribute('aria-pressed', 'true'); pauseButton.setAttribute('aria-label', 'Resume automatic rotation'); pauseButton.textContent = '▶'; }

function renderSlide(index, direction = 'next') {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];
  media.classList.remove('is-changing');
  void media.offsetWidth;
  media.classList.add('is-changing');
  media.innerHTML = slide.type === 'video'
    ? `<video class="hero-asset" autoplay muted loop playsinline poster="${slide.poster}" aria-label="${slide.alt}"><source src="${slide.src}" type="video/mp4"></video>`
    : `<img class="hero-asset" src="${slide.src}" alt="${slide.alt}">`;
  copy.innerHTML = `<span class="eyebrow">${slide.eyebrow}</span><h1>${slide.title}</h1><p>${slide.text}</p><div class="feature-price"><span>${slide.label}</span><strong>${slide.price}</strong></div><a class="hero-link" href="#menu">Browse the full menu <span aria-hidden="true">↗</span></a>`;
  current.textContent = String(currentSlide + 1).padStart(2, '0');
  progress.querySelectorAll('button').forEach((button, i) => {
    button.classList.toggle('is-active', i === currentSlide);
    button.setAttribute('aria-pressed', i === currentSlide ? 'true' : 'false');
  });
  const video = media.querySelector('video');
  if (isPaused && video) video.pause();
}

slides.forEach((slide, i) => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = `progress-dot${i === 0 ? ' is-active' : ''}`; button.setAttribute('aria-label', `Show featured item ${i + 1}`); button.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
  button.addEventListener('click', () => { renderSlide(i); resetTimer(); }); progress.appendChild(button);
});

document.querySelector('#prev-slide').addEventListener('click', () => { renderSlide(currentSlide - 1, 'prev'); resetTimer(); });
document.querySelector('#next-slide').addEventListener('click', () => { renderSlide(currentSlide + 1); resetTimer(); });
pauseButton.addEventListener('click', () => { isPaused = !isPaused; pauseButton.setAttribute('aria-pressed', String(isPaused)); pauseButton.setAttribute('aria-label', isPaused ? 'Resume automatic rotation' : 'Pause automatic rotation'); pauseButton.textContent = isPaused ? '▶' : '⏸'; const video = media.querySelector('video'); if (video) isPaused ? video.pause() : video.play(); resetTimer(); });
function resetTimer() { clearInterval(slideTimer); if (!isPaused) slideTimer = setInterval(() => renderSlide(currentSlide + 1), 6500); }
renderSlide(0); resetTimer();

const tabs = document.querySelector('#menu-tabs'); const panel = document.querySelector('#menu-panel'); let activeCategory = menu[0].id;
menu.forEach((category) => { const button = document.createElement('button'); button.type = 'button'; button.textContent = category.label; button.className = category.id === activeCategory ? 'is-active' : ''; button.setAttribute('aria-pressed', category.id === activeCategory ? 'true' : 'false'); button.addEventListener('click', () => { activeCategory = category.id; tabs.querySelectorAll('button').forEach((b) => { const active = b.textContent === category.label; b.classList.toggle('is-active', active); b.setAttribute('aria-pressed', active ? 'true' : 'false'); }); renderMenu(category); }); tabs.appendChild(button); });
function renderMenu(category) { panel.innerHTML = `<div class="menu-panel-head"><span class="eyebrow">${category.kicker}</span><h3>${category.intro}</h3></div><div class="menu-items">${category.items.map(([name, price]) => `<div class="menu-item"><span>${name}</span><span class="menu-dots"></span><strong>${price}</strong></div>`).join('')}</div><div class="menu-note">Prices shown in Kenyan shillings. Items marked “Ask today” are updated in-house.</div>`; }
renderMenu(menu[0]);

const galleryGrid = document.querySelector('#gallery-grid'); galleryGrid.innerHTML = gallery.map(([image, caption, tag], i) => `<figure class="gallery-card gallery-${i + 1}"><img src="${STORAGE}${image}" alt="${caption}"><figcaption><span>${String(i + 1).padStart(2, '0')}</span><strong>${caption}</strong><small>${tag}</small></figcaption></figure>`).join('');

const toggle = document.querySelector('.menu-toggle'); const mobileNav = document.querySelector('.mobile-nav'); toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); mobileNav.classList.toggle('is-open', !open); }); mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); mobileNav.classList.remove('is-open'); }));

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.intro-band, .menu-section, .gallery-section, .visit-section, .gallery-card').forEach((el) => { el.classList.add('reveal'); revealObserver.observe(el); });
