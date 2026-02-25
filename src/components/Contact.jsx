function Contact({ onOpenModal }) {
  return (
    <section id="contact">
      <div className="section-header fade-in">
        <div className="section-label">📬 Contact</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-description">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button type="button" className="btn btn-primary" onClick={onOpenModal}>
          Get In Touch
        </button>
        <div className="social-links">
          <a href="https://github.com/anaskhan99961" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-anas-khan-817954249/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/anaskha84631891?s=21" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
