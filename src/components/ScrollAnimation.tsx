import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string; // Para permitir classes extras se precisar
}

export function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se o elemento apareceu na tela (mesmo que 10%)
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Opcional: Para de observar depois que animou a primeira vez (economiza performance)
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold: 0.1 } // 0.1 significa que 10% do elemento precisa estar visível
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`
        ${className}
        transition-all duration-700 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'}
      `}
    >
      {children}
    </div>
  );
}
