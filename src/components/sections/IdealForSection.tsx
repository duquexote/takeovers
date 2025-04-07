"use client";

import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaSpa, 
  FaDumbbell, 
  FaChartLine, 
  FaPaintBrush, 
  FaTooth, 
  FaBalanceScale, 
  FaYinYang 
} from 'react-icons/fa';

const professions = [
  { name: 'Psicólogos', icon: <FaBrain className="w-8 h-8 text-primary" /> },
  { name: 'Esteticistas', icon: <FaSpa className="w-8 h-8 text-primary" /> },
  { name: 'Personal Trainers', icon: <FaDumbbell className="w-8 h-8 text-primary" /> },
  { name: 'Consultores', icon: <FaChartLine className="w-8 h-8 text-primary" /> },
  { name: 'Designers', icon: <FaPaintBrush className="w-8 h-8 text-primary" /> },
  { name: 'Dentistas', icon: <FaTooth className="w-8 h-8 text-primary" /> },
  { name: 'Advogados', icon: <FaBalanceScale className="w-8 h-8 text-primary" /> },
  { name: 'Terapeutas', icon: <FaYinYang className="w-8 h-8 text-primary" /> },
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
            Criado para quem vive de agenda.
          </motion.h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-6"></div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle-section mx-auto text-gray-300"
          >
            Se você atende por hora, o CIA Virtual pode revolucionar sua rotina.
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