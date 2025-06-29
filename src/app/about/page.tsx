import Image from 'next/image';

const aboutImages = [
  { src: 'https://placehold.co/600x800.png', alt: 'Event photo 1', hint: 'tech event' },
  { src: 'https://placehold.co/600x400.png', alt: 'Event photo 2', hint: 'hackathon team' },
  { src: 'https://placehold.co/600x400.png', alt: 'Event photo 3', hint: 'presentation award' },
  { src: 'https://placehold.co/600x800.png', alt: 'Event photo 4', hint: 'team discussion' },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-foreground/80">
            <h2 className="font-headline text-4xl font-bold text-primary">About Me</h2>
            <p>
              Hello, I'm Utkarsh Jha. I am a dedicated and versatile professional with a diverse skill set that includes web development, Verilog, embedded systems, data science, and UI/UX design. I am passionate about leveraging technology to solve real-world problems and create intuitive, efficient, and beautiful digital experiences.
            </p>
            <p>
              Whether I'm building a full-stack web application, designing a custom microprocessor, analyzing complex datasets, or crafting beautiful user interfaces, I bring a commitment to quality and a drive for innovation. My journey in tech is fueled by a relentless curiosity and a desire to build things that make a difference.
            </p>
            <p>
              Beyond my technical skills, I am a collaborative team player who thrives in dynamic environments. I'm always eager to learn, grow, and take on new challenges. If you have an exciting project or an innovative idea, I would love to connect and explore how we can work together.
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
