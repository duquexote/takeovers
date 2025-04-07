"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Contratação',
    description: 'Escolha o plano ideal para o seu negócio e faça a contratação online.'
  },
  {
    number: '2',
    title: 'Coleta de informações',
    description: 'Preencha um breve formulário com dados do seu negócio e seus horários.'
  },
  {
    number: '3',
    title: 'Criação da IA',
    description: 'Nossa equipe treina uma IA personalizada com base no seu perfil profissional.'
  },
  {
    number: '4',
    title: 'Configuração final',
    description: 'Conectamos a IA ao seu WhatsApp e calendário de agendamentos.'
  },
  {
    number: '5',
    title: 'Pronto para uso',
    description: 'Em até 48h, você já terá um assistente virtual trabalhando por você.'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section"
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
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200 -z-10"></div>
              )}
              
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">
                {step.number}
              </div>
              
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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