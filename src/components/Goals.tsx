
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Award, Heart, Lightbulb } from "lucide-react";

export const Goals = () => {
  const mainGoals = [
    {
      icon: Target,
      title: "Професійна реінтеграція",
      description: "Надання ветеранам нових професійних навичок для успішної адаптації до цивільного життя",
    },
    {
      icon: TrendingUp,
      title: "Економічна стабільність",
      description: "Забезпечення стабільного доходу через працевлаштування в перспективній галузі логістики",
    }
  ];

  const additionalGoals = [
    {
      icon: Users,
      title: "Соціальна підтримка",
      description: "Створення спільноти професіоналів та надання всебічної підтримки в процесі навчання",
    },
    {
      icon: Award,
      title: "Якісна освіта",
      description: "Надання сучасних знань і навичок відповідно до європейських стандартів та вимог ринку",
    },
    {
      icon: Heart,
      title: "Психологічна підтримка",
      description: "Комплексний супровід та адаптація до нових умов професійної діяльності",
    },
    {
      icon: Lightbulb,
      title: "Інноваційний підхід",
      description: "Використання сучасних методик навчання та найновіших технологій у логістиці",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30" id="goals">
      <div className="section-container section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Цілі проєкту
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Наші основні завдання спрямовані на всебічну підтримку ветеранів у їхньому професійному розвитку
          </p>
        </div>

        {/* Main Goals - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {mainGoals.map((goal, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-10 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <goal.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {goal.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-secondary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Additional Goals - Smaller Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalGoals.map((goal, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <goal.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground">
                    {goal.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </CardContent>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
