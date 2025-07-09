
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Award } from "lucide-react";

export const Goals = () => {
  const goals = [
    {
      icon: Target,
      title: "Професійна реінтеграція",
      description: "Надання ветеранам нових професійних навичок для успішної адаптації до цивільного життя",
    },
    {
      icon: TrendingUp,
      title: "Економічна стабільність",
      description: "Забезпечення стабільного доходу через працевлаштування в перспективній галузі логістики",
    },
    {
      icon: Users,
      title: "Соціальна підтримка",
      description: "Створення спільноти професіоналів та надання всебічної підтримки в процесі навчання",
    },
    {
      icon: Award,
      title: "Якісна освіта",
      description: "Надання сучасних знань і навичок відповідно до європейських стандартів та вимог ринку",
    }
  ];

  return (
    <section className="py-24 bg-wave" id="goals">
      <div className="section-container section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Цілі проєкту
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Наші основні завдання спрямовані на всебічну підтримку ветеранів у їхньому професійному розвитку
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="card-modern p-8 group">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <goal.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {goal.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
