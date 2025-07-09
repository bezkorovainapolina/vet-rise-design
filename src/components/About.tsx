
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Briefcase } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Цільова підготовка",
      description: "Навчання за напрямками з найвищим попитом на ринку праці в сфері логістики та транспорту"
    },
    {
      icon: Users,
      title: "Досвідчені викладачі",
      description: "Професіонали з багаторічним досвідом у галузі логістики та міжнародних перевезень"
    },
    {
      icon: Award,
      title: "Офіційна сертифікація",
      description: "Документи державного зразка та міжнародні сертифікати після завершення навчання"
    },
    {
      icon: Briefcase,
      title: "Гарантоване працевлаштування",
      description: "Працевлаштування в компаніях-партнерах проєкту з конкурентною заробітною платою"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="about">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Про проєкт
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наш проєкт створений для надання ветеранам і ветеранкам України можливості 
                отримати нову професію в сфері логістики з подальшим гарантованим працевлаштуванням.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ми пропонуємо комплексний підхід до професійної перепідготовки, що включає 
                теоретичну підготовку, практичне навчання та подальший супровід у працевлаштуванні.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
