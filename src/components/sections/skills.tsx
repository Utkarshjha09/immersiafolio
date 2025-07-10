import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Rocket, Terminal, Braces, Cpu, PenTool, BrainCircuit, Bot } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code className="h-8 w-8 text-accent" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    category: "MERN Stack",
    icon: <Globe className="h-8 w-8 text-accent" />,
    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Redux"],
  },
  {
    category: "Data Science & ML",
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    skills: ["Machine Learning", "Data Analysis", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "Hardware & Design",
    icon: <Cpu className="h-8 w-8 text-accent" />,
    skills: ["Verilog", "VLSI", "Arduino IDE", "Raspberry Pi", "UI/UX Design"],
  },
  {
    category: "Development Tools",
    icon: <Terminal className="h-8 w-8 text-accent" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
  {
    category: "Concepts",
    icon: <Rocket className="h-8 w-8 text-accent" />,
    skills: ["REST APIs", "Data Structures", "Agile Methodologies"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 lg:py-32 border-t bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">My Technical Skills</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            A versatile developer with a passion for building robust applications and exploring diverse technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <Card key={category.category} className="hover:shadow-lg hover:shadow-accent/10 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {category.icon}
                <CardTitle className="font-headline text-2xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
