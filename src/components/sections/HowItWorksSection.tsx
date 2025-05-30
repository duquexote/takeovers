"use client";

import { motion } from 'framer-motion';
import AnimatedBackground from '../ui/AnimatedBackground';

const steps = [
  {
    number: '1',
    title: 'Contratação',
    description: 'Escolha o plano ideal para o seu negócio e faça a contratação online.'
  },
  {
    number: '2',
    title: 'Coleta de informações',
    description: 'Briefing via formulário simples com dados e tom de voz.'
  },
  {
    number: '3',
    title: 'Criação da IA',
    description: 'Nossa equipe treina uma IA personalizada com base no seu perfil profissional.'
  },
  {
    number: '4',
    title: 'Integrações',
    description: 'Conectamos seu WhatsApp, CRM e agenda.'
  },
  {
    number: '5',
    title: 'Pronto para usar',
    description: 'Em menos de 48h, você está captando e qualificando leads automaticamente.'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-gray-900 py-20 relative overflow-hidden">
      <AnimatedBackground variant="dots" className="opacity-60" color="rgba(0, 180, 216, 0.7)" />
      <div className="container-section">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section text-white"
          >
            Pronto para funcionar em até 48h.
          </motion.h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start mb-10 relative"
            >
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-600 -z-10"></div>
              )}
              
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">
                {step.number}
              </div>
              
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#contato" className="btn-primary inline-block">
            🚀 Começar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
} 