import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
const scrollPageToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: "auto" });
};
export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (!("scrollRestoration" in window.history)) {
            return;
        }
        const previousScrollRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";
        return () => {
            window.history.scrollRestoration = previousScrollRestoration;
        };
    }, []);
    useLayoutEffect(() => {
        scrollPageToTop();
        const animationFrameId = window.requestAnimationFrame(scrollPageToTop);
        const timeoutId = window.setTimeout(scrollPageToTop, 0);
        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.clearTimeout(timeoutId);
        };
    }, [pathname]);
    return null;
};
