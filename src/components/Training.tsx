
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Award, Briefcase, Bot, ArrowRight } from "lucide-react";

export const Training = () => {
  const trainingPrograms = [
    {
      id: "driver-ce",
      title: "Водій вантажівки категорії «СЕ»",
      icon: Truck,
      image: "/lovable-uploads/dbcfaccc-a6c0-4ab5-a3fc-cf05d44cb479.png",
      description: "Професійна підготовка для керування великовантажним транспортом"
    },
    {
      id: "qualification-card", 
      title: "Отримання кваліфікаційної картки водія (код 95)",
      icon: Award,
      image: "/lovable-uploads/c5c8d784-7586-4bb7-9c04-2f22805e51b8.png",
      description: "Професійна компетенція для міжнародних перевезень"
    },
    {
      id: "logist",
      title: "Логіст", 
      icon: Briefcase,
      image: "/lovable-uploads/527b72f6-742d-48a0-aca1-e0bfc485f7a7.png",
      description: "Управління логістичними процесами та ланцюгами поставок"
    },
    {
      id: "forklift-driver",
      title: "Водій навантажувача",
      icon: Bot,
      image: "/lovable-uploads/ee27d84e-3253-419a-b00c-02597001c592.png",
      description: "Керування складською технікою та навантажувальним обладнанням"
    }
  ];

  return (
    <section className="py-24 bg-background" id="training">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Навчання
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Оберіть програму навчання, яка найкраще відповідає вашим цілям та інтересам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingPrograms.map((program) => (
            <Card key={program.id} className="card-modern overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="text-overlay">
                  <program.icon className="inline-block w-4 h-4 mr-2" />
                  {program.title}
                </div>
              </div>
              
              <CardHeader className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <Button 
                  className="w-full button-modern bg-primary text-primary-foreground hover:bg-primary/90 group/btn"
                  size="lg"
                >
                  Реєстрація
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
