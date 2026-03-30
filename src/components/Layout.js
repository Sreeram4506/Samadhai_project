import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ScrollToTop } from "./ScrollToTop";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { AboutPage } from "../pages/AboutPage";
import { LeadershipPage } from "../pages/LeadershipPage";
import { PortfolioPage } from "../pages/PortfolioPage";
import { ContactPage } from "../pages/ContactPage";
import { Footer } from "./Footer";
export const Layout = () => {
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsxs("div", { className: "page-root", children: [_jsx(Navbar, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/leadership", element: _jsx(LeadershipPage, {}) }), _jsx(Route, { path: "/portfolio", element: _jsx(PortfolioPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }) }), _jsx(Footer, {})] })] }));
};
