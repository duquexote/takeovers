"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tech-purple to-transparent"></div>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <div className="relative h-12 w-48">
                <Image
                  src="/takeovers_logo.svg"
                  alt="Takeovers Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Inteligência artificial que atende, agenda e organiza sua rotina diretamente no WhatsApp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-primary transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#funcionalidades" className="text-gray-400 hover:text-primary transition-colors">Funcionalidades</Link>
              </li>
              <li>
                <Link href="#planos" className="text-gray-400 hover:text-primary transition-colors">Planos</Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contato</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block">contato@takeovers.com.br</span>
              </li>
              <li className="text-gray-400">
                <span className="block">+55 (71) 9 9999-9999</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Salvador, BA</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <div className="bg-tech-gray/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
              <h3 className="text-white text-lg font-bold mb-4">Proteção de Dados</h3>
              <p className="text-gray-400 text-sm">
                Seus dados estarão seguros conosco. Utilizamos as melhores práticas de segurança e criptografia.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Takeovers. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-primary text-sm">Política de Privacidade</Link>
            <Link href="#" className="text-gray-500 hover:text-primary text-sm">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 