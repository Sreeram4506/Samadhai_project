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
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  React.useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className="navbar" style={{ zIndex: 1000 }}>
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link
            to="/"
            className="brand-link"
            onClick={() => {
              closeMenu();
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="Samadhai Technologies logo"
              className="brand-logo"
            />
            <span className="brand-name">Samadhai Technologies</span>
          </Link>
        </div>

        <nav className="navbar-center" aria-label="Primary">
          <ul
            id="primary-navigation"
            className={`nav-list ${isOpen ? "open" : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  className={`nav-link ${location.pathname === item.id ? "active" : ""}`}
                  onClick={() => {
                    closeMenu();
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="mobile-only-contact">
              <Link
                to="/contact"
                className="button-primary mobile-menu-cta"
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                Contact Now <span className="button-arrow">&rarr;</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-right">
          <Link
            to="/contact"
            className="button-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Now <span className="button-arrow">&rarr;</span>
          </Link>
        </div>

        <button
          className={`mobile-menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
