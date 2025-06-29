import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">My Work</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            A selection of projects that I&apos;m proud of.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
