import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../assets/Logo.png";
import "./Layout.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${menuOpen ? 'menu-open' : ''}`}>
      <header className="text-white py-3">
        <nav className="navbar">
          <div className="menu-toggle-container">
            <button className="menu-toggle" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
            <img src={logo} alt="Logo" className="logo-small" />
          </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
            <li className="logo"><img src={logo} alt="Logo" /></li>
            <li><Link to="/sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer className="footer bg-dark text-white py-4">
        <div className="container d-flex justify-content-between">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-white">©2024 Mantillo</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-white" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
