import { jsx as _jsx } from "react/jsx-runtime";
import { Hero } from "../components/Hero";
export const HomePage = () => {
    return (_jsx("div", { className: "page-root", children: _jsx("main", { children: _jsx("section", { id: "home", className: "hero-wrapper", children: _jsx(Hero, {}) }) }) }));
};
