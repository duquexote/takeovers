"use client";

import { useEffect, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  id?: string;
}

export default function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1,
  id
}: LazySectionProps) {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section 
      ref={ref} 
      className={className}
      id={id}
    >
      {(inView || !isClient) && children}
    </section>
  );
}
