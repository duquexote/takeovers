"use client";

import dynamic from 'next/dynamic';

// Importação dinâmica do framer-motion para reduzir o JavaScript inicial
// Usando uma abordagem que é compatível com os tipos do TypeScript e otimiza o carregamento

// Criação de um objeto com todos os componentes motion necessários
const MotionComponents = {
  div: dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: true }),
  a: dynamic(() => import('framer-motion').then((mod) => mod.motion.a), { ssr: true }),
  // Adicione outros componentes motion conforme necessário
};

export default MotionComponents;
