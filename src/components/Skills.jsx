const SKILLS = [
  {
    icon: '⚛️',
    title: 'Frontend Development',
    description: 'Crafting responsive and interactive user interfaces with modern frameworks and libraries',
    tags: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    description: 'Building robust server-side applications and RESTful APIs with modern tools',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    icon: '🐍',
    title: 'Python Ecosystem',
    description: 'Exploring backend frameworks and building scalable applications',
    tags: ['Django', 'Flask', 'FastAPI', 'Python'],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Diving into artificial intelligence and machine learning concepts',
    tags: ['Machine Learning', 'AI', 'Data Science'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    description: 'Designing and querying relational and document databases for scalable applications',
    tags: ['MongoDB', 'PostgreSQL', 'SQL', 'Prisma'],
  },
  {
    icon: '🛠️',
    title: 'DevOps & Tools',
    description: 'Version control, CI/CD, and deployment workflows for reliable shipping',
    tags: ['Git', 'Vercel', 'Docker', 'GitHub Actions'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-header fade-in">
        <div className="section-label">💎 Expertise</div>
        <h2 className="section-title">Tech Stack & Skills</h2>
        <p className="section-description">A comprehensive toolkit for building modern web applications</p>
      </div>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill.title} className="skill-card fade-in">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
