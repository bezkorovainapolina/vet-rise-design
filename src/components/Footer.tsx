
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Про проєкт</h3>
            <p className="text-slate-300">
              Професійна перепідготовка ветеранів України в сфері логістики 
              з гарантованим працевлаштуванням
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакти</h3>
            <div className="space-y-2 text-slate-300">
              <p>Email: info@logistics-veterans.ua</p>
              <p>Телефон: +380 (44) 123-45-67</p>
              <p>Адреса: м. Київ, вул. Хрещатик, 1</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Програми</h3>
            <div className="space-y-2 text-slate-300">
              <p>Водій категорії «СЕ»</p>
              <p>Кваліфікаційна картка водія</p>
              <p>Логіст</p>
              <p>Водій навантажувача</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-slate-700 mb-6" />
        
        <div className="text-center text-slate-400">
          <p>&copy; 2024 Професійна перепідготовка ветеранів у сфері логістики. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};
