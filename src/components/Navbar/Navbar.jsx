
import './Navbar.css'
const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
  };

  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <div id="menu" className="menu">
        <a href="#home" className="menu-item">Home</a>
        <a href="#about" className="menu-item">About</a>
        <a href="#services" className="menu-item">Services</a>
        <a href="#contact" className="menu-item">Contact</a>
      </div>
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
