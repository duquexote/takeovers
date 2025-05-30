"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  loading?: 'eager' | 'lazy';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  
  // Gera um placeholder blur data URL para imagens sem um fornecido
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==';
  
  // Carrega a imagem apenas quando estiver no viewport
  useEffect(() => {
    // Se a imagem for prioritária, carregue imediatamente
    if (priority) {
      setIsVisible(true);
      return;
    }
    
    // Caso contrário, use Intersection Observer para carregar quando visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' }); // Carrega a imagem 200px antes de entrar no viewport
    
    // Elemento para observar
    const element = document.getElementById(`image-container-${src.replace(/\W/g, '')}`); 
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [src, priority]);
  
  // Função para lidar com erros de carregamento de imagem
  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };
  
  return (
    <div 
      id={`image-container-${src.replace(/\W/g, '')}`}
      className={`relative overflow-hidden ${className} ${isLoading ? 'bg-gray-100 animate-pulse' : ''}`}
    >
      {(isVisible || priority) && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          loading={loading}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={() => setIsLoading(false)}
          onError={handleError}
        />
      )}
      
      {/* Fallback para erros de carregamento */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span>{alt.charAt(0).toUpperCase()}</span>
        </div>
      )}
    </div>
  );
}
