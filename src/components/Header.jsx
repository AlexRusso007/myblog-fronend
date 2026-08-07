import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="site-header">
      <Link to="/" className="site-brand">Lara Smith</Link>
      <div className="site-links">
        <Link to="/blog">Postlar</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;