
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export const News = () => {
  const news = [
    {
      id: 1,
      title: "Запуск нової програми перепідготовки водіїв категорії СЕ",
      excerpt: "Розпочинаємо набір на безкоштовний курс підготовки професійних водіїв для міжнародних перевезень",
      date: "15 грудня 2024",
      category: "Навчання"
    },
    {
      id: 2,
      title: "Підписано угоди з новими роботодавцями-партнерами",
      excerpt: "Розширюємо можливості працевлаштування випускників завдяки співпраці з провідними логістичними компаніями",
      date: "10 грудня 2024",
      category: "Партнерство"
    },
    {
      id: 3,
      title: "Успішне завершення першого потоку логістів",
      excerpt: "98% випускників програми підготовки логістів отримали пропозиції про працевлаштування",
      date: "5 грудня 2024",
      category: "Результати"
    }
  ];

  return (
    <section className="py-24 bg-background" id="news">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Новини
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Останні оновлення та досягнення проєкту професійної перепідготовки ветеранів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card key={item.id} className="card-modern group hover:border-primary/30">
              <CardHeader className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                  <span className="ml-auto px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                >
                  Читати далі
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="button-modern border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Всі новини
          </Button>
        </div>
      </div>
    </section>
  );
};
