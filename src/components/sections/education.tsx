'use client';
import Stepper, { Step } from "@/components/ui/stepper";

export default function Education() {
  const educationHistory = [
    {
      school: "S.R.D.A.V. Public School, Pupri",
      degree: "10th Standard",
      year: "2018",
      description: "Completed my secondary education, building a strong foundation in core subjects."
    },
    {
      school: "J.P. Central School, Samastipur",
      degree: "12th Standard (Science)",
      year: "2020",
      description: "Excelled in my higher secondary education with a focus on Physics, Chemistry, and Mathematics."
    },
    {
      school: "Chandigarh Engineering College",
      degree: "B.Tech, Electronics & Communication",
      year: "2021-2025 (Pursuing)",
      description: "Currently in my third year, deepening my expertise in electronics, communication systems, and hands-on project development."
    }
  ];

  return (
    <section id="education" className="w-full py-20 lg:py-32 border-t bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Education</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            My academic background.
          </p>
        </div>
        
        <Stepper>
          {educationHistory.map((edu, index) => (
            <Step key={index}>
              <h3 className="font-bold text-xl font-headline text-foreground">{edu.school}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree} &bull; {edu.year}</p>
              <p className="mt-2 text-foreground/80">{edu.description}</p>
            </Step>
          ))}
        </Stepper>

      </div>
    </section>
  );
}
