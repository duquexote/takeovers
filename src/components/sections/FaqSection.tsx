"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'A IA substitui meu atendimento?',
    answer: 'Não, o CIA Virtual é um assistente que cuida da parte inicial do contato com o cliente, organiza sua agenda e otimiza seu tempo. Você continua responsável pelo atendimento principal, que é o que realmente importa.'
  },
  {
    question: 'Serve para qualquer área?',
    answer: 'O CIA Virtual é ideal para profissionais que trabalham com agenda e atendimentos por hora. Psicólogos, terapeutas, personal trainers, consultores, dentistas e profissionais similares conseguem os melhores resultados.'
  },
  {
    question: 'Precisa de conhecimento técnico?',
    answer: 'Não é necessário nenhum conhecimento técnico. Nossa equipe configura tudo para você e oferece um treinamento completo para que você aproveite ao máximo as funcionalidades.'
  },
  {
    question: 'E se quiser ajustes no assistente?',
    answer: 'Se optar pelo plano com manutenção, você tem direito a ajustes mensais. No plano básico, ajustes após o período inicial de 30 dias são cobrados separadamente.'
  },
  {
    question: 'Quanto tempo para implementar?',
    answer: 'O CIA Virtual estará pronto para funcionar em até 48 horas após a contratação e o preenchimento do formulário com suas informações.'
  },
  {
    question: 'Como é feita a integração com meu WhatsApp?',
    answer: 'Utilizamos tecnologias seguras e aprovadas pelo WhatsApp Business para integrar o CIA Virtual. O processo é simples e guiado pela nossa equipe, sem riscos para sua conta.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="bg-tech-blue py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tech-blue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-tech-blue to-transparent"></div>
      
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="title-section text-white">
            Dúvidas comuns que podemos resolver agora
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Veja as respostas para as perguntas mais frequentes sobre o CIA Virtual
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-5 flex justify-between items-center rounded-lg border
                  ${openIndex === index 
                    ? 'bg-white/10 backdrop-blur-sm border-primary/30 text-white shadow-tech' 
                    : 'bg-tech-gray/50 backdrop-blur-sm border-gray-700 text-gray-200'}
                  hover:border-primary/30 transition-all duration-300`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-primary ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/20 rounded-b-lg backdrop-blur-sm
                  ${openIndex === index ? 'max-h-96 border-x border-b border-gray-700' : 'max-h-0 border-none'}`}
              >
                <div className="p-5 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 