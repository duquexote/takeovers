"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'A IA substitui meu time de atendimento?',
    answer: 'Não. Ela atua como um SDR virtual, automatizando as etapas repetitivas (respostas iniciais, coleta de dados, agendamentos) e liberando tempo do seu time para focar no fechamento.'
  },
  {
    question: 'Como recebo os dados coletados pelo agente?',
    answer: 'Todos os dados são enviados diretamente para o seu WhatsApp, formatados de forma organizada, ou integrados ao seu CRM ou planilha, se preferir.'
  },
  {
    question: 'Precisa de conhecimento técnico?',
    answer: 'Não é necessário nenhum conhecimento técnico. Nossa equipe configura tudo para você e oferece um treinamento completo para que você aproveite ao máximo as funcionalidades.'
  },
  {
    question: 'É possível personalizar as respostas da IA?',
    answer: 'Sim! A IA é treinada com base nos seus PDFs, vídeos, planilhas ou textos, para responder como se fosse da sua equipe.'
  },
  {
    question: 'Preciso de conhecimento técnico para usar?',
    answer: 'Nenhum. Nossa equipe configura tudo e te entrega o agente pronto para funcionar. Você só precisa acompanhar os leads.'
  },
  {
    question: 'Quanto tempo leva pra começar a rodar?',
    answer: 'Em até 48 horas após o preenchimento do formulário, sua IA já estará funcionando no WhatsApp da sua empresa.'
  },
  {
    question: 'Ela funciona fora do horário comercial?',
    answer: 'Sim! Ela atende 24h por dia, 7 dias por semana, liberando tempo para você, seu time e sem perder leads.'
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
            Veja as respostas para as perguntas mais frequentes sobre a Takeovers.
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