"use client";

import Script from 'next/script';
import { ReactNode, useEffect, useState } from 'react';

// Estratégias suportadas pelo Next.js
type NextScriptStrategy = 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';

// Nossa estratégia personalizada inclui 'worker'
type CustomScriptStrategy = 'worker';

// Combinação de todas as estratégias
type ScriptStrategy = NextScriptStrategy | CustomScriptStrategy;

interface OptimizedScriptProps {
  src?: string;
  id?: string;
  strategy?: ScriptStrategy;
  onLoad?: () => void;
  onError?: () => void;
  children?: ReactNode;
  defer?: boolean;
  async?: boolean;
  dangerouslySetInnerHTML?: { __html: string };
  nonce?: string;
}

/**
 * Componente para carregar scripts de forma otimizada com várias estratégias
 * - beforeInteractive: Carrega antes da página se tornar interativa
 * - afterInteractive: Carrega após a página se tornar interativa
 * - lazyOnload: Carrega quando o navegador estiver ocioso ou após interação do usuário
 * - worker: Tenta carregar o script em um web worker para reduzir o impacto na thread principal
 */
export default function OptimizedScript({
  src,
  id,
  strategy = 'lazyOnload',
  onLoad,
  onError,
  children,
  defer = true,
  async = true,
  dangerouslySetInnerHTML,
  nonce
}: OptimizedScriptProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Para estratégia worker, usamos um hook personalizado
  useEffect(() => {
    if (strategy !== 'worker' || !src) return;
    
    // Verifica se Web Workers são suportados
    if (typeof window === 'undefined' || typeof Worker === 'undefined') return;
    
    try {
      // Cria um blob com código para carregar o script em um worker
      const workerCode = `
        self.importScripts('${src}');
        self.onmessage = function() {
          self.postMessage('loaded');
        };
      `;
      
      const blob = new Blob([workerCode], { type: 'application/javascript' });
      const workerUrl = URL.createObjectURL(blob);
      const worker = new Worker(workerUrl);
      
      worker.onmessage = () => {
        if (onLoad) onLoad();
      };
      
      worker.onerror = () => {
        // Fallback para carregamento normal
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (id) script.id = id;
        
        script.onload = () => {
          if (onLoad) onLoad();
        };
        
        script.onerror = () => {
          if (onError) onError();
        };
        
        document.body.appendChild(script);
        
        URL.revokeObjectURL(workerUrl);
      };
      
      // Inicia o worker
      worker.postMessage('start');
      
      return () => {
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
      };
    } catch (error) {
      console.error('Error loading script in worker:', error);
      
      // Fallback para carregamento normal
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      if (id) script.id = id;
      
      script.onload = () => {
        if (onLoad) onLoad();
      };
      
      script.onerror = () => {
        if (onError) onError();
      };
      
      document.body.appendChild(script);
    }
  }, [src, id, strategy, onLoad, onError]);
  
  // Para scripts com lazyOnload, carrega apenas quando o usuário interage com a página
  useEffect(() => {
    if (strategy !== 'lazyOnload' || !src || isVisible) return;
    if (typeof window === 'undefined') return;
    
    // Eventos que indicam interação do usuário
    const interactionEvents = ['click', 'scroll', 'keydown', 'mousemove', 'touchstart'];
    
    const handleInteraction = () => {
      setIsVisible(true);
      // Remove os event listeners após a primeira interação
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
    
    // Adiciona event listeners para interação do usuário
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });
    
    // Também carrega após um tempo, mesmo sem interação
    const timer = setTimeout(handleInteraction, 5000);
    
    return () => {
      clearTimeout(timer);
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, [strategy, src, isVisible]);
  
  // Se for worker, o script já foi carregado no useEffect
  if (strategy === 'worker') {
    return null;
  }
  
  // Para lazyOnload, só renderiza o componente Script quando houver interação
  if (strategy === 'lazyOnload' && !isVisible) {
    return null;
  }
  
  // Para outras estratégias, usa o componente Script do Next.js
  // Convertemos 'worker' para 'lazyOnload' já que o Next.js não suporta 'worker'
  const nextStrategy: NextScriptStrategy = strategy === 'worker' ? 'lazyOnload' : strategy as NextScriptStrategy;
  
  return (
    <Script
      id={id}
      src={src}
      strategy={nextStrategy}
      onLoad={onLoad}
      onError={onError}
      nonce={nonce}
      async={async}
      defer={defer}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Script>
  );
}
