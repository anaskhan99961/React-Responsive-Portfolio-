const EDUCATION = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Sindh Agriculture University',
    year: '2024 – 2027',
    description: 'Focus on software development, data structures, and web technologies.',
  },
  {
    degree: 'Full Stack Web Development',
    school: 'Online Course / Bootcamp',
    year: '2026',
    description: 'MERN stack, REST APIs, and modern frontend frameworks.',
  },
];

function Education() {
  return (
    <section id="education">
      <div className="section-header fade-in">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-description">
          Degrees, courses, and continuous learning
        </p>
      </div>
      <div className="education-grid">
        {EDUCATION.map((item) => (
          <div key={item.degree + item.school} className="education-card fade-in">
            <div className="education-year">{item.year}</div>
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-school">{item.school}</p>
            {item.description && (
              <p className="education-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
