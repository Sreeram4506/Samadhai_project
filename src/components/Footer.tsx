import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const handleQuickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-link">
              <span className="brand-name">Samadhai Technologies</span>
            </Link>
            <p className="footer-tagline">
              Engineering calm into complex systems. Thoughtful technology for a digital world.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={handleQuickLinkClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleQuickLinkClick}>About</Link></li>
              <li><Link to="/services" onClick={handleQuickLinkClick}>Services</Link></li>
              <li><Link to="/portfolio" onClick={handleQuickLinkClick}>Portfolio</Link></li>
              <li><Link to="/leadership" onClick={handleQuickLinkClick}>Leadership</Link></li>
              <li><Link to="/contact" onClick={handleQuickLinkClick}>Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p>Hitech City Hyderabad, Telangana 500081</p>
            <p>info@samadhaitechnologies.com</p>
            <p>+91 9573264575</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Samadhai Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
