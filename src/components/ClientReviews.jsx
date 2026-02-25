const REVIEWS = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager, TechFlow',
    quote: 'Laiba delivered our dashboard on time with a clean, maintainable codebase. Communication was smooth and the result exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Founder, StartupLab',
    quote: 'Professional, responsive, and technically strong. She understood our vision and translated it into a fast, scalable web application. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO, DataDrive',
    quote: 'Outstanding full stack work. From API design to frontend UX, everything was well thought out. We will definitely work together again.',
    rating: 5,
  },
];

function ClientReviews() {
  return (
    <section id="reviews">
      <div className="section-header fade-in">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">Client Reviews</h2>
        <p className="section-description">
          What clients and collaborators say about working with me
        </p>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <div key={review.name} className="review-card fade-in">
            <div className="review-stars">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <blockquote className="review-quote">&ldquo;{review.quote}&rdquo;</blockquote>
            <div className="review-author">
              <strong>{review.name}</strong>
              <span className="review-role">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientReviews;
