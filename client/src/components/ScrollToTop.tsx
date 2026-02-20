import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation(); // tracks current route

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top on route change
  }, [location]);

  return null;
}