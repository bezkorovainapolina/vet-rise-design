
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

export const News = () => {
  const mainNews = {
    id: 1,
    title: "Запуск нової програми перепідготовки водіїв категорії СЕ",
    excerpt: "Розпочинаємо набір на безкоштовний курс підготовки професійних водіїв для міжнародних перевезень. Програма включає теоретичну підготовку та практичні заняття з досвідченими інструкторами.",
    date: "15 грудня 2024",
    category: "Навчання",
    icon: TrendingUp,
    featured: true
  };

  const sideNews = [
    {
      id: 2,
      title: "Підписано угоди з новими роботодавцями-партнерами",
      excerpt: "Розширюємо можливості працевлаштування випускників завдяки співпраці з провідними логістичними компаніями",
      date: "10 грудня 2024",
      category: "Партнерство",
      icon: Users
    },
    {
      id: 3,
      title: "Успішне завершення першого потоку логістів",
      excerpt: "98% випускників програми підготовки логістів отримали пропозиції про працевлаштування",
      date: "5 грудня 2024",
      category: "Результати",
      icon: Award
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="news">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Останні новини
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Слідкуйте за оновленнями та досягненнями проєкту професійної перепідготовки ветеранів
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured News - Large Card */}
          <Card className="lg:col-span-2 group relative overflow-hidden bg-white border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <mainNews.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{mainNews.date}</span>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {mainNews.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                {mainNews.title}
              </h3>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {mainNews.excerpt}
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-6 py-3 group/btn"
              >
                Читати повністю
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
            
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>

          {/* Side News - Stacked Cards */}
          <div className="space-y-6">
            {sideNews.map((item) => (
              <Card key={item.id} className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                        <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.excerpt}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-primary hover:text-primary/80 text-sm group/btn"
                      >
                        Детальніше
                        <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl px-8 py-4 text-lg font-semibold"
          >
            Усі новини проєкту
          </Button>
        </div>
      </div>
    </section>
  );
};
