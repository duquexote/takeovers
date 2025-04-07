"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PricingSection() {
  const [hasMaintenance, setHasMaintenance] = useState(true);
  
  return (
    <section id="planos" className="bg-gray-50 py-20">
      <div className="container-section">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section"
          >
            Invista uma vez, colha todos os dias.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section mx-auto"
          >
            Você paga apenas uma ativação e decide se quer suporte contínuo.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="bg-gray-900 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
              <p className="text-sm opacity-80">Ativação inicial</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 1.997</span>
                <span className="text-gray-500 ml-2">pagamento único</span>
              </div>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Configuração completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Treinamento personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Integração com WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Integração com Calendário</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Suporte por 30 dias</span>
                </li>
              </ul>
              
              <a href="#contato" className="btn-primary w-full">
                Quero este plano
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-xs py-1 px-3 rounded-bl-lg">
              Recomendado
            </div>
            
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Plano Completo</h3>
              <p className="text-sm opacity-80">Ativação + manutenção</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 1.997</span>
                <span className="text-gray-500 ml-2">+ R$ 197/mês</span>
              </div>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Tudo do plano básico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Atualizações constantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Melhorias mensais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>Consultoria de optimização</span>
                </li>
              </ul>
              
              <a href="#contato" className="btn-primary w-full">
                Quero este plano
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Todos os planos incluem implantação em até 48h e treinamento completo.
            <br />Garantia de 14 dias ou seu dinheiro de volta.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 