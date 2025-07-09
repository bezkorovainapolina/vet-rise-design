
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Award, Briefcase, Bot, ArrowRight, Clock, Users } from "lucide-react";

export const Training = () => {
  const trainingPrograms = [
    {
      id: "driver-ce",
      title: "Водій вантажівки категорії «СЕ»",
      icon: Truck,
      image: "/lovable-uploads/dbcfaccc-a6c0-4ab5-a3fc-cf05d44cb479.png",
      description: "Професійна підготовка для керування великовантажним транспортом",
      duration: "3 місяці",
      students: "24 учасника",
      badge: "Популярно"
    },
    {
      id: "qualification-card", 
      title: "Кваліфікаційна картка водія (код 95)",
      icon: Award,
      image: "/lovable-uploads/c5c8d784-7586-4bb7-9c04-2f22805e51b8.png",
      description: "Професійна компетенція для міжнародних перевезень",
      duration: "1 місяць",
      students: "30 учасників"
    },
    {
      id: "logist",
      title: "Логіст", 
      icon: Briefcase,
      image: "/lovable-uploads/527b72f6-742d-48a0-aca1-e0bfc485f7a7.png",
      description: "Управління логістичними процесами та ланцюгами поставок",
      duration: "4 місяці",
      students: "18 учасників",
      badge: "Новинка"
    },
    {
      id: "forklift-driver",
      title: "Водій навантажувача",
      icon: Bot,
      image: "/lovable-uploads/ee27d84e-3253-419a-b00c-02597001c592.png",
      description: "Керування складською технікою та навантажувальним обладнанням",
      duration: "2 місяці",
      students: "16 учасників"
    }
  ];

  return (
    <section className="py-24 bg-background" id="training">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Програми навчання
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Оберіть програму навчання, яка найкраще відповідає вашим цілям та інтересам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingPrograms.map((program, index) => (
            <Card key={program.id} className={`group relative overflow-hidden bg-white border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index === 0 ? 'md:row-span-2' : ''}`}>
              {program.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    program.badge === 'Популярно' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    {program.badge}
                  </span>
                </div>
              )}
              
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <program.icon className="w-5 h-5" />
                    <span className="text-sm font-medium opacity-90">Професійне навчання</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    {program.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{program.students}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl py-6 text-base font-semibold group/btn transition-all duration-300"
                  size="lg"
                >
                  Подати заявку
                  <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
