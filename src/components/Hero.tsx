
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToTraining = () => {
    const element = document.querySelector('#training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20 bg-geometric">
      <div className="section-container section-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Професійна</span>
                <span className="text-primary block">перепідготовка</span>
                <span className="text-primary">ветеранів</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Безкоштовні курси для ветеранів і ветеранок України з гарантованим працевлаштуванням у сфері логістики
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="button-modern bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                onClick={scrollToTraining}
              >
                Подати заявку
              </Button>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="image-card h-96 overflow-hidden">
              <img 
                src="/lovable-uploads/8d468f07-de4f-4b29-8f00-eea8d3c82fd3.png" 
                alt="Вантажівка на дорозі"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
