
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-background">Про проєкт</h3>
            <p className="text-background/80">
              Професійна перепідготовка ветеранів України в сфері логістики 
              з гарантованим працевлаштуванням
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-background">Контакти</h3>
            <div className="space-y-2 text-background/80">
              <p>Email: info@logistics-veterans.ua</p>
              <p>Телефон: +380 (44) 123-45-67</p>
              <p>Адреса: м. Київ, вул. Хрещатик, 1</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-background">Програми</h3>
            <div className="space-y-2 text-background/80">
              <p>Водій категорії «СЕ»</p>
              <p>Кваліфікаційна картка водія</p>
              <p>Логіст</p>
              <p>Водій навантажувача</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-background/20 mb-6" />
        
        <div className="text-center text-background/60">
          <p>&copy; 2024 Професійна перепідготовка ветеранів у сфері логістики. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};
