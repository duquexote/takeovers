"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Componente para números animados
const CountUpNumber = ({ target, label, prefix = '', suffix = '' }: { target: number; label: string; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000; // 2 segundos para animação
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-200 mt-2">
        {label}
      </div>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="sobre" className="relative bg-tech-purple py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/patterns/tech-pattern.svg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-tech-dark to-transparent z-10"></div>
      
      {/* Blurred circles for glow effect */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-purple-500 opacity-20 blur-[120px]"></div>
      
      <div className="container-section relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <h2 className="title-section text-white">
            Potencialize seu atendimento com Inteligência Artificial
          </h2>
          <p className="subtitle-section text-gray-200">
            A Takeovers facilita o atendimento de diversos profissionais por todo o Brasil.
            Trazemos mais produtividade para sua rotina e melhor experiência para seus clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/atendimento.png"
              alt="CIA Virtual em ação no WhatsApp"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
            Mais agilidade, mais fechamento.
            </h3>
            
            <p className="text-gray-200">
            Criamos um agente de vendas com IA capaz de aumentar sua taxa de resposta, eliminar furos no atendimento e transformar seu WhatsApp em um canal de conversão automática.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Atendimento 24/7",
                  description: "Seu negócio nunca fecha. Atenda clientes mesmo quando estiver ocupado ou fora do horário comercial."
                },
                {
                  title: "Receba as solicitações de agendamento no seu Whatsapp",
                  description: "Sincronização automática de horários disponíveis, agendamentos e cancelamentos."
                },
                {
                  title: "Redução de faltas",
                  description: "Lembretes automáticos diminuem significativamente o número de no-shows."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex gap-4 p-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition border border-white/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    {index === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    ) : index === 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpNumber target={100} suffix="%" label="Taxa de satisfação" />
            <CountUpNumber target={97} suffix="%" label="Dos leads não percebem que é uma I.A" />
            <CountUpNumber target={24} suffix="/7" label="Disponibilidade" />
            <CountUpNumber target={500} prefix="+" label="Profissionais atendidos" />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute bottom-10 right-10">
        <div className="relative">
          <div className="w-40 h-40 border-4 border-primary/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-primary/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 