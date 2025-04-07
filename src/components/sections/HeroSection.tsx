"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BiMessageDetail, BiShow } from 'react-icons/bi';

export default function HeroSection() {
  const [chatState, setChatState] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [audioTyping, setAudioTyping] = useState(false);
  const [userTyping, setUserTyping] = useState(false);

  // Sequência de mensagens
  const chatMessages = [
    { role: 'assistant', text: 'Olá! Sou o assistente virtual da CIA. Como posso ajudar?' },
    { role: 'user', text: 'Olá! Gostaria de agendar um horário.' },
    { role: 'assistant', text: 'Claro! Temos horários disponíveis às 10h, 14h e 16h. Qual prefere?' },
    { role: 'user', text: 'Pode ser 10h' },
    { role: 'assistant', text: 'Perfeito, me informe o seu nome e email para concluir o agendamento' },
    { role: 'user', text: 'Normando Barbosa\nnormando@cia.com.br' },
    { role: 'assistant', text: 'Agendamento confirmado, as 10h na quarta-feira (06/04/2025)' },
    { role: 'user', type: 'audio', duration: '11s', isAudio: true },
    { role: 'assistant', text: 'Entendi, essa duvida é muito comum pelos nossos pacientes.'},
    { role: 'assistant', text: 'Deixa eu explicar mais sobre ela, para você ficar confortável para a consulta', isLast: true}
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatState < chatMessages.length - 1) {
        // Se a próxima mensagem for do usuário, mostrar animação de digitação primeiro
        if (chatMessages[chatState + 1].role === 'user' && !chatMessages[chatState + 1].isAudio) {
          setUserTyping(true);
          setTimeout(() => {
            setUserTyping(false);
            setChatState(prev => prev + 1);
          }, 1000);
        } 
        // Se a próxima mensagem for do assistente, mostrar animação de digitação
        else if (chatMessages[chatState + 1].role === 'assistant') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setChatState(prev => prev + 1);
          }, 1000);
        } 
        // Se a próxima mensagem for um áudio, mostrar animação de digitação verde primeiro
        else if (chatMessages[chatState + 1].isAudio) {
          setAudioTyping(true);
          setTimeout(() => {
            setAudioTyping(false);
            setChatState(prev => prev + 1);
          }, 1000);
        } 
        // Outros casos, só avançar
        else {
          setChatState(prev => prev + 1);
        }
      }
    }, 1000); // Intervalo entre as mensagens

    return () => clearTimeout(timer);
  }, [chatState]);

  // Efeito de digitação para a última mensagem
  useEffect(() => {
    // Verifica se chegou à última mensagem
    if (chatState === chatMessages.length - 1) {
      setIsTyping(true); // Mantém a animação de digitando para a última mensagem
    }
  }, [chatState]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-tech-dark pt-24 pb-20 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-tech-dark"></div>
      
      {/* Glowing accent */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/20 rounded-full filter blur-[100px]"></div>
      
      {/* Circuit lines - decorative */}
      <svg className="absolute left-0 top-0 h-full w-1/3 text-gray-700 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.2" />
        <line x1="0" y1="20" x2="100" y2="80" stroke="currentColor" strokeWidth="0.2" />
        <line x1="0" y1="40" x2="100" y2="60" stroke="currentColor" strokeWidth="0.2" />
      </svg>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              <span className="text-primary">Nunca mais</span> perca um cliente por falta de resposta.
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Deixe o CIA Virtual responder, agendar e organizar sua rotina — 24h por dia, direto no seu WhatsApp.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.03 }}
                className="btn-primary flex items-center justify-center shadow-tech"
              >
                <BiMessageDetail className="w-5 h-5 mr-2" /> Começar agora
              </motion.a>
              
              <motion.a
                href="#como-funciona"
                whileHover={{ scale: 1.03 }}
                className="bg-tech-gray/70 backdrop-blur-sm text-white border border-gray-700 font-medium py-3 px-6 rounded-lg transition duration-300 hover:border-primary/50 hover:bg-tech-gray flex items-center justify-center"
              >
                <BiShow className="w-5 h-5 mr-2" /> Ver em funcionamento
              </motion.a>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-tech-gray/70 backdrop-blur-sm p-4 rounded-lg border border-gray-700 shadow-tech inline-block"
            >
              <p className="font-bold text-lg text-white">R$0,00 por funcionário. <span className="text-primary">Só você e sua IA.</span></p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-tech-dark/90 rounded-xl p-4 md:ml-auto max-w-md"
          >
            <div className="flex flex-col space-y-3">
              {/* Mostrar todas as mensagens até o estado atual */}
              {chatMessages.slice(0, chatState + 1).map((message, index) => {
                if (message.type === 'audio') {
                  // Renderiza um bloco de áudio
                  return (
                    <div key={index} className="bg-green-900/40 p-3 rounded-lg self-start max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-500 rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-900" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1">
                            {/* Onda de áudio simulada */}
                            {[...Array(12)].map((_, i) => (
                              <div 
                                key={i} 
                                className="bg-green-400 rounded-full w-1" 
                                style={{ 
                                  height: `${3 + Math.sin(i * 0.8) * 4}px`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-green-300">{message.duration}</span>
                      </div>
                    </div>
                  );
                }
                
                // Renderiza uma mensagem normal
                return (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-green-900/40 self-start mr-auto max-w-[80%]' 
                        : 'bg-blue-900/40 self-end ml-auto max-w-[80%]'
                    }`}
                  >
                    <p className={`text-sm whitespace-pre-line ${
                      message.role === 'user' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {message.text}
                    </p>
                  </div>
                );
              })}
              
              {/* Indicador de digitação para mensagens do usuário */}
              {userTyping && (
                <div className="bg-green-900/40 p-3 rounded-lg self-start mr-auto max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              )}
              
              {/* Indicador de digitação para o áudio */}
              {audioTyping && (
                <div className="bg-green-900/40 p-3 rounded-lg self-start mr-auto max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              )}
              
              {/* Indicador de digitação para mensagens que não são a última */}
              {isTyping && chatState < chatMessages.length - 1 && (
                <div className="bg-blue-900/40 p-3 rounded-lg self-end ml-auto max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              )}
              
              {/* Indicador de digitação para a última mensagem em um bloco separado */}
              {chatState === chatMessages.length - 1 && isTyping && (
                <div className="bg-blue-900/40 p-3 rounded-lg self-end ml-auto max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 