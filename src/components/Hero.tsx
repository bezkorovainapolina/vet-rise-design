
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Професійна перепідготовка ветеранів у сфері логістики
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Безкоштовні курси для ветеранів і ветеранок України з гарантованим працевлаштуванням
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-4 text-lg">
            Подати заявку
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            Дізнатися більше
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};
