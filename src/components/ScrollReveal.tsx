import React, { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    animation?: "reveal-up" | "reveal-right" | "reveal-left" | "reveal-zoom" | "reveal-blur";
    delay?: string;
    className?: string;
    threshold?: number;
    once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = "reveal-up",
    delay = "",
    className = "",
    threshold = 0.1,
    once = true,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    entry.target.classList.remove("visible");
                }
            },
            { threshold }
        );

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

    return (
        <div
            ref={elementRef}
            className={`reveal ${animation} ${delay} ${className}`}
        >
            {children}
        </div>
    );
};
