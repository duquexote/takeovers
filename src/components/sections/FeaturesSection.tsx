"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiMessageDetail, BiCalendarCheck, BiCheckCircle, BiBell, BiAlarm, BiChart } from 'react-icons/bi';

// Component for animated dots
const AnimatedDots = () => {
  const [dots, setDots] = useState<Array<{id: number, x: number, y: number}>>([]);

  // Generate random positions for decorative dots
  useEffect(() => {
    const newDots = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animationDelay: `${Math.random() * 5}s`,
            animation: 'pulse 5s infinite ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );
};

const features = [
  {
    title: 'Responde com empatia',
    description: 'Atendimento humanizado e personalizado para cada cliente.',
    icon: <BiMessageDetail className="w-9 h-9 text-primary" />
  },
  {
    title: 'Informa horários disponíveis',
    description: 'Acesso em tempo real à sua agenda para oferecer horários livres.',
    icon: <BiCalendarCheck className="w-9 h-9 text-primary" />
  },
  {
    title: 'Agenda automaticamente',
    description: 'Marca compromissos diretamente no seu calendário sem intervenção.',
    icon: <BiCheckCircle className="w-9 h-9 text-primary" />
  },
  {
    title: 'Confirma a consulta',
    description: 'Envia lembretes e confirma presenças antes dos atendimentos.',
    icon: <BiBell className="w-9 h-9 text-primary" />
  },
  {
    title: 'Envia lembretes',
    description: 'Notifica clientes sobre compromissos para reduzir faltas.',
    icon: <BiAlarm className="w-9 h-9 text-primary" />
  },
  {
    title: 'Organiza sua rotina',
    description: 'Otimiza seu tempo com uma agenda bem estruturada e sem furos.',
    icon: <BiChart className="w-9 h-9 text-primary" />
  }
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-tech-blue py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tech-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-tech-purple to-transparent"></div>
      
      {/* Animated dots element */}
      <AnimatedDots />
      
      {/* Static dots */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary/70 rounded-full animate-pulse-light"></div>
      <div className="absolute bottom-40 right-40 w-3 h-3 bg-primary/70 rounded-full animate-pulse-light"></div>
      
      <div className="container-section relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section text-white"
          >
            Seu atendimento mais rápido, inteligente e organizado.
          </motion.h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-tech-gray/50 backdrop-blur-sm flex flex-col items-center text-center p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-tech transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 bg-tech-dark w-16 h-16 rounded-full flex items-center justify-center shadow-inner border border-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 