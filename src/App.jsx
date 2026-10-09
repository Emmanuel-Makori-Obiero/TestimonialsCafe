import React, { useEffect, useRef, useState } from 'react';

const ASSET = '/assets/';
const WHATSAPP_URL = 'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FK5435Y7YK2TRJ1%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadmaT3V3wj9JnHsR2r5BIY59R8WHSz69TlYVLFDR2Rw6GFCYeoMtNtGNE-GQw_aem_BEi6leW8FRkpK75p1x_aJQ&e=AUBzYZwyUZmyM-r96NgCzQFiZoCyr82Gvs-ycjP2cIKP2qyBbtC4NITg_rBVEaYgdG_IZaaRwsvLnpSH4VD0mGoWYlno4n6IOsGIzJmi0pNzZhmKugPb8P5idBpA1NSjWp-DSRQ';

const slides = [
  {
    type: 'image', src: `${ASSET}generated-grill.webp`, alt: 'A natural editorial photograph of grilled beef, chips and greens', eyebrow: 'Fire from the grill', title: 'Good food has a sound.', text: 'Hear the sizzle, catch the smoke, and settle in for a plate made to be remembered.', price: 'From KSh 220', label: 'Minji beef'
  },
  {
    type: 'image', src: `${ASSET}food-platter.jpeg`, alt: 'A plated selection of Kenyan food at Testimony Cafe', eyebrow: 'The plate to share', title: 'A little bit of everything.', text: 'Classic Kenyan comfort, generous portions, and the kind of lunch that fixes your whole day.', price: 'KSh 150', label: 'Githeri cabbage'
  },
  {
    type: 'image', src: `${ASSET}generated-juice.webp`, alt: 'A natural editorial photograph of fresh mango and passion fruit juice', eyebrow: 'Fresh from the blender', title: 'Fresh juice. Cold glass.', text: 'Bright, no-added-sugar blends to go with the lunch you came for.', price: 'From KSh 70', label: 'Passion juice small'
  },
  {
    type: 'image', src: `${ASSET}hero-grill.jpeg`, alt: 'A rich plate of food with chips and greens', eyebrow: 'Everyday favourites', title: 'The comfort classics.', text: 'Githeri, matoke, mukimo and pilau, served the way a neighbourhood cafe should.', price: 'From KSh 100', label: 'Matoke'
  },
  {
    type: 'image', src: `${ASSET}grill-feature.jpeg`, alt: 'A grilled food platter with greens and chips', eyebrow: 'Straight from the kitchen', title: 'A proper plate, every time.', text: 'Simple food, clear prices, and generous portions made for the table.', price: 'KSh 150', label: 'Chips'
  }
];

const menu = [
  { id: 'main-dishes', label: 'Main dishes', kicker: 'House favourites', intro: 'The plates that keep the room full.', items: [['Matumbo ugali', 'KSh 300'], ['Matumbo githeri', 'KSh 300'], ['Matumbo mukimo', 'KSh 270'], ['Matumbo pilau', 'KSh 300'], ['Matumbo plain', 'KSh 150'], ['Matumbo rice', 'KSh 300'], ['Matumbo ugali', 'KSh 200'], ['Githeri cabbage', 'KSh 150'], ['Githeri matoke', 'KSh 220'], ['Githeri minji', 'KSh 180'], ['Githeri ndengu', 'KSh 180'], ['Githeri sukuma', 'KSh 150'], ['Githeri veggies', 'KSh 150'], ['Minji beef', 'KSh 220'], ['Minji beef rice', 'KSh 300'], ['Minji mukimo', 'KSh 250'], ['Minji pilau', 'KSh 270'], ['Minji plain', 'KSh 140'], ['Minji ugali', 'KSh 180'], ['Ndengu matoke', 'KSh 150'], ['Ndengu plain', 'KSh 80'], ['Ndengu rice', 'KSh 120'], ['Ndengu ugali', 'KSh 100'], ['Njahi beef', 'KSh 220'], ['Njahi beef rice', 'KSh 220'], ['Njahi mukimo', 'KSh 180'], ['Njahi matumbo', 'KSh 270'], ['Njahi plain', 'KSh 120'], ['Njahi rice', 'KSh 100'], ['Njahi ugali', 'KSh 160'], ['Egg nyanya', 'KSh 100'], ['Egg nyanya rice', 'KSh 140'], ['Managu', 'KSh 50'], ['Mix rice', 'KSh 100'], ['Pilau eggs tomato', 'KSh 150'], ['Pilau mix', 'KSh 100'], ['Chips', 'KSh 150']] },
  { id: 'plains-sides', label: 'Plains & sides', kicker: 'Build your plate', intro: 'The simple sides that make the meal complete.', items: [['Githeri plain', 'KSh 150'], ['Kachumbari', 'KSh 30'], ['Matoke', 'KSh 100'], ['Mala kubwa', 'KSh 80'], ['Mukimo', 'KSh 120'], ['Omena', 'KSh 200'], ['Omena ugali / rice', 'KSh 150'], ['Pilau', 'KSh 150'], ['Plastic dish', 'KSh 30'], ['Rice', 'KSh 50'], ['Ugali', 'KSh 50'], ['Ugali mala', 'KSh 120'], ['Chips masala', 'KSh 200']] },
  { id: 'vegetables', label: 'Vegetables', kicker: 'Bright sides', intro: 'Fresh greens and simple sides to build your plate.', items: [['Cabbage matoke', 'KSh 120'], ['Cabbage mukimo', 'KSh 120'], ['Cabbage plain', 'KSh 50'], ['Cabbage rice', 'KSh 100'], ['Cabbage ugali', 'KSh 100'], ['Cabbage mukimo', 'KSh 180'], ['Kienyeji matoke', 'KSh 80'], ['Kienyeji plain', 'KSh 80'], ['Kienyeji ugali', 'KSh 130'], ['Kienyeji rice', 'KSh 130'], ['Avocado', 'KSh 40'], ['Sukuma plain', 'KSh 50'], ['Ugali sukuma', 'KSh 100'], ['Ugali plain', 'KSh 50']] },
  { id: 'juices', label: 'Juices', kicker: 'No added sugar', intro: 'Fresh fruit blends, bright enough to wake up the table.', items: [['Beetroot sugar', 'KSh 100'], ['Cocktail juice large', 'KSh 100'], ['Mango juice large', 'KSh 150'], ['Passion juice large', 'KSh 150'], ['Passion juice small', 'KSh 70'], ['Sugarcane juice', 'KSh 100']] },
  { id: 'soft-drinks', label: 'Soft drinks', kicker: 'Cold & easy', intro: 'Pick a cold one for the walk home or the table.', items: [['Afa kubwa', 'KSh 80'], ['Afa ndogo', 'KSh 60'], ['Azam', 'KSh 60'], ['Can soda', 'KSh 100'], ['Dasani 1L', 'KSh 80'], ['Dasani 500ml', 'KSh 50'], ['Lemonade', 'KSh 50'], ['Minute Maid kubwa', 'KSh 150'], ['Minute Maid ndogo', 'KSh 80'], ['Novida kubwa', 'KSh 60'], ['Novida ndogo', 'KSh 40'], ['Pepsi', 'KSh 50'], ['Plastic soda 1.2L', 'KSh 150'], ['Plastic soda 2L', 'KSh 250'], ['Plastic soda 500ml', 'KSh 80'], ['Plastic soda small', 'KSh 50'], ['Play', 'KSh 80'], ['Predator', 'KSh 70'], ['Soda 300ml', 'KSh 60'], ['Soda 500ml', 'KSh 70']] }
];

const gallery = [
  ['venue-front.jpeg', 'Find us in Kasarani', 'venue'], ['grill-feature.jpeg', 'Straight from the grill', 'food'], ['menu-cover.jpeg', 'The real menu, online', 'menu'], ['venue-entry.jpeg', 'Walk in hungry', 'venue'], ['menu-main-course.jpeg', 'Main course, made easy', 'menu'], ['menu-juices.jpeg', 'Bright, fresh, no added sugar', 'food']
];

const testimonialVideos = [
  { src: `${ASSET}testimonial-fries.mp4`, title: 'Fresh from the fryer', description: 'A behind-the-scenes look at chips, chapati, coleslaw, and rotisserie chicken coming out of the kitchen.', quote: 'Straight from the kitchen to the table.' },
  { src: `${ASSET}testimonial-venue.mp4`, title: 'A familiar Kasarani stop', description: 'A quick walk through the bright juice stand and the everyday energy around Testimony Cafeteria.', quote: 'The place people keep coming back to.' },
  { src: `${ASSET}testimonial-juice.mp4`, title: 'Fresh juice, made properly', description: 'Sugarcane, lime, a real press, and a cold cup — a simple look at how the healthy drinks are made.', quote: 'Freshness you can see.' },
  { src: `${ASSET}testimonial-interior.mp4`, title: 'Inside Testimony Cafeteria', description: 'A look inside the cafe, its seating, the menu board, payment details, and the dishes available on the day.', quote: 'Good food, a relaxed room, and plenty to choose from.' }
];

function Brand({ footer = false }) {
  return <img className={footer ? 'footer-logo' : 'brand-logo'} src={`${ASSET}testimonialscafelogo.jpg`} alt="Testimony Cafeteria" />;
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><strong className="section-number">{number}</strong><strong className="section-title">{children}</strong></div>;
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [activeCategory, setActiveCategory] = useState(menu[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const mediaRef = useRef(null);
  const activeSlide = slides[currentSlide];
  const activeMenu = menu.find((category) => category.id === activeCategory) ?? menu[0];

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => setCurrentSlide((slide) => (slide + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const video = mediaRef.current?.querySelector('video');
    if (!video) return;
    if (isPaused) video.pause();
    else video.play().catch(() => {});
  }, [currentSlide, isPaused]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.intro-band, .menu-section, .gallery-section, .visit-section, .gallery-card').forEach((element) => {
      element.classList.add('reveal'); observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setTestimonialIndex((index) => (index + 1) % testimonialVideos.length), 8500);
    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide((index + slides.length) % slides.length);
  const togglePause = () => setIsPaused((paused) => !paused);
  const pauseLabel = isPaused ? 'Resume automatic rotation' : 'Pause automatic rotation';

  return <>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Testimony Cafe home"><Brand /></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#gallery">Gallery</a><a href="#visit">Visit us</a></nav>
      <a className="header-cta" href="#menu">See the menu <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" type="button" aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileOpen((open) => !open)}><span /><span /></button>
      <nav className={`mobile-nav${mobileOpen ? ' is-open' : ''}`} id="mobile-nav" aria-label="Mobile navigation"><a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a><a href="#story" onClick={() => setMobileOpen(false)}>Our story</a><a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a><a href="#visit" onClick={() => setMobileOpen(false)}>Visit us</a></nav>
    </header>

    <main id="top">
      <section className="hero" aria-label="Featured food and cafe moments">
        <div className="hero-media" ref={mediaRef}>
          <img key={activeSlide.src} className="hero-asset" src={activeSlide.src} alt={activeSlide.alt} />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-copy"><span className="eyebrow">{activeSlide.eyebrow}</span><h1>{activeSlide.title}</h1><p>{activeSlide.text}</p><div className="feature-price"><span>{activeSlide.label}</span><strong>{activeSlide.price}</strong></div><a className="hero-link" href="#menu">Browse the full menu <span aria-hidden="true">↗</span></a></div>
          <div className="hero-controls"><button className="round-control" type="button" onClick={() => goToSlide(currentSlide - 1)} aria-label="Previous featured item">←</button><div className="slide-count" aria-live="polite"><span>{String(currentSlide + 1).padStart(2, '0')}</span><span className="count-rule" /><span>0{slides.length}</span></div><button className="round-control" type="button" onClick={() => goToSlide(currentSlide + 1)} aria-label="Next featured item">→</button><button className="round-control pause-control" type="button" onClick={togglePause} aria-label={pauseLabel} aria-pressed={isPaused}>{isPaused ? '▶' : '⏸'}</button></div>
        </div>
        <div className="hero-progress" aria-label="Choose featured item">{slides.map((slide, index) => <button key={slide.src} type="button" className={`progress-dot${index === currentSlide ? ' is-active' : ''}`} onClick={() => goToSlide(index)} aria-label={`Show featured item ${index + 1}`} aria-pressed={index === currentSlide} />)}</div>
        <a className="scroll-cue" href="#menu"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
      </section>

      <section className="intro-band" id="story"><SectionLabel number="01">Our table</SectionLabel><div className="intro-grid"><h2>A warm welcome,<br /><em>served daily.</em></h2><div className="intro-copy"><p>Testimony Cafe is your neighbourhood hotel cafe in Kasarani — a place for a quick plate, a bright juice, or the long catch-up that turns into dinner.</p><p>We keep the room easy, the portions generous, and the welcome genuine. Come for the food. Stay for the feeling.</p><a className="text-link" href="#visit">Get to know us <span>↗</span></a></div></div><div className="intro-stats"><div><strong>7</strong><span>ways to<br />build a plate</span></div><div><strong>100%</strong><span>fresh juice<br />no added sugar</span></div><div><strong>1</strong><span>good reason<br />to come back</span></div></div></section>

      <section className="menu-section" id="menu"><div className="section-heading"><SectionLabel number="02">Digital menu</SectionLabel><h2>Pick your<br /><em>kind of hungry.</em></h2><p>Real prices from the menu at the cafe, so you can decide before you arrive.</p></div><nav className="menu-tabs" aria-label="Menu categories">{menu.map((category) => <button key={category.id} type="button" className={category.id === activeCategory ? 'is-active' : ''} onClick={() => setActiveCategory(category.id)} aria-pressed={category.id === activeCategory}>{category.label}</button>)}</nav><div className="menu-panel" aria-live="polite"><div className="menu-panel-head"><span className="eyebrow">{activeMenu.kicker}</span><h3>{activeMenu.intro}</h3></div><div className="menu-items">{activeMenu.items.map(([name, price], index) => <div className="menu-item" key={`${name}-${index}`}><span>{name}</span><span className="menu-dots" /><strong>{price}</strong></div>)}</div><div className="menu-note">Prices shown in Kenyan shillings, exactly as listed on the cafe menu.</div></div></section>

      <section className="gallery-section" id="gallery"><div className="gallery-head"><div><SectionLabel number="03">From the cafe</SectionLabel><h2>See you<br /><em>at the table.</em></h2></div><p>Real plates, real people, real neighbourhood energy.</p></div><div className="gallery-grid">{gallery.map(([image, caption, tag], index) => <figure className={`gallery-card gallery-${index + 1}`} key={image}><img src={`${ASSET}${image}`} alt={caption} /><figcaption><span>{String(index + 1).padStart(2, '0')}</span><strong>{caption}</strong><small>{tag}</small></figcaption></figure>)}</div></section>

      <section className="testimonial-section" id="testimonials"><div className="testimonial-video"><video key={testimonialVideos[testimonialIndex].src} autoPlay muted loop playsInline controls aria-label={testimonialVideos[testimonialIndex].title}><source src={testimonialVideos[testimonialIndex].src} type="video/mp4" /></video><div className="testimonial-count"><span>{String(testimonialIndex + 1).padStart(2, '0')}</span><span>/ {String(testimonialVideos.length).padStart(2, '0')}</span></div></div><div className="testimonial-copy"><SectionLabel number="04">Guest stories</SectionLabel><blockquote>“{testimonialVideos[testimonialIndex].quote}”</blockquote><p>{testimonialVideos[testimonialIndex].description}</p><h3>{testimonialVideos[testimonialIndex].title}</h3><div className="testimonial-controls"><button type="button" onClick={() => setTestimonialIndex((index) => (index - 1 + testimonialVideos.length) % testimonialVideos.length)} aria-label="Previous guest story">←</button>{testimonialVideos.map((video, index) => <button key={video.src} type="button" className={index === testimonialIndex ? 'is-active' : ''} onClick={() => setTestimonialIndex(index)} aria-label={`Show guest story ${index + 1}`} aria-pressed={index === testimonialIndex} />)}<button type="button" onClick={() => setTestimonialIndex((index) => (index + 1) % testimonialVideos.length)} aria-label="Next guest story">→</button></div></div></section>

      <section className="visit-section" id="visit"><div className="visit-photo"><div className="visit-photo-grid"><figure><img src={`${ASSET}guest-testimonial.jpeg`} alt="A smiling guest giving two thumbs up at Testimony Cafe" /><figcaption>Leave smiling</figcaption></figure><figure><img src={`${ASSET}venue-inside.jpeg`} alt="Inside the warm, casual dining room at Testimony Cafe" /><figcaption>Inside Testimony Cafe</figcaption></figure></div><div className="photo-caption"><span>Come hungry</span><span>Leave smiling</span></div></div><div className="visit-copy"><SectionLabel number="05">Find us</SectionLabel><p className="visit-kicker">The best part of the day<br />is closer than you think.</p><h2>Come hungry.<br /><em>Leave smiling.</em></h2><p className="visit-body">Find us in Kasarani, Nairobi. Walk in for a quick lunch or make a proper evening of it — there is always a seat, a cold drink, and something good on the way.</p><div className="visit-actions"><a className="map-button" href="https://maps.app.goo.gl/td7ZCNeRQx5hRbhT8" target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a><a className="whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div><div className="visit-details"><div><span>Location</span><strong>Kasarani, Nairobi</strong></div><div><span>Best for</span><strong>Lunch · Dinner · Catch-ups</strong></div></div><div className="map-card"><iframe title="Testimony Cafeteria location map" src="https://www.google.com/maps?q=-1.2309179,36.9245861&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><Brand footer /><p>Come for the plate.<br />Stay for the testimony.</p></div><nav className="footer-links" aria-label="Footer navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#gallery">Gallery</a><a href="#visit">Visit us</a><a href="https://maps.app.goo.gl/td7ZCNeRQx5hRbhT8" target="_blank" rel="noreferrer">Google Maps ↗</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://www.instagram.com/testimony_cafeteria/" target="_blank" rel="noreferrer">Instagram ↗</a></nav><div className="footer-meta"><span>© 2026 Testimony Cafe</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
