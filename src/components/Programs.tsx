
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Truck, Award, Briefcase, Bot } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      id: "driver-ce",
      title: "Водій категорії «СЕ»",
      icon: Truck,
      description: "Професійна підготовка водіїв для керування великовантажним транспортом",
      content: {
        description: `Водійське посвідчення категорії «СЕ» дозволяє керувати автомобілями категорії «С» (вантажні автомобілі масою понад 3,5 тонни) з причепом масою понад 750 кг.

Цей курс надає всі необхідні знання та навички для безпечного керування великовантажним транспортом з причепом.`,
        
        stages: [
          "Теоретична підготовка (40 годин)",
          "Практичні заняття на автодромі (60 годин)", 
          "Вождіння в умовах міського трафіку (40 годин)",
          "Складання іспиту в сервісному центрі МВС"
        ],
        
        criteria: [
          "Статус ветерана/нки російсько-української війни",
          "Наявність водійського посвідчення категорії «С»",
          "Практичний досвід водіння щонайменше 3 роки",
          "Вік від 21 року",
          "Відсутність медичних протипоказань"
        ],
        
        process: [
          "Заповнити форму реєстрації на сайті",
          "Підтвердити достовірність даних шляхом надання сканованих копій документів",
          "Пройти співбесіду з командою проєкту",
          "Підписати договір про участь у проєкті"
        ],
        
        advantages: [
          {
            title: "Попит",
            description: "Водії категорії «СЕ» постійно потрібні у логістичних компаніях, транспортних фірмах, на підприємствах, що займаються дистрибуцією, імпортом, експортом."
          },
          {
            title: "Високий рівень доходу", 
            description: "Середня заробітна плата водіїв категорії «СЕ» ... тис. Це одна з найоплачуваніших технічних спеціальностей на ринку праці, з можливістю росту залежно від напрямків перевезень."
          },
          {
            title: "Професійна мобільність",
            description: "Водії категорії «СЕ» можуть працювати на різних типах транспорту від великовантажних фур до спеціалізованої техніки."
          },
          {
            title: "Працевлаштування після навчання",
            description: "Логістичні компанії-партнери проєкту зацікавлені у наборі випускників та випускниць."
          }
        ],
        
        faq: [
          {
            question: "Чи можу я взяти участь, якщо проживаю не в тій області, де проходить навчання?",
            answer: "Так, ви можете прийняти участь в проєкті, та, на жаль, компенсація за доїзд до місця навчання та проживання не передбачена, тому всі логістичні витрати ви покриваєте за власний рахунок"
          },
          {
            question: "Чи можу я взяти участь, якщо не маю водійського посвідчення?",
            answer: "Така можливість відсутня, адже українське законодавство дозволяє отримувати водійське посвідчення категорії «СЕ» виключно за умови наявності водійського посвідчення категорії «С»."
          },
          {
            question: "Чи можу я взяти участь, якщо маю водійське посвідчення, проте не маю практичного досвіду водіння?",
            answer: "Практичний досвід водіння щонайменше три роки – це одна із обов'язкових вимог для отримання водійського посвідчення категорії «СЕ»."
          },
          {
            question: "Чи можу я взяти участь, якщо не є ветераном або ветеранкою?",
            answer: "Ні, адже проєкт ставить за мету залучити ветеранів до професій у сфері логістики"
          },
          {
            question: "Чи можу я взяти участь, якщо не збираюся працювати водієм категорії «СE»?",
            answer: "На жаль, ні. Ініціатива спрямована на задоволення потреби ринку праці у водіїв та водійках категорії «СЕ», приведення їхніх навичок у відповідність з вимогами реформування пасажирського транспорту в Україні та міжнародних стандартів."
          }
        ]
      }
    },
    {
      id: "qualification-card",
      title: "Отримання кваліфікаційної картки водія або код 95", 
      icon: Award,
      description: "Професійна компетенція для міжнародних та внутрішніх перевезень",
      content: {
        description: `Кваліфікаційна карта водія або код 95 – це документ, який підтверджує професійну компетенцію водія для здійснення міжнародних перевезень вантажів транспортом категорій «C», «D» і «E».

З серпня 2025 року, код 95 стане обов'язковим для всіх водіїв, що здійснюють перевезення для внутрішніх перевезень територією України.

Цей сертифікат підтверджує, що водій або водійка:
• має належну професійну підготовку;
• знає вимоги щодо безпеки дорожнього руху, режиму праці та відпочинку;
• розуміє правила перевезення небезпечних вантажів (ADR), роботу з тахографом, процедури вантаження/розвантаження тощо;
• допущений до керування транспортом масою понад 3,5 тонни у міжнародному та внутрішньому європейському трафіку.`,
        
        stages: ["Теоретична підготовка", "Практичні заняття", "Іспит"],
        criteria: ["Статус ветерана/нки", "Водійське посвідчення категорії C або D"],
        process: ["Реєстрація", "Навчання", "Сертифікація"],
        advantages: [],
        faq: []
      }
    },
    {
      id: "logist", 
      title: "Логіст",
      icon: Briefcase,
      description: "Управління ланцюгами поставок та логістичними процесами",
      content: {
        description: "Професійна підготовка логістів для управління ланцюгами поставок.",
        stages: ["Теоретична база", "Практичні кейси", "Стажування"],
        criteria: ["Статус ветерана/нки", "Базова освіта"],
        process: ["Відбір", "Навчання", "Працевлаштування"],
        advantages: [],
        faq: []
      }
    },
    {
      id: "forklift-driver",
      title: "Водій навантажувача", 
      icon: Bot,
      description: "Керування складською технікою та навантажувальним обладнанням",
      content: {
        description: "Навчання роботі з навантажувальною технікою на складах.",
        stages: ["Теорія безпеки", "Практика на техніці", "Сертифікація"],
        criteria: ["Статус ветерана/нки", "Медична довідка"],
        process: ["Заявка", "Навчання", "Атестація"],
        advantages: [],
        faq: []
      }
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="programs">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Програми навчання
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Оберіть програму навчання, яка найкраще відповідає вашим цілям та інтересам
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden border-border hover:border-primary/30 transition-all duration-200">
              <CardHeader className="bg-primary/5 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{program.description}</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Реєстрація
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="description" className="border-b border-border">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary">
                      Опис програми
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        {program.content.description.split('\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-3 last:mb-0">{paragraph}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="stages" className="border-b border-border">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary">
                      Етапи навчання
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ol className="space-y-2">
                        {program.content.stages.map((stage, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                              {idx + 1}
                            </span>
                            <span className="text-muted-foreground">{stage}</span>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="criteria" className="border-b border-border">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary">
                      Критерії відбору
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="space-y-2">
                        {program.content.criteria.map((criterion, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                            <span className="text-muted-foreground">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {program.id === 'driver-ce' && (
                    <>
                      <AccordionItem value="process" className="border-b border-border">
                        <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary">
                          Для участі у відборі потрібно
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <ol className="space-y-3">
                            {program.content.process.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                  {idx + 1}
                                </span>
                                <span className="text-muted-foreground">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="advantages" className="border-b border-border">
                        <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary">
                          Чому ця професія перспективна?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-4">
                            {program.content.advantages.map((advantage, idx) => (
                              <div key={idx} className="border-l-2 border-primary pl-4">
                                <h4 className="font-medium text-foreground mb-2">{advantage.title}</h4>
                                <p className="text-muted-foreground text-sm">{advantage.description}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="faq">
                        <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary">
                          Поширені питання
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-4">
                            {program.content.faq.map((item, idx) => (
                              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                                <h4 className="font-medium text-foreground mb-2">
                                  {item.question}
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                  {item.answer}
                                </p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </>
                  )}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
