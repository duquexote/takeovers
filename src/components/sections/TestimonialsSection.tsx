"use client";

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const testimonials = [
  {
    name: 'Fernanda',
    profession: 'Terapeuta holística',
    avatar: '👩',
    quote: 'Fecho agenda antes mesmo de acordar. É surreal.'
  },
  {
    name: 'Carlos',
    profession: 'Personal Trainer',
    avatar: '👨',
    quote: 'Agora tenho mais tempo para os treinos dos meus alunos.'
  },
  {
    name: 'Dra. Júlia',
    profession: 'Dentista',
    avatar: '👩‍⚕️',
    quote: 'O CIA cuida do atendimento enquanto estou com o paciente.'
  },
  {
    name: 'Ricardo',
    profession: 'Consultor Financeiro',
    avatar: '👨‍💼',
    quote: 'Aumentei em 30% meus atendimentos sem contratar ninguém.'
  },
  {
    name: 'Patrícia',
    profession: 'Psicóloga',
    avatar: '👩‍💼',
    quote: 'Melhor investimento que fiz para o meu consultório em anos.'
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const testimonials = scrollRef.current.querySelectorAll('.testimonial-card');
      testimonials[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };
  
  return (
    <section id="depoimentos" className="bg-white py-20">
      <div className="container-section">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section"
          >
            Profissionais que já transformaram sua rotina com o CIA Virtual
          </motion.h2>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`testimonial-card min-w-[300px] md:min-w-[350px] p-6 rounded-xl shadow-md border border-gray-100 
                  snap-center ${activeIndex === index ? 'shadow-lg ring-1 ring-primary/20 scale-[1.02]' : ''}`}
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.profession}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-primary' : 'bg-gray-300'
              } transition-colors`}
              aria-label={`Depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 