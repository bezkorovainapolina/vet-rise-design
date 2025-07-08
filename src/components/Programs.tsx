
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Truck, 
  CreditCard, 
  Package, 
  Forklift,
  MapPin,
  Clock,
  CheckCircle,
  Users,
  DollarSign,
  ArrowRight,
  Briefcase
} from "lucide-react";

export const Programs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Напрямки навчання
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Оберіть професію, яка найкраще відповідає вашим інтересам та цілям
          </p>
        </div>

        {/* Program 1: Водій категорії СЕ */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-blue-600 text-white p-8">
            <div className="flex items-center gap-4">
              <Truck className="h-12 w-12" />
              <div>
                <CardTitle className="text-3xl mb-2">Водій категорії «СЕ»</CardTitle>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Найпопулярніший напрямок
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {/* Опис */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Опис</h3>
                <p className="text-slate-600 mb-4">
                  Водій категорії «СЕ» — це спеціаліст, який має право керувати автомобілями 
                  з причепом, загальна маса яких перевищує 3500 кг. Це включає великовантажні 
                  фури, автопоїзди та іншу важку техніку для перевезення вантажів.
                </p>
                <p className="text-slate-600">
                  Професія передбачає відповідальність за безпечне транспортування різних типів 
                  вантажів, дотримання правил дорожнього руху та графіків доставки.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Регіони</h3>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Київ та Київська область</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Дніпро та Дніпропетровська область</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Львів та Львівська область</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Одеса та Одеська область</span>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Етапи навчання */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Етапи навчання</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Етап 1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Теоретична підготовка</h4>
                    <p className="text-sm text-slate-600">
                      Вивчення правил дорожнього руху, конструкції автомобіля, 
                      основ безпечного керування
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-green-600" />
                      <span className="font-semibold">Етап 2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Практичні заняття</h4>
                    <p className="text-sm text-slate-600">
                      Навчання керуванню на майданчику та в умовах міського трафіку 
                      з інструктором
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold">Етап 3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Іспит та сертифікація</h4>
                    <p className="text-sm text-slate-600">
                      Складання теоретичного та практичного іспитів, 
                      отримання посвідчення
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Критерії відбору */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Критерії відбору</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Для участі у відборі потрібно:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Заповнити форму реєстрації на сайті</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Підтвердити достовірність даних шляхом надання за запитом фахівця проєкту 
                      сканованих копій документів, які ідентифікують особу, засвідчують наявність 
                      водійського посвідчення відповідної категорії та статус ветерана російсько-української війни
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Пройти співбесіду з командою проєкту</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Підписати договір про участь у проєкті</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Переваги */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Чому ця професія перспективна?</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <h4 className="font-semibold">Високий попит</h4>
                    </div>
                    <p className="text-slate-600">
                      Водії категорії «СЕ» постійно потрібні у логістичних компаніях, 
                      транспортних фірмах, на підприємствах, що займаються дистрибуцією, 
                      імпортом, експортом.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold">Високий рівень доходу</h4>
                    </div>
                    <p className="text-slate-600">
                      Це одна з найоплачуваніших технічних спеціальностей на ринку праці, 
                      з можливістю росту залежно від напрямків перевезень.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <ArrowRight className="h-6 w-6 text-purple-600" />
                      <h4 className="font-semibold">Професійна мобільність</h4>
                    </div>
                    <p className="text-slate-600">
                      Водії категорії «СЕ» можуть працювати на різних типах транспорту — 
                      від великовантажних фур до спеціалізованої техніки.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="h-6 w-6 text-orange-600" />
                      <h4 className="font-semibold">Працевлаштування після навчання</h4>
                    </div>
                    <p className="text-slate-600">
                      Логістичні компанії-партнери проєкту зацікавлені у наборі 
                      випускників та випускниць.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Поширені питання</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">
                      Чи можу я взяти участь, якщо проживаю не в тій області, де проходить навчання?
                    </h4>
                    <p className="text-slate-600">
                      Так, ви можете прийняти участь в проєкті, та, на жаль, компенсація за доїзд 
                      до місця навчання та проживання не передбачена, тому всі логістичні витрати 
                      ви покриваєте за власний рахунок.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">
                      Чи можу я взяти участь, якщо не маю водійського посвідчення?
                    </h4>
                    <p className="text-slate-600">
                      Така можливість відсутня, адже українське законодавство дозволяє отримувати 
                      водійське посвідчення категорії «СЕ» виключно за умови наявності водійського 
                      посвідчення категорії «С».
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">
                      Чи можу я взяти участь, якщо маю водійське посвідчення, проте не маю 
                      практичного досвіду водіння?
                    </h4>
                    <p className="text-slate-600">
                      Практичний досвід водіння щонайменше три роки – це одна із обов'язкових 
                      вимог для отримання водійського посвідчення категорії «СЕ».
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">
                      Чи можу я взяти участь, якщо не є ветераном або ветеранкою?
                    </h4>
                    <p className="text-slate-600">
                      Ні, адже проєкт ставить за мету залучити ветеранів до професій у сфері логістики.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">
                      Чи можу я взяти участь, якщо не збираюся працювати водієм категорії «СE»?
                    </h4>
                    <p className="text-slate-600">
                      На жаль, ні. Ініціатива спрямована на задоволення потреби ринку праці у водіях 
                      та водійках категорії «СЕ», приведення їхніх навичок у відповідність з вимогами 
                      реформування пасажирського транспорту в Україні та міжнародних стандартів.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="px-8 py-4">
                Реєстрація
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Program 2: Кваліфікаційна картка */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-green-600 text-white p-8">
            <div className="flex items-center gap-4">
              <CreditCard className="h-12 w-12" />
              <div>
                <CardTitle className="text-3xl mb-2">
                  Отримання кваліфікаційної картки водія або код 95
                </CardTitle>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Обов'язково з серпня 2025
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Опис</h3>
              <p className="text-slate-600 mb-4">
                Кваліфікаційна карта водія або код 95 – це документ, який підтверджує професійну 
                компетенцію водія для здійснення міжнародних перевезень вантажів транспортом 
                категорій «C», «D» і «E».
              </p>
              <p className="text-slate-600 mb-6">
                З серпня 2025 року, код 95 стане обов'язковим для всіх водіїв, що здійснюють 
                перевезення для внутрішніх перевезень територією України.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Цей сертифікат підтверджує, що водій або водійка:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>має належну професійну підготовку</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>знає вимоги щодо безпеки дорожнього руху, режиму праці та відпочинку</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      розуміє правила перевезення небезпечних вантажів (ADR), роботу з тахографом, 
                      процедури вантаження/розвантаження тощо
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      допущений до керування транспортом масою понад 3,5 тонни у міжнародному 
                      та внутрішньому європейському трафіку
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="px-8 py-4">
                Реєстрація
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Program 3: Логіст */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-purple-600 text-white p-8">
            <div className="flex items-center gap-4">
              <Package className="h-12 w-12" />
              <div>
                <CardTitle className="text-3xl mb-2">Логіст</CardTitle>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Перспективний напрямок
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <p className="text-slate-600 mb-6">
                Детальна інформація про програму навчання логістів буде доступна найближчим часом.
              </p>
            </div>
            <div className="text-center">
              <Button size="lg" className="px-8 py-4">
                Реєстрація
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Program 4: Водій навантажувача */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-orange-600 text-white p-8">
            <div className="flex items-center gap-4">
              <Forklift className="h-12 w-12" />
              <div>
                <CardTitle className="text-3xl mb-2">Водій навантажувача</CardTitle>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Високий попит
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <p className="text-slate-600 mb-6">
                Детальна інформація про програму навчання водіїв навантажувача 
                буде доступна найближчим часом.
              </p>
            </div>
            <div className="text-center">
              <Button size="lg" className="px-8 py-4">
                Реєстрація
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
