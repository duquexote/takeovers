"use client";

import { useEffect } from 'react';

interface OptimizedFontProps {
  fontFamily: string;
  fontUrl: string;
  fontWeight?: string | number;
  fontStyle?: string;
  fontDisplay?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  preload?: boolean;
}

/**
 * Componente para otimizar o carregamento de fontes
 * Usa a Font Loading API para melhorar o desempenho
 */
export default function OptimizedFont({
  fontFamily,
  fontUrl,
  fontWeight = 'normal',
  fontStyle = 'normal',
  fontDisplay = 'swap',
  preload = false
}: OptimizedFontProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cria um elemento de estilo para a fonte
    const fontFace = new FontFace(
      fontFamily,
      `url(${fontUrl})`,
      {
        weight: String(fontWeight),
        style: fontStyle,
        display: fontDisplay
      }
    );

    // Carrega a fonte
    fontFace.load()
      .then(loadedFontFace => {
        // Adiciona a fonte ao registro de fontes do documento
        document.fonts.add(loadedFontFace);
        
        // Adiciona uma classe ao body para indicar que a fonte foi carregada
        document.body.classList.add(`font-loaded-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`);
      })
      .catch(error => {
        console.error(`Erro ao carregar a fonte ${fontFamily}:`, error);
      });

    // Adiciona um link preload para a fonte se necessário
    if (preload) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = fontUrl;
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2'; // Ajuste conforme o formato da fonte
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);

      return () => {
        // Remove o link preload quando o componente for desmontado
        document.head.removeChild(preloadLink);
      };
    }
  }, [fontFamily, fontUrl, fontWeight, fontStyle, fontDisplay, preload]);

  // Este componente não renderiza nada no DOM
  return null;
}

/**
 * Componente para pré-carregar fontes críticas
 */
export function PreloadFonts() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Tipo para as fontes críticas
    interface CriticalFont {
      family: string;
      url: string;
      weight?: string;
    }
    
    // Lista de fontes críticas para pré-carregar
    const criticalFonts: CriticalFont[] = [
      // Adicione aqui as fontes críticas do seu site
      // Exemplo: { family: 'Inter', url: '/fonts/Inter.woff2', weight: '400' }
    ];
    
    // Pré-carrega todas as fontes críticas
    criticalFonts.forEach(font => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = font.url;
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    });
    
    return () => {
      // Remove todos os links de preload quando o componente for desmontado
      criticalFonts.forEach(font => {
        const link = document.querySelector(`link[rel="preload"][href="${font.url}"]`);
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);
  
  return null;
}
