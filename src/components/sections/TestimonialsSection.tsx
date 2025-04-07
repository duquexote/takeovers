"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Dados dos depoimentos
const testimonials = [
  {
    id: 1,
    name: 'Dra. Camila Silva',
    role: 'Psicóloga Clínica',
    image: '/testimonials/person1.jpg',
    text: 'O CIA Virtual revolucionou minha agenda. Reduzi as faltas em 60% e hoje consigo me dedicar mais aos atendimentos sem me preocupar com a parte administrativa.',
    rating: 5
  },
  {
    id: 2,
    name: 'Dr. Rafael Mendes',
    role: 'Dentista',
    image: '/testimonials/person2.jpg',
    text: 'Meus pacientes adoram a praticidade de agendar pelo WhatsApp a qualquer hora do dia. E eu economizo com secretária. Recomendo para todos os profissionais da área.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amanda Torres',
    role: 'Esteticista',
    image: '/testimonials/person3.jpg',
    text: 'Desde que implementei o CIA, minha agenda está sempre cheia e organizada. O sistema é intuitivo e o suporte é excelente quando preciso de ajuda.',
    rating: 5
  },
  {
    id: 4,
    name: 'João Pereira',
    role: 'Personal Trainer',
    image: '/testimonials/person4.jpg',
    text: 'Antes eu perdia muito tempo respondendo mensagens básicas. Agora o CIA faz isso por mim e meus alunos têm respostas imediatas. Sensacional!',
    rating: 5
  },
  {
    id: 5,
    name: 'Fernanda Costa',
    role: 'Nutricionista',
    image: '/testimonials/person5.jpg',
    text: 'Adoro a facilidade de integração com meu Google Agenda. Tudo sincronizado em tempo real e nunca mais tive problemas com horários duplicados.',
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
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section"
          >
            O que nossos clientes estão dizendo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section mx-auto"
          >
            Centenas de profissionais já transformaram seu atendimento
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