"use client";

import { ReactNode, useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  priority?: boolean;
  delay?: number;
  onVisible?: () => void;
  id?: string;
}

/**
 * Componente para carregamento preguiçoso de seções
 * Só renderiza o conteúdo quando estiver próximo ou dentro da viewport
 */
export default function LazySection({
  children,
  placeholder,
  threshold = 0.1,
  rootMargin = '200px 0px',
  className = '',
  priority = false,
  delay = 0,
  onVisible,
  id,
}: LazySectionProps) {
  const [loaded, setLoaded] = useState(priority);
  const [rendered, setRendered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Configuração do observador de interseção
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
    // Desativa o observador se a seção for prioritária
    skip: priority,
  });

  // Efeito para carregar o conteúdo quando estiver visível
  useEffect(() => {
    // Se for prioritário, carrega imediatamente
    if (priority && !loaded) {
      setLoaded(true);
      return;
    }
    
    // Se estiver visível e não estiver carregado
    if (inView && !loaded) {
      // Se houver um atraso, espera antes de carregar
      if (delay > 0) {
        timerRef.current = setTimeout(() => {
          setLoaded(true);
          if (onVisible) onVisible();
        }, delay);
      } else {
        setLoaded(true);
        if (onVisible) onVisible();
      }
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inView, loaded, priority, delay, onVisible]);
  
  // Efeito para renderizar o conteúdo após o carregamento
  useEffect(() => {
    if (loaded && !rendered) {
      // Pequeno atraso para garantir que o DOM foi atualizado
      const timer = setTimeout(() => {
        setRendered(true);
      }, 10);
      
      return () => clearTimeout(timer);
    }
  }, [loaded, rendered]);

  // Otimiza a renderização usando requestAnimationFrame
  useEffect(() => {
    if (loaded && !rendered) {
      requestAnimationFrame(() => {
        setRendered(true);
      });
    }
  }, [loaded, rendered]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${loaded ? 'lazy-loaded' : 'lazy-loading'}`}
      id={id}
      data-loaded={loaded ? 'true' : 'false'}
    >
      {loaded ? children : placeholder}
    </div>
  );
}

/**
 * Componente para carregamento preguiçoso baseado em eventos de interação do usuário
 */
export function InteractionLazySection({
  children,
  placeholder,
  className = '',
  delay = 1000,
  id,
}: Omit<LazySectionProps, 'threshold' | 'rootMargin' | 'priority'>) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Lista de eventos que indicam interação do usuário
    const interactionEvents = ['click', 'scroll', 'keydown', 'mousemove', 'touchstart'];
    
    // Função para carregar o conteúdo após interação
    const handleInteraction = () => {
      // Remove todos os event listeners
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
      
      // Carrega o conteúdo após um pequeno atraso
      setTimeout(() => {
        setLoaded(true);
      }, delay);
    };
    
    // Adiciona event listeners para todos os eventos de interação
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });
    
    // Também carrega após um tempo, mesmo sem interação
    const timer = setTimeout(() => {
      setLoaded(true);
      
      // Remove todos os event listeners
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    }, 5000);
    
    return () => {
      // Limpa o timeout e remove os event listeners
      clearTimeout(timer);
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, [delay]);
  
  return (
    <div 
      className={`${className} ${loaded ? 'interaction-loaded' : 'interaction-loading'}`}
      id={id}
      data-loaded={loaded ? 'true' : 'false'}
    >
      {loaded ? children : placeholder}
    </div>
  );
}
