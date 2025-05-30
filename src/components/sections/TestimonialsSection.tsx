"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import AnimatedBackground from '../ui/AnimatedBackground';

// Dados dos depoimentos
const testimonials = [
  {
    id: 1,
    name: 'Ana Beatriz',
    role: 'Esteticista – Salão de Beleza em SP',
    image: '/ana-beatriz.jpg',
    text: 'Antes da IA, eu perdia cliente por não responder a tempo. Agora tudo é automático, não deixo ninguém no vácuo e minha agenda vive cheia.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Corretor – Imobiliária em BH',
    image: '/carlos-mendes.jpg',
    text: 'A IA da Takeovers virou meu SDR. Ela coleta dados, agenda visita e me avisa direto no WhatsApp. Fechei 4 contratos só com leads filtrados por ela.',
    rating: 5
  },
  {
    id: 3,
    name: 'Juliana Prado',
    role: 'Vendedora – Loja de Roupas Online',
    image: '/juliana-prado.jpg',
    text: 'Meu Instagram bomba de mensagens, e a IA virou meu braço direito. Responde, coleta medidas, mostra fotos e manda pra mim quem realmente quer comprar.',
    rating: 5
  },
  {
    id: 4,
    name: 'Diego Ramos',
    role: 'Sócio – Cursos Profissionalizantes',
    image: '/diego-ramos.webp',
    text: 'Ela atende os alunos, envia detalhes do curso e marca reuniões com pais. Aumentei 32% nas matrículas só com esse atendimento automático.',
    rating: 5
  },
  {
    id: 5,
    name: 'Fernanda Rocha',
    role: 'Médica – Clínica Odontológica',
    image: '/fernanda-rocha.webp',
    text: 'Nunca mais precisei parar consulta pra atender WhatsApp. A IA responde tudo com empatia, agenda e ainda me manda os dados organizados.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  // Lógica para lidar com a navegação do carrossel
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setImageError(false); // Resetar o erro ao trocar de depoimento
  };
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setImageError(false); // Resetar o erro ao trocar de depoimento
  };
  
  // Renderiza as estrelas com base na avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-tech-blue relative overflow-hidden">
      <AnimatedBackground variant="waves" className="opacity-50" color="rgba(99, 102, 241, 0.5)" />
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tech-blue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-tech-blue to-transparent"></div>
      <div className="container-section">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section text-white"
          >
            Resultados reais de quem usa a Takeovers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section mx-auto text-gray-200"
          >
            Empresas de diversos segmentos transformando leads em vendas
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Carrossel de depoimentos */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary relative">
                    {imageError ? (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                    ) : (
                      <Image
                        src={testimonials[activeIndex].image || `/ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeIndex].name)}&background=random`}
                        alt={testimonials[activeIndex].name}
                        className="object-cover"
                        fill
                        sizes="96px"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600 mb-2">{testimonials[activeIndex].role}</p>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="relative">
                    <svg className="absolute -top-4 -left-4 h-10 w-10 text-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-gray-700 relative z-10 italic">
                      &ldquo;{testimonials[activeIndex].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Botões de navegação */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setImageError(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 