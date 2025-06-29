import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const educationHistory = [
  {
    school: "S. R. D.A.V. Pupri Sitamarhi",
    degree: "10th Standard",
    year: "2018", // You can change this
    description: "Completed my secondary education, building a strong foundation in core subjects."
  },
  // You can add more education entries here
];

export default function Education() {
  return (
    <section id="education" className="w-full py-20 lg:py-32 border-t bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Education</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            My academic background.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border/50 rounded-full"></div>
          <div className="space-y-12">
            {educationHistory.map((edu, index) => (
              <div key={index} className="relative flex items-center group">
                 <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card group-hover:scale-110 transition-transform"></div>
                 <Card className="w-full ml-8 md:ml-0 md:w-5/12 md:group-odd:ml-auto md:group-even:mr-auto hover:shadow-lg transition-shadow">
                   <CardHeader>
                     <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-xl">{edu.school}</CardTitle>
                            <CardDescription>{edu.degree}</CardDescription>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">{edu.year}</span>
                     </div>
                   </CardHeader>
                   <CardContent>
                    <p className="text-muted-foreground text-left">{edu.description}</p>
                   </CardContent>
                 </Card>
              </div>
            ))}
             <div className="text-center text-muted-foreground py-4">
                <p>Further education details will be added soon.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
