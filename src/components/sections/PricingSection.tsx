"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      <AnimatedBackground variant="grid" className="opacity-40" color="rgba(79, 70, 229, 0.4)" />
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section text-tech-dark"
          >
           Escolha o agente ideal para o seu negócio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section"
          >
            Soluções personalizadas para diferentes necessidades de automação
          </motion.p>
          
          <div className="mt-10 flex items-center justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <span className={`mr-3 font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensal</span>
              <div className="relative">
                <input 
                  type="checkbox" 
                  value="" 
                  className="sr-only peer" 
                  checked={isAnnual} 
                  onChange={() => setIsAnnual(!isAnnual)}
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </div>
              <span className={`ml-3 font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Semestral
              </span>
            </label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Agente Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
          >
            <div className="flex items-center mb-2">
            <span className="text-primary text-xl mr-2">🔹</span>
              <h3 className="text-xl font-bold text-gray-900">Agente Atendimento</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Ideal para quem quer automatizar dúvidas e interações simples.</p>
            
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center mb-1">
                <p className="text-sm line-through text-gray-400 mr-2">R$1000,00</p>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded">Implementação GRÁTIS</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">
                {isAnnual ? 'R$497' : 'R$697'}
                <span className="text-base font-normal text-gray-500">/mês</span>
              </p>
              {isAnnual && <p className="text-gray-500 mt-1">Plano Semestral</p>}
              {!isAnnual && <p className="text-gray-500 mt-1">Plano Mensal</p>}
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Agente de IA para interação via WhatsApp</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Responde perguntas frequentes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Envia links e contatos de setores</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Oferece suporte técnico básico</span>
              </li>
            </ul>
            
            <a href="#contato" className="btn-secondary text-center">
              Garantir Oferta
            </a>
          </motion.div>
          
          {/* Plano Profissional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-primary rounded-xl p-8 shadow-lg shadow-primary/10 flex flex-col relative bg-white z-10"
          >
            <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
              <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm">Mais Popular</span>
            </div>
            
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-xl mr-2">🟡</span>
              <h3 className="text-xl font-bold text-gray-900">Agente SDR ou Closer</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Foco total em conversão, qualificação e agendamento de vendas.</p>
            
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center mb-1">
                <p className="text-sm line-through text-gray-400 mr-2">R$1000,00</p>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded">Implementação GRÁTIS</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">
                {isAnnual ? 'R$997' : 'R$1197'}
                <span className="text-base font-normal text-gray-500">/mês</span>
              </p>
              {isAnnual && <p className="text-gray-500 mt-1">Plano Semestral</p>}
              {!isAnnual && <p className="text-gray-500 mt-1">Plano Mensal</p>}
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Qualificação automática de leads</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Integração com CRM de vendas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Agendamento de reuniões e follow-ups</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Envio de dados formatados para WhatsApp do time comercial</span>
              </li>
            </ul>
            
            <a href="#contato" className="btn-primary text-center">
              Garantir Oferta
            </a>
          </motion.div>
          
          {/* Agente Customizado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
          >
            <div className="flex items-center mb-2">
              <span className="text-gray-500 text-xl mr-2">🔧️</span>
              <h3 className="text-xl font-bold text-gray-900">Agente Customizado</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Para empresas que precisam de automações específicas.</p>
            
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center mb-1">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">Instalação + Treinamento Personalizado</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">
                <span className="text-base font-normal text-gray-500">Valores sob consulta</span>
              </p>
              <p className="text-gray-500 mt-1">💼 Projetos personalizados</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Projetos com lógica personalizada</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>APIs, ERPs e integrações complexas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Análise de viabilidade sob demanda</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Suporte técnico e desenvolvimento sob medida</span>
              </li>
            </ul>
            
            <a href="#contato" className="btn-secondary text-center">
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Todos os planos incluem integração com WhatsApp, coleta de dados automatizada e suporte técnico de onboarding.
          </p>
        </div>
      </div>
    </section>
  );
} 