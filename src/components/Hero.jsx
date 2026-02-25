import { useRef, useEffect } from 'react';

function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);
    }
    return () => {
      container.innerHTML = '';
    };
  }, []);

  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="home">
      <div className="particles" ref={particlesRef} />
      <div className="hero-content">
        <div className="hero-label">Available for Work</div>
        <h1>Anas Khan</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Crafting elegant digital experiences with modern web technologies. Specializing in the MERN stack while exploring Python frameworks and diving deep into AI/ML innovations.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary" onClick={scrollToSection}>View Projects</a>
          <a href="#contact" className="btn btn-secondary" onClick={scrollToSection}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
