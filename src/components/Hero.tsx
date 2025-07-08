
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToTraining = () => {
    const element = document.querySelector('#training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 pt-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Професійна перепідготовка ветеранів у сфері логістики
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Безкоштовні курси для ветеранів і ветеранок України з гарантованим працевлаштуванням
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg bg-primary hover:bg-primary/90"
            onClick={scrollToTraining}
          >
            Подати заявку
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};
