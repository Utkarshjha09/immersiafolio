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
    title: 'ESP32-Blynk-Notification-System',
    description: 'An IoT project utilizing an ESP32 microcontroller and the Blynk platform to send real-time notifications based on sensor data or events.',
    imageUrl: '/ESP32-Blynk-Notification-System.png',
    imageHint: 'iot notification',
    tags: ['ESP32', 'Blynk', 'IoT', 'Arduino IDE'],
    sourceUrl: 'https://github.com/Utkarshjha09/ESP32-Blynk-Notification-System',
  },
  {
    title: 'Security System with Face Recognition',
    description: 'An IoT security system using a Raspberry Pi 4. When an IR sensor detects a person, the camera captures their image and performs facial recognition. If a match is found, a Telegram notification is sent with the person\'s name and image; otherwise, an "Unknown person" alert is sent.',
    imageUrl: '/Security System with Face Recognition.png',
    imageHint: 'security camera',
    tags: ['Raspberry Pi', 'Python', 'OpenCV', 'IoT', 'Telegram API', 'Machine Learning'],
    sourceUrl: 'https://github.com/Utkarshjha09/FaceRecognitionSystem/blob/main/README.md',
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
