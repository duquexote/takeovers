"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determina se o usuário está scrollando para cima ou para baixo
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrollando para baixo - esconde
      } else {
        setIsVisible(true); // Scrollando para cima - mostra
      }
      
      // Atualiza o estado do scroll para o estilo do fundo
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tech-dark/95 backdrop-blur-md py-2 shadow-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-section !py-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-48">
              <Image
                src="/takeovers_logo.svg"
                alt="Takeovers Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#funcionalidades">Funcionalidades</NavLink>
            <NavLink href="#planos">Planos</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <Link 
              href="#contato" 
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primaryDark transition duration-300"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>
                Sobre
              </MobileNavLink>
              <MobileNavLink href="#funcionalidades" onClick={() => setIsMobileMenuOpen(false)}>
                Funcionalidades
              </MobileNavLink>
              <MobileNavLink href="#planos" onClick={() => setIsMobileMenuOpen(false)}>
                Planos
              </MobileNavLink>
              <MobileNavLink href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)}>
                Depoimentos
              </MobileNavLink>
              <MobileNavLink href="#faq" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </MobileNavLink>
              <Link
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white py-2 px-4 rounded-lg text-center hover:bg-primaryDark transition duration-300"
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-primary transition duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-200 hover:text-primary py-2 transition duration-300"
    >
      {children}
    </Link>
  );
} 