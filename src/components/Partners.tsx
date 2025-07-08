
import { Card, CardContent } from "@/components/ui/card";

export const Partners = () => {
  // Placeholder для логотипів партнерів
  const partners = [
    { name: "Партнер 1", logo: "/placeholder.svg" },
    { name: "Партнер 2", logo: "/placeholder.svg" },
    { name: "Партнер 3", logo: "/placeholder.svg" },
    { name: "Партнер 4", logo: "/placeholder.svg" },
    { name: "Партнер 5", logo: "/placeholder.svg" },
    { name: "Партнер 6", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Наші партнери
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Провідні компанії галузі, які підтримують проєкт та забезпечують 
            працевлаштування випускників
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center justify-center h-24">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
