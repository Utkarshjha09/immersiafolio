'use client';
import { Timeline } from '@/components/ui/timeline';

export default function Education() {
  const educationHistory = [
    {
      title: "S.R.D.A.V. Public School, Pupri",
      subtitle: "10th Standard",
      date: "2018",
      description: "Completed my secondary education, building a strong foundation in core subjects."
    },
    {
      title: "J.P. Central School, Samastipur",
      subtitle: "12th Standard (Science)",
      date: "2020",
      description: "Excelled in my higher secondary education with a focus on Physics, Chemistry, and Mathematics."
    },
    {
      title: "Chandigarh Engineering College",
      subtitle: "B.Tech, Electronics & Communication",
      date: "2021-2025",
      description: "Currently in my third year, deepening my expertise in electronics, communication systems, and hands-on project development."
    }
  ];

  return (
    <section id="education" className="w-full py-20 lg:py-32 border-t bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Education</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            My academic background.
          </p>
        </div>
        
        <Timeline items={educationHistory} />

      </div>
    </section>
  );
}
