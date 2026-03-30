import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export const ScrollReveal = ({ children, animation = "reveal-up", delay = "", className = "", threshold = 0.1, once = true, }) => {
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (once)
                    observer.unobserve(entry.target);
            }
            else if (!once) {
                entry.target.classList.remove("visible");
            }
        }, { threshold });
        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, once]);
    return (_jsx("div", { ref: elementRef, className: `reveal ${animation} ${delay} ${className}`, children: children }));
};
