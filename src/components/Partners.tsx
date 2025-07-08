
import { Card, CardContent } from "@/components/ui/card";

export const Partners = () => {
  const partners = [
    { 
      name: "Міністерство розвитку громад та територій України", 
      logo: "/lovable-uploads/d961b87f-305c-4894-8278-653afb62ca53.png" 
    },
    { 
      name: "United States Department of State", 
      logo: "/lovable-uploads/85933ed3-dc20-4268-a0f6-80726563f322.png" 
    },
    { 
      name: "IREX", 
      logo: "/lovable-uploads/380cd2dc-fcbf-4f28-b930-54a4cd378dd1.png" 
    },
    { 
      name: "Програма реінтеграції ветеранів", 
      logo: "/lovable-uploads/1c6011dc-92c6-43ab-80b7-66ce51f2f21b.png" 
    },
    { 
      name: "Фундація інституційного розвитку", 
      logo: "/lovable-uploads/c1761049-dc6c-4118-ba48-bc43d48c26f6.png" 
    },
    { 
      name: "United States of America", 
      logo: "/lovable-uploads/a2528900-1b32-4743-bbef-7b2bd255f4b8.png" 
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="partners">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Наші партнери
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Провідні компанії галузі, які підтримують проєкт та забезпечують 
            працевлаштування випускників
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border">
              <CardContent className="p-6 flex items-center justify-center h-32">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter hover:filter-none transition-all"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
