"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <section id="planos" className="py-24 bg-white relative">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section text-tech-dark"
          >
            Planos simples para todas as necessidades
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section"
          >
            Escolha o plano ideal para o seu volume de atendimentos
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
                Anual <span className="text-primary font-bold text-sm">(2 meses grátis)</span>
              </span>
            </label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Básico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Básico</h3>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-4xl font-bold text-gray-900">
                {isAnnual ? 'R$97' : 'R$127'}
                <span className="text-base font-normal text-gray-500">/mês</span>
              </p>
              {isAnnual && <p className="text-gray-500 mt-1">Faturado anualmente</p>}
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Até 50 atendimentos por mês</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Agendamento automático</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Confirmação de consultas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Integração Google Agenda</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="w-5 h-5 text-gray-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Personalização de respostas</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="w-5 h-5 text-gray-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Suporte prioritário</span>
              </li>
            </ul>
            
            <a href="#contato" className="btn-secondary text-center">
              Escolher Plano
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
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profissional</h3>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-4xl font-bold text-gray-900">
                {isAnnual ? 'R$197' : 'R$247'}
                <span className="text-base font-normal text-gray-500">/mês</span>
              </p>
              {isAnnual && <p className="text-gray-500 mt-1">Faturado anualmente</p>}
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Até 150 atendimentos por mês</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Agendamento automático</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Confirmação de consultas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Integração Google Agenda</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Personalização de respostas</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="w-5 h-5 text-gray-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Suporte prioritário</span>
              </li>
            </ul>
            
            <a href="#contato" className="btn-primary text-center">
              Escolher Plano
            </a>
          </motion.div>
          
          {/* Plano Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Premium</h3>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-4xl font-bold text-gray-900">
                {isAnnual ? 'R$397' : 'R$497'}
                <span className="text-base font-normal text-gray-500">/mês</span>
              </p>
              {isAnnual && <p className="text-gray-500 mt-1">Faturado anualmente</p>}
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Atendimentos ilimitados</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Agendamento automático</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Confirmação de consultas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Integração Google Agenda</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Personalização de respostas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Suporte prioritário</span>
              </li>
            </ul>
            
            <a href="#contato" className="btn-secondary text-center">
              Escolher Plano
            </a>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Precisa de um plano personalizado para sua empresa? <a href="#contato" className="text-primary font-medium hover:underline">Entre em contato</a>
          </p>
        </div>
      </div>
    </section>
  );
} 