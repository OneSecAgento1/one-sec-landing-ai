
import { useState, useEffect, useRef } from 'react';

// Hook per rilevare quando un elemento diventa visibile nel viewport
export function useIntersectionObserver(
  options = { threshold: 0.1, rootMargin: '0px' }
) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible] as const;
}
