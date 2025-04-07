"use client";

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-tech-purple py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTMxMzEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-tech-purple via-tech-purple to-tech-blue"></div>
      
      <div className="container-section relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <h2 className="title-section text-white">
            O seu novo braço direito digital chegou.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Um assistente virtual inteligente, treinado pela CIA, que conversa 
            com seus clientes no WhatsApp, entende suas demandas e agenda seus 
            atendimentos direto na sua agenda.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-tech"
          >
            <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Você só aparece para realizar. <span className="text-primary">O resto, a IA resolve.</span>
            </p>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-primary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-light"></div>
          <div className="absolute top-1/4 right-20 w-2 h-2 bg-primary rounded-full animate-pulse-light"></div>
        </motion.div>
      </div>
    </section>
  );
} 