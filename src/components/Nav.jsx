function Nav({ scrolled }) {
  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="logo">AK</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={handleClick}>Home</a></li>
        <li><a href="#education" onClick={handleClick}>Education</a></li>
        <li><a href="#skills" onClick={handleClick}>Skills</a></li>
        <li><a href="#services" onClick={handleClick}>Services</a></li>
        <li><a href="#projects" onClick={handleClick}>Projects</a></li>
        <li><a href="#reviews" onClick={handleClick}>Reviews</a></li>
        <li><a href="#blog" onClick={handleClick}>Blog</a></li>
        
        <li><a href="#contact" onClick={handleClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
