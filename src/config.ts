export const BRAND = {
  name: 'XGGOLE',
  email: 'contact@xggole.com',
  phone: '+971 523674519',
  location: 'Dubai, UAE',
  github: 'https://github.com/xggole',
};

export const SUPABASE_CONFIG = {
  URL: import.meta.env.VITE_SUPABASE_URL as string,
  ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
};

export const AGENCY_EMAIL = import.meta.env.VITE_AGENCY_EMAIL || 'contact@xggole.com';

export const STATS = {
  projectsDone: 48,
  clientRating: 4.9,
  clients: 32,
};

export const CLIENTS = [
 { name: 'Your Brand', initials: 'YB' },
 { name: 'Become a Client', initials: 'BC' },
{ name: 'Your Space', initials: 'YS' },
];

export const SERVICES = [
  {
    id: 'web-app',
    title: 'Web App',
    description: 'Scalable, high-performance web applications built with modern frameworks and robust architecture.',
    icon: 'Code',
    details: 'Custom dashboards, SaaS platforms, and enterprise web apps with real-time data and seamless UX.',
  },
  {
    id: 'website',
    title: 'Website',
    description: 'Premium responsive websites that convert visitors into customers with stunning design.',
    icon: 'Globe',
    details: 'Landing pages, corporate sites, and e-commerce experiences optimized for speed and SEO.',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description: 'Native and cross-platform mobile apps designed for engagement and retention.',
    icon: 'Smartphone',
    details: 'iOS and Android apps with intuitive interfaces, push notifications, and offline capabilities.',
  },
  {
    id: 'corporate-identity',
    title: 'Corporate Identity Suite',
    description: 'Complete brand systems including logos, guidelines, and visual identity assets.',
    icon: 'Palette',
    details: 'Logo design, brand guidelines, stationery, and marketing collateral for cohesive branding.',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Mobile App',
    category: 'Mobile App',
    videoId: 'BMUSRWhBy4Q',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    tools: ['React Native', 'Figma', 'Firebase', 'TypeScript'],
    overview: 'A modern mobile app design focused on user engagement and retention. We created an intuitive interface with micro-interactions that delight users while maintaining clean usability.',
  },
  {
    id: 2,
    title: 'Corporate Identity',
    category: 'Corporate Identity',
    videoId: 'BMUSRWhBy4Q',
    thumbnail: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop',
    tools: ['Adobe Illustrator', 'InDesign', 'Brand Strategy', 'Typography'],
    overview: 'A complete corporate identity design including logo, business cards, stationery, and brand guidelines. The suite establishes a cohesive visual language that communicates professionalism and innovation.',
  },
  {
    id: 3,
    title: 'Web App',
    category: 'Web App',
    videoId: 'BMUSRWhBy4Q',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    overview: 'A comprehensive web application from wireframes to production-ready deployment. We focused on creating an intuitive user experience with seamless animations and a modern aesthetic.',
  },
  {
    id: 4,
    title: 'Website',
    category: 'Website',
    videoId: 'BMUSRWhBy4Q',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    tools: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    overview: 'A stunning responsive website design with advanced animations and scroll-triggered effects. The site delivers a premium experience across all devices while maintaining blazing fast load times.',
  },
];
