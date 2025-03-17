import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Home</h1>
      <Button variant="outline" size={'lg'}>Click me</Button>
    </div>
  );
}
