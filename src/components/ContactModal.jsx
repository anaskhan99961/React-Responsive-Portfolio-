import { useState } from 'react';

function ContactModal({ isOpen, onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
      setShowSuccess(false);
      e.target.reset();
    }, 3000);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setShowSuccess(false);
    }
  };

  return (
    <div
      className={`modal ${isOpen ? 'active' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="close-modal"
          onClick={() => {
            onClose();
            setShowSuccess(false);
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {!showSuccess ? (
          <div id="contactForm">
            <h3 id="modal-title">Let&apos;s Work Together</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        ) : (
          <div id="formSuccess" className="form-success active">
            <div className="success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Thank you for reaching out. I&apos;ll get back to you soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
