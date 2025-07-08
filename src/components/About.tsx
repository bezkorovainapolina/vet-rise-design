
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Briefcase } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Цільова підготовка",
      description: "Навчання за напрямками з найвищим попитом на ринку праці"
    },
    {
      icon: Users,
      title: "Досвідчені викладачі",
      description: "Професіонали з багаторічним досвідом у галузі логістики"
    },
    {
      icon: Award,
      title: "Сертифікація",
      description: "Офіційні документи державного зразка після завершення навчання"
    },
    {
      icon: Briefcase,
      title: "Працевлаштування",
      description: "Гарантоване працевлаштування в компаніях-партнерах проєкту"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Про проєкт
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Наш проєкт створений для надання ветеранам і ветеранкам України можливості 
            отримати нову професію в сфері логістики з подальшим гарантованим працевлаштуванням.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-200 border-border hover:border-primary/30">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
