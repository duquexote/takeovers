"use client";

import { motion } from 'framer-motion';
import { BiRocket } from 'react-icons/bi';

export default function CtaSection() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-red to-tech-purple"></div>
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      
      {/* Animated glowing elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-[80px] animate-pulse-light"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-[80px] animate-pulse-light"></div>
      
      {/* Circuit design elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-[800px] h-[800px] border-2 border-white rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] border-2 border-white rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Chegou a hora de colocar sua IA <span className="text-primary">para vender.</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          
          <p className="text-xl text-gray-300">
            Fale agora com nosso time e coloque sua IA para funcionar em menos de 48h.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="inline-block"
          >
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20IA%20Takeovers" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-lg font-bold py-4 px-8 rounded-lg shadow-neon flex items-center justify-center gap-2 transition hover:bg-primaryDark hover:shadow-tech"
            >
              <BiRocket className="w-5 h-5 animate-pulse-light" /> Quero meu agente IA no WhatsApp
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-gray-400 pt-4"
          >
            <p>Vagas limitadas nesta semana.</p>
            <p className="mt-2">Sem compromisso • Atendimento humano • Retorno em até 1h útil</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 