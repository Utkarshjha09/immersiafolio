'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, Wand2 } from 'lucide-react';
import Image from 'next/image';

export function AiDescriptionGeneratorForm() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setDescription('');
    }
  };

  const handleGenerate = async () => {
    if (!file) {
      toast({
        title: 'No Image Selected',
        description: 'Please upload an image first.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const imageDataUri = reader.result as string;
        try {
          const result = await generateProjectDescription({ imageDataUri });
          setDescription(result.description);
          toast({
            title: 'Description Generated!',
            description: 'The AI has crafted a description for your project.',
          });
        } catch (error) {
            console.error(error)
          toast({
            title: 'Generation Failed',
            description: 'Could not generate a description. Please try again.',
            variant: 'destructive',
          });
        } finally {
            setIsLoading(false);
        }
      };
      reader.onerror = () => {
        toast({
          title: 'File Read Error',
          description: 'Could not read the selected image file.',
          variant: 'destructive',
        });
        setIsLoading(false);
      };
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    toast({
      title: 'Copied to Clipboard!',
      description: 'The description has been copied.',
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Project Image</CardTitle>
        <CardDescription>Select an image to generate a description for.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="project-image">Image File</Label>
          <Input id="project-image" type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        {previewUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-md border">
            <Image src={previewUrl} alt="Project preview" fill className="object-cover" />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="project-description">Generated Description</Label>
          <Textarea
            id="project-description"
            placeholder="AI-generated description will appear here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            readOnly={isLoading}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
        <Button onClick={handleGenerate} disabled={!file || isLoading} className="w-full sm:w-auto">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
          Generate Description
        </Button>
        {description && (
          <Button onClick={handleCopy} variant="outline" className="w-full sm:w-auto">
            Copy Text
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
