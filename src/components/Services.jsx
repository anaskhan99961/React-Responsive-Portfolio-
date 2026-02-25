const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern stacks. From landing pages to full-stack apps with React, Next.js, and Node.js.',
  },
  {
    icon: '⚡',
    title: 'API Development',
    description: 'RESTful and scalable APIs. Design, build, and document backends that integrate seamlessly with your frontend or mobile apps.',
  },
  {
    icon: '🎨',
    title: 'UI / UX Implementation',
    description: 'Pixel-perfect, responsive interfaces from design to code. Accessibility, performance, and clean component architecture.',
  },
  {
    icon: '🔧',
    title: 'Consulting & Maintenance',
    description: 'Code reviews, refactoring, and ongoing support. Help your existing projects stay modern, secure, and maintainable.',
  },
  {
    icon: '🗄️',
    title: 'Database Design & Integration',
    description: 'Schema design, migrations, and data layer setup. SQL and NoSQL with optimized queries and secure access patterns.',
  },
  {
    icon: '🚀',
    title: 'Deployment & DevOps',
    description: 'CI/CD pipelines, cloud hosting, and environment setup. Get your app live on Vercel, AWS, or your preferred platform.',
  },
];

function Services() {
  return (
    <section id="services">
      <div className="section-header fade-in">
        <div className="section-label">What I Offer</div>
        <h2 className="section-title">Services</h2>
        <p className="section-description">
          How I can help you build and grow your product
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((service) => (
          <div key={service.title} className="service-card fade-in">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
