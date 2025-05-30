/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configurações experimentais
  experimental: {
    // Otimiza importações de pacotes específicos
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      'react-intersection-observer'
    ],
    // Otimiza a divisão de código
    optimizeCss: false, // Desativado temporariamente
    // Reduz o tamanho do bundle
    serverMinification: true,
  },
  // Pacotes externos para componentes de servidor
  serverExternalPackages: ['sharp'],
  // Otimizações do compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configuração para evitar JavaScript legado em navegadores modernos
  transpilePackages: [],
  // Configuração para otimizar o carregamento de módulos
  modularizeImports: {
    // Carrega apenas os ícones específicos utilizados
    'react-icons/?(((\\w*)?/?)*)': {
      transform: 'react-icons/{{ matches.[1] }}/{{member}}',
    },
  },
  // Otimizações de produção
  productionBrowserSourceMaps: false, // Desativa source maps em produção
  poweredByHeader: false,
  // Configuração de compressão
  compress: true,
  // Configuração de cache
  generateEtags: true,
};

module.exports = nextConfig;
