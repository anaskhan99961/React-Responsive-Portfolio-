const PROJECTS = [
  {
    title: 'Password Manager',
    url: 'https://password-manager-azure-two.vercel.app/',
    tech: 'Full Stack Application',
    description: 'Secure password management system with encryption and user authentication',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'Linktree Clone',
    url: 'https://linktree-clone-wkrf.vercel.app/',
    tech: 'Modern Web App',
    description: 'Social media link aggregator with custom themes and analytics',
    tags: ['Next.js', 'MongoDB', 'API'],
  },
  {
    title: 'Country Finder',
    url: 'https://countryfinder-zeta.vercel.app/',
    tech: 'API Integration',
    description: 'Search and explore countries with detailed information and statistics',
    tags: ['React', 'REST API'],
  },
  {
    title: 'Recipe Book',
    url: 'https://recipe-book-eosin-kappa.vercel.app/',
    tech: 'API Integration',
    description: 'Search and explore recipes with detailed information and statistics',
    tags: ['React', 'REST API'],
  },
  {
    title: 'Bitlinks Clone',
    url: 'https://bitlinks-url-shortner-kdpt.vercel.app/',
    tech: 'URL Shortener',
    description: 'URL shortening service with analytics and custom short links',
    tags: ['React', 'REST API'],
  },
  {
    title: 'Todo List App',
    url: 'https://my-password-manager-pi.vercel.app/',
    tech: 'Task Management',
    description: 'Feature-rich todo application with local storage and filtering',
    tags: ['React', 'Hooks'],
  },
  {
    title: 'Calculator',
    url: 'https://calculator-app-ak1m.vercel.app/',
    tech: 'Interactive Tool',
    description: 'Modern calculator with scientific functions and history',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Weather Dashboard',
    url: 'https://example.com',
    tech: 'Frontend App',
    description: 'Real-time weather data with forecasts and location search',
    tags: ['React', 'API', 'CSS'],
  },
  {
    title: 'E-Commerce Storefront',
    url: 'https://example.com',
    tech: 'Full Stack',
    description: 'Product catalog, cart, and checkout flow with payment integration',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-header fade-in">
        <div className="section-label">🚀 Portfolio</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">A showcase of my latest work and experiments</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.title} className="project-card fade-in">
            <div className="project-header">
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <p className="project-tech">{project.tech}</p>
            </div>
            <div className="project-body">
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
