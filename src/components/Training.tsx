
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Award, Briefcase, Bot } from "lucide-react";

export const Training = () => {
  const trainingPrograms = [
    {
      id: "driver-ce",
      title: "Водій вантажівки категорії «СЕ»",
      icon: Truck,
      image: "/lovable-uploads/dbcfaccc-a6c0-4ab5-a3fc-cf05d44cb479.png"
    },
    {
      id: "qualification-card", 
      title: "Отримання кваліфікаційної картки водія (код 95)",
      icon: Award,
      image: "/lovable-uploads/c5c8d784-7586-4bb7-9c04-2f22805e51b8.png"
    },
    {
      id: "logist",
      title: "Логіст", 
      icon: Briefcase,
      image: "/lovable-uploads/527b72f6-742d-48a0-aca1-e0bfc485f7a7.png"
    },
    {
      id: "forklift-driver",
      title: "Водій навантажувача",
      icon: Bot,
      image: "/lovable-uploads/ee27d84e-3253-419a-b00c-02597001c592.png"
    }
  ];

  return (
    <section className="py-20 bg-background" id="training">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Навчання
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {trainingPrograms.map((program) => (
            <Card key={program.id} className="overflow-hidden border-border hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-foreground leading-tight">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Реєстрація
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
