
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-background">Про проєкт</h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                Професійна перепідготовка ветеранів України в сфері логістики 
                з гарантованим працевлаштуванням та всебічною підтримкою
              </p>
            </div>
            
            {/* Logo Battery */}
            <div className="grid grid-cols-3 gap-4 max-w-xs">
              <img src="/lovable-uploads/d961b87f-305c-4894-8278-653afb62ca53.png" alt="Partner" className="h-12 object-contain opacity-60" />
              <img src="/lovable-uploads/85933ed3-dc20-4268-a0f6-80726563f322.png" alt="Partner" className="h-12 object-contain opacity-60" />
              <img src="/lovable-uploads/380cd2dc-fcbf-4f28-b930-54a4cd378dd1.png" alt="Partner" className="h-12 object-contain opacity-60" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-background">Контакти</h3>
            <div className="space-y-2 text-background/80">
              <p>Email: info@logistics-veterans.ua</p>
              <p>Телефон: +380 (44) 123-45-67</p>
              <p>Адреса: м. Київ, вул. Хрещатик, 1</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-background">Програми</h3>
            <div className="space-y-2 text-background/80">
              <p>Водій категорії «СЕ»</p>
              <p>Кваліфікаційна картка водія</p>
              <p>Логіст</p>
              <p>Водій навантажувача</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-background/20 mb-8" />
        
        <div className="space-y-4">
          <div className="text-center text-background/60 text-sm">
            <p>&copy; 2024 Професійна перепідготовка ветеранів у сфері логістики. Всі права захищені.</p>
          </div>
          <div className="text-center text-background/40 text-xs">
            <p>
              Проєкт реалізується за підтримки Уряду США та Державного департаменту США. 
              Думки, висловлені в цьому матеріалі, належать авторам і не обов'язково відображають 
              офіційну позицію Уряду США.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
