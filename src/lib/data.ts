export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'QuantumLeap CRM',
    description: 'A futuristic CRM dashboard designed for optimal user experience and data visualization, built with Next.js and custom UI components.',
    imageUrl: 'https://placehold.co/1200x800.png',
    imageHint: 'futuristic dashboard',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'NovaSphere Social',
    description: 'A decentralized social media platform concept with a focus on privacy and user data ownership, featuring a sleek, modern interface.',
    imageUrl: 'https://placehold.co/1200x800.png',
    imageHint: 'social media',
    tags: ['React', 'GraphQL', 'Web3', 'Figma'],
    liveUrl: '#',
  },
  {
    title: 'ChronoPost',
    description: 'An AI-powered content scheduling tool that helps creators optimize their posting times across multiple platforms for maximum engagement.',
    imageUrl: 'https://placehold.co/1200x800.png',
    imageHint: 'content scheduler',
    tags: ['AI/ML', 'Python', 'React', 'Node.js'],
    sourceUrl: '#',
  },
    {
    title: 'Project Apex',
    description: 'An e-commerce platform specializing in high-performance gear, featuring a 3D product viewer and a streamlined checkout process.',
    imageUrl: 'https://placehold.co/1200x800.png',
    imageHint: 'ecommerce product',
    tags: ['Vue.js', 'Three.js', 'Stripe', 'Node.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const socialLinks = {
  github: 'https://github.com/Utkarshjha09',
  linkedin: 'https://www.linkedin.com/in/utkarshjha03/',
  twitter: '#',
  instagram: 'https://www.instagram.com/utkarshjha03?igsh=MXM5OHl2eXBrZWIwdQ==',
  portfolio: 'https://leetcode.com/u/W03VazWUr9/',
};
