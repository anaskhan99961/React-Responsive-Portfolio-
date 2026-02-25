const POSTS = [
  {
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Best practices for structure, error handling, and validation when building REST APIs that scale with your product.',
    date: 'March 15, 2025',
    slug: '#',
    tag: 'Backend',
  },
  {
    title: 'React Hooks: A Practical Guide to useState and useEffect',
    excerpt: 'How to manage state and side effects in functional components without the complexity of class lifecycles.',
    date: 'February 28, 2025',
    slug: '#',
    tag: 'Frontend',
  },
  {
    title: 'From Idea to Deploy: Full Stack Project Walkthrough',
    excerpt: 'End-to-end journey of building a full stack app: design, development, and deployment on Vercel.',
    date: 'February 10, 2025',
    slug: '#',
    tag: 'Full Stack',
  },
];

function BlogPosts() {
  return (
    <section id="blog">
      <div className="section-header fade-in">
        <div className="section-label">Writing</div>
        <h2 className="section-title">My Blog Posts</h2>
        <p className="section-description">
          Tutorials, tips, and thoughts on web development and beyond
        </p>
      </div>
      <div className="blog-grid">
        {POSTS.map((post) => (
          <article key={post.title} className="blog-card fade-in">
            <span className="blog-tag">{post.tag}</span>
            <h3 className="blog-title">
              <a href={post.slug}>{post.title}</a>
            </h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <time className="blog-date" dateTime={post.date}>{post.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogPosts;
