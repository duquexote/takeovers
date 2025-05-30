"use client";

import { useEffect } from 'react';

interface OptimizedScriptProps {
  src: string;
  strategy?: 'afterInteractive' | 'lazyOnload';
  onLoad?: () => void;
  id?: string;
}

/**
 * Componente para carregar scripts de forma otimizada
 * - afterInteractive: Carrega após a página se tornar interativa (padrão)
 * - lazyOnload: Carrega quando o navegador estiver ocioso
 */
export default function OptimizedScript({
  src,
  strategy = 'afterInteractive',
  onLoad,
  id
}: OptimizedScriptProps) {
  useEffect(() => {
    // Não fazer nada durante SSR
    if (typeof window === 'undefined') return;

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      if (id) script.id = id;
      
      script.onload = () => {
        if (onLoad) onLoad();
      };
      
      document.body.appendChild(script);
    };

    if (strategy === 'afterInteractive') {
      // Carrega após a página se tornar interativa
      if (document.readyState === 'complete') {
        loadScript();
      } else {
        window.addEventListener('load', loadScript);
        return () => window.removeEventListener('load', loadScript);
      }
    } else if (strategy === 'lazyOnload') {
      // Carrega quando o navegador estiver ocioso
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadScript);
      } else {
        // Fallback para navegadores que não suportam requestIdleCallback
        setTimeout(loadScript, 3000);
      }
    }
  }, [src, strategy, onLoad, id]);

  return null;
}
