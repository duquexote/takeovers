"use client";

import { ComponentType, lazy, Suspense, useEffect, useState, ReactNode } from 'react';

type ComponentImport = { default: ComponentType<unknown> };

interface DynamicImportProps {
  importFn: () => Promise<ComponentImport>;
  fallback?: ReactNode;
  onLoad?: () => void;
  loadingCondition?: boolean;
  loadingDelay?: number;
}

/**
 * Componente para importar dinamicamente outros componentes
 * Reduz o JavaScript inicial carregando componentes sob demanda
 */
export default function DynamicImport({
  importFn,
  fallback = null,
  onLoad,
  loadingCondition = true,
  loadingDelay = 0
}: DynamicImportProps) {
  const [Component, setComponent] = useState<ComponentType<unknown> | null>(null);
  const [shouldLoad, setShouldLoad] = useState(loadingCondition);

  useEffect(() => {
    // Se a condição de carregamento for falsa, não carrega o componente
    if (!loadingCondition) return;
    
    // Aplica um atraso opcional no carregamento
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, loadingDelay);
    
    return () => clearTimeout(timer);
  }, [loadingCondition, loadingDelay]);

  useEffect(() => {
    // Só carrega o componente quando shouldLoad for true
    if (!shouldLoad) return;
    
    let isMounted = true;
    
    const loadComponent = async () => {
      try {
        const importedComponent = await importFn();
        
        if (isMounted) {
          setComponent(() => importedComponent.default);
          if (onLoad) onLoad();
        }
      } catch (error) {
        console.error('Error loading dynamic component:', error);
      }
    };
    
    loadComponent();
    
    return () => {
      isMounted = false;
    };
  }, [importFn, onLoad, shouldLoad]);

  // Se o componente ainda não foi carregado, mostra o fallback
  if (!Component) {
    return <>{fallback}</>;
  }

  // Renderiza o componente carregado dinamicamente
  return <Component />;
}

/**
 * Versão do DynamicImport que usa Suspense para melhor integração com o React
 */
export function DynamicImportWithSuspense({
  importFn,
  fallback = null,
  onLoad,
  loadingCondition = true,
  loadingDelay = 0
}: DynamicImportProps) {
  const [shouldLoad, setShouldLoad] = useState(loadingCondition);
  const [LazyComponent, setLazyComponent] = useState<ComponentType<unknown> | null>(null);

  useEffect(() => {
    if (!loadingCondition) return;
    
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, loadingDelay);
    
    return () => clearTimeout(timer);
  }, [loadingCondition, loadingDelay]);

  useEffect(() => {
    if (!shouldLoad) return;
    
    // Cria um componente lazy que será carregado sob demanda
    setLazyComponent(() => lazy(importFn));
    
    if (onLoad) {
      // Notifica quando o componente começar a carregar
      onLoad();
    }
  }, [importFn, onLoad, shouldLoad]);

  if (!LazyComponent || !shouldLoad) {
    return <>{fallback}</>;
  }

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}
