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

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageUrl: string;
  imageHint: string;
  certificateUrl: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Signal Processing with MATLAB',
    issuer: 'MathWorks',
    date: 'Expires: 07/02/2025',
    imageUrl: '/Signal Processing with MATLAB.png',
    imageHint: 'matlab certificate',
    certificateUrl: 'https://drive.google.com/file/d/1UfPib41vq8-hV9ljPU1xxHPi8dsC5gni/view?usp=drive_link',
  },
  {
    title: 'Fundamentals of AI and ML',
    issuer: 'Vityarthi',
    date: 'Issued: 30/04/2024',
    credentialId: 'ID: 23BEC10088',
    imageUrl: '/Fundamentals of AI and ML.png',
    imageHint: 'ai ml certificate',
    certificateUrl: 'https://drive.google.com/file/d/1O989EYM_qsTVQNcs6-WiwNvMu13CthhS/view?usp=drive_link',
  },
  {
    title: 'Core Signal Processing Techniques in MATLAB',
    issuer: 'MathWorks',
    date: 'Expires: 30/03/2025',
    imageUrl: '/Core Signal Processing Techniques in MATLAB.png',
    imageHint: 'matlab certificate',
    certificateUrl: 'https://drive.google.com/file/d/1Ndd7iH5ZB9Psbgu9pHbPd4-m_LKXM8Jq/view?usp=drive_link',
  },
  {
    title: 'Python Essentials Hindi',
    issuer: 'Vityarthi',
    date: 'Issued: 25/12/2023',
    credentialId: 'No: 100618484274170661',
    imageUrl: '/Python Essentials Hindi.png',
    imageHint: 'python certificate',
    certificateUrl: 'https://drive.google.com/file/d/1p2k4xHvLRDxc0ZEVlwPXlb1_5F2zUZg7/view?usp=drive_link',
  },
  {
    title: 'MATLAB Fundamentals',
    issuer: 'MathWorks',
    date: 'Issued: 23/09/2024',
    imageUrl: '/MATLAB Fundamentals.png',
    imageHint: 'matlab certificate',
    certificateUrl: 'https://drive.google.com/file/d/1lpgzSL4-xrihY9aIIiRQsSF28upV7_mU/view?usp=drive_link',
  },
  {
    title: 'Introduction To Internet Of Things',
    issuer: 'NPTEL',
    date: 'Jan-Apr 2025',
    credentialId: 'Roll No: NPTEL25CS44S452400580',
    imageUrl: '/Introduction To Internet Of Things.png',
    imageHint: 'iot certificate',
    certificateUrl: 'https://drive.google.com/file/d/1hfHIYjY9IW7ipjv_-yfagdyTkqI3FQp7/view?usp=drive_link',
  },
];
