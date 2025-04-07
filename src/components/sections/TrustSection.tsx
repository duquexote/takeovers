"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const trustPoints = [
  { title: '500+', description: 'Clientes atendidos' },
  { title: '99%', description: 'Satisfação dos usuários' },
  { title: '24/7', description: 'Disponibilidade contínua' },
  { title: '48h', description: 'Implementação rápida' },
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [counted, setCounted] = useState(false);
  
  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true);
    }
  }, [isInView, counted]);

  return (
    <section id="confianca" className="bg-gray-50 py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section"
          >
            Expertise real em automações.
          </motion.h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <motion.h3 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              >
                {point.title}
              </motion.h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 space-y-6 max-w-3xl mx-auto text-center"
        >
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Por que você pode confiar na CIA?</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Especialistas em IA e atendimento digital</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Criado por agência focada em performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Onboarding completo com suporte</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Treinamento personalizado para seu negócio</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 