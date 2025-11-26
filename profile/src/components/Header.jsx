function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="logo">
          B Bioco
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
