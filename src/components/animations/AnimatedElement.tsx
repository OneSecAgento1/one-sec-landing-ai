
import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
