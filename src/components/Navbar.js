import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const toggleMenu = () => setIsOpen((open) => !open);
    const closeMenu = () => setIsOpen(false);
    React.useEffect(() => {
        closeMenu();
    }, [location.pathname]);
    return (_jsx("header", { className: "navbar", style: { zIndex: 1000 }, children: _jsxs("div", { className: "navbar-inner", children: [_jsx("div", { className: "navbar-left", children: _jsxs(Link, { to: "/", className: "brand-link", onClick: () => {
                            closeMenu();
                            window.scrollTo(0, 0);
                        }, children: [_jsx("img", { src: logo, alt: "Samadhai Technologies logo", className: "brand-logo" }), _jsx("span", { className: "brand-name", children: "Samadhai Technologies" })] }) }), _jsx("nav", { className: "navbar-center", "aria-label": "Primary", children: _jsxs("ul", { id: "primary-navigation", className: `nav-list ${isOpen ? "open" : ""}`, children: [NAV_ITEMS.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.id, className: `nav-link ${location.pathname === item.id ? "active" : ""}`, onClick: () => {
                                        closeMenu();
                                        window.scrollTo(0, 0);
                                    }, children: item.label }) }, item.id))), _jsx("li", { className: "mobile-only-contact", children: _jsxs(Link, { to: "/contact", className: "button-primary mobile-menu-cta", onClick: () => {
                                        closeMenu();
                                        window.scrollTo(0, 0);
                                    }, children: ["Contact Now ", _jsx("span", { className: "button-arrow", children: "\u2192" })] }) })] }) }), _jsx("div", { className: "navbar-right", children: _jsxs(Link, { to: "/contact", className: "button-primary", onClick: () => window.scrollTo(0, 0), children: ["Contact Now ", _jsx("span", { className: "button-arrow", children: "\u2192" })] }) }), _jsxs("button", { className: `mobile-menu-toggle ${isOpen ? "open" : ""}`, onClick: toggleMenu, "aria-label": "Toggle navigation menu", "aria-expanded": isOpen, "aria-controls": "primary-navigation", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })] }) }));
};
