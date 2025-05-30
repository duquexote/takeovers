"use client";

import { motion } from 'framer-motion';
import {
  FaTshirt,           // Loja de Roupas
  FaUtensils,         // Restaurantes
  FaPrescriptionBottleAlt, // Farmácias
  FaBuilding,         // Imobiliárias
  FaCar,              // Concessionárias
  FaDumbbell,         // Academias
  FaChalkboardTeacher,// Escolas
  FaClinicMedical,    // Clínicas
  FaShoppingCart,     // Mercados
  FaCut,              // Salões de Beleza
  FaLaptop,           // E-commerce
  FaPlaneDeparture,   // Agência de Viagens
  FaHeart             // E muito mais
} from 'react-icons/fa';

const professions = [
  { name: 'Loja de Roupas', icon: <FaTshirt className="w-8 h-8 text-primary" /> },
  { name: 'Restaurantes', icon: <FaUtensils className="w-8 h-8 text-primary" /> },
  { name: 'Farmácias', icon: <FaPrescriptionBottleAlt className="w-8 h-8 text-primary" /> },
  { name: 'Imobiliárias', icon: <FaBuilding className="w-8 h-8 text-primary" /> },
  { name: 'Concessionárias', icon: <FaCar className="w-8 h-8 text-primary" /> },
  { name: 'Academias', icon: <FaDumbbell className="w-8 h-8 text-primary" /> },
  { name: 'Escolas', icon: <FaChalkboardTeacher className="w-8 h-8 text-primary" /> },
  { name: 'Clínicas', icon: <FaClinicMedical className="w-8 h-8 text-primary" /> },
  { name: 'Mercados', icon: <FaShoppingCart className="w-8 h-8 text-primary" /> },
  { name: 'Salões de beleza', icon: <FaCut className="w-8 h-8 text-primary" /> },
  { name: 'E-commerce', icon: <FaLaptop className="w-8 h-8 text-primary" /> },
  { name: 'Agência de Viagens', icon: <FaPlaneDeparture className="w-8 h-8 text-primary" /> },
  { name: 'E muito mais', icon: <FaHeart className="w-8 h-8 text-primary" /> },
];

export default function IdealForSection() {
  return (
    <section id="ideal-para" className="bg-tech-dark py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tech-purple to-transparent"></div>
      
      <div className="container-section relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section text-white"
          >
            Criado para empresas que vivem de leads.
          </motion.h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-6"></div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section mx-auto text-gray-300"
          >
            Se seu negócio precisa de atendimento rápido e inteligente para captar, qualificar e vender — Takeovers é para você.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {professions.map((profession, index) => (
            <motion.div
              key={profession.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-tech-gray/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-tech transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 bg-tech-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg border border-gray-700">
                {profession.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{profession.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 