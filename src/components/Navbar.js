import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const location = useLocation();
    return (_jsx("header", { className: "navbar", children: _jsxs("div", { className: "navbar-inner", children: [_jsx("div", { className: "navbar-left", children: _jsxs(Link, { to: "/", className: "brand-link", children: [_jsx("img", { src: logo, alt: "Samadhai Technologies logo", className: "brand-logo" }), _jsx("span", { className: "brand-name", children: "Samadhai Technologies" })] }) }), _jsx("nav", { className: "navbar-center", "aria-label": "Primary", children: _jsx("ul", { className: "nav-list", children: NAV_ITEMS.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.id, className: `nav-link ${location.pathname === item.id ? 'active' : ''}`, children: item.label }) }, item.id))) }) }), _jsx("div", { className: "navbar-right", children: _jsxs(Link, { to: "/contact", className: "button-primary", children: ["Contact Us ", _jsx("span", { className: "button-arrow", children: "\u2192" })] }) })] }) }));
};
