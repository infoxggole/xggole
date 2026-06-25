export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const SUPABASE_CONFIG = {
  URL: import.meta.env.VITE_SUPABASE_URL,
  ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Web App Design',
    videoId: 'BMUSRWhBy4Q',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    overview: 'A comprehensive web application design from wireframes to production-ready prototypes. We focused on creating an intuitive user experience with seamless animations and a modern aesthetic.',
  },
  {
    id: 2,
    title: 'Corporate Identity Suite',
    videoId: 'https://youtube.com/shorts/zaetW-f2SXI?si=h56uf0bsivebbhMv',
    thumbnail: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop',
    tools: ['Adobe Illustrator', 'Indesign', 'Brand Strategy', 'Typography'],
    overview: 'A complete corporate identity design including logo, business cards, stationery, and brand guidelines. The suite establishes a cohesive visual language that communicates professionalism and innovation.',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    tools: ['Figma', 'Principle', 'Lottie', 'Swift UI'],
    overview: 'A modern mobile app design focused on user engagement and retention. We created an intuitive interface with micro-interactions that delight users while maintaining clean usability.',
  },
  {
    id: 4,
    title: 'Website Design',
    videoId: 'BMUSRWhBy4Q',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    tools: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    overview: 'A stunning responsive website design with advanced animations and scroll-triggered effects. The site delivers a premium experience across all devices while maintaining blazing fast load times.',
  },
];