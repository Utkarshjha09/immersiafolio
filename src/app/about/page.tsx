import Image from 'next/image';

const aboutImages = [
  { src: 'https://placehold.co/600x800.png', alt: 'Event photo 1', hint: 'tech event' },
  { src: 'https://placehold.co/600x400.png', alt: 'Event photo 2', hint: 'hackathon team' },
  { src: 'https://placehold.co/600x400.png', alt: 'Event photo 3', hint: 'presentation award' },
  { src: 'https://placehold.co/600x800.png', alt: 'Event photo 4', hint: 'team discussion' },
];

export default function AboutPage() {
  return (
    <div>
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-foreground/80 text-justify">
            <h2 className="font-headline text-4xl font-bold text-primary text-left">About Me</h2>
            <p>
              I’m a multi-disciplinary developer with a strong command of Data Science, Full-Stack Web Development (MERN Stack), and Embedded Systems. I’m driven by the challenge of integrating data, software, and hardware to create scalable, efficient, and impactful solutions. Whether it’s training machine learning models, engineering real-time embedded systems, or deploying modern web applications, I’m comfortable operating across the full technology stack.
            </p>
            <p>
              My core technical strengths include Python, Pandas, NumPy, and Matplotlib for data analysis and ML, as well as React, Node.js, Express.js, MongoDB, and Next.js for full-stack development. I also bring hands-on experience in hardware prototyping and digital logic design using Verilog, Arduino, Raspberry Pi, and VLSI tools.
            </p>
            <p>
              I’m well-versed in key development principles like Object-Oriented Programming, Data Structures & Algorithms, and RESTful APIs, and I rely on modern tools such as Git, GitHub, VS Code, Postman, and Vercel for efficient workflow and collaboration.
            </p>
            <p>
              As a lifelong learner, I’m always exploring new technologies and pushing boundaries. I take pride in writing clean, maintainable code and building systems that not only work—but scale, adapt, and solve real-world problems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((image, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-lg ${index === 0 || index === 3 ? 'md:row-span-2' : ''}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={index === 0 || index === 3 ? 800 : 400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
