
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
    <section className="py-24 bg-gradient-to-br from-blue-50/50 to-slate-50" id="about">
      <div className="section-container section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Наші переваги
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Чому наш проєкт — найкращий вибір для професійної перепідготовки ветеранів у сфері логістики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
          
          {/* Large featured card - spans multiple columns */}
          <Card className="md:col-span-2 lg:col-span-1 group relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-0 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Комплексний підхід
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ми пропонуємо повний цикл підтримки: від навчання до працевлаштування та подальшого професійного супроводу
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Навчання
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    Сертифікація
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                    Працевлаштування
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
