import { AiDescriptionGeneratorForm } from "@/components/ai-description-generator-form";
import { Wand2 } from "lucide-react";

export default function AiGeneratorPage() {
  return (
    <div className="container mx-auto max-w-2xl py-16">
      <div className="flex flex-col items-center text-center mb-8">
        <Wand2 className="h-12 w-12 text-accent mb-4" />
        <h1 className="text-4xl font-headline font-bold">AI Project Description Generator</h1>
        <p className="mt-2 text-muted-foreground">
          Upload an image of your project and let AI craft a compelling description for you.
        </p>
      </div>
      <AiDescriptionGeneratorForm />
    </div>
  );
}
