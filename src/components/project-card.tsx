import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';
import { FileText, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectCard({ project, index }: { project: Project, index: number }) {
  const readmeLink = project.readmeUrl || `${project.sourceUrl}#readme`;

  return (
    <div className="[perspective:1000px]">
        <Card className={cn(
            "h-full overflow-hidden flex flex-col group border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2",
            "hover:[transform:rotateX(5deg)_rotateY(-5deg)]"
            )}>
        <div className="relative overflow-hidden">
            <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={project.imageHint}
            />
        </div>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
            </div>
        </CardContent>
        <CardFooter>
            <div className="flex gap-4">
            {project.readmeUrl && (
                <Button asChild>
                <a href={readmeLink} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> README
                </a>
                </Button>
            )}
            {project.sourceUrl && (
                <Button asChild variant="outline">
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                </a>
                </Button>
            )}
            </div>
        </CardFooter>
        </Card>
    </div>
  );
}