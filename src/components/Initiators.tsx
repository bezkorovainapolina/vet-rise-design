
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award } from "lucide-react";

export const Initiators = () => {
  const initiators = [
    {
      icon: Building,
      title: "Державні партнери",
      description: "Міністерство розвитку громад та територій України підтримує ініціативу професійної перепідготовки ветеранів"
    },
    {
      icon: Users,
      title: "Міжнародна підтримка",
      description: "Програма реалізується за підтримки США та міжнародних організацій IREX"
    },
    {
      icon: Award,
      title: "Фундація розвитку",
      description: "Фундація інституційного розвитку забезпечує якісну реалізацію освітніх програм"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="initiators">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ініціатори проєкту
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Проєкт реалізується спільними зусиллями державних та міжнародних партнерів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiators.map((initiator, index) => (
            <Card key={index} className="card-modern p-8 text-center group">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <initiator.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {initiator.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {initiator.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
