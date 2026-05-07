import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { id: "/", label: "Home" },
  { id: "/services", label: "Services" },
  { id: "/about", label: "About" },
  { id: "/leadership", label: "Leadership" },
  { id: "/portfolio", label: "Portfolio" },
  { id: "/contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="brand-link">
            <img
              src={logo}
              alt="Samadhai Technologies logo"
              className="brand-logo"
            />
            <span className="brand-name">Samadhai Technologies</span>
          </Link>
        </div>
        <nav className="navbar-center" aria-label="Primary">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.id} 
                  className={`nav-link ${location.pathname === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-right">
          <Link to="/contact" className="button-primary">
            Contact Us <span className="button-arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
};


