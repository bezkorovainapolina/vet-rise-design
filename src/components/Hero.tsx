
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToTraining = () => {
    const element = document.querySelector('#training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Професійна 
                <span className="text-primary block">перепідготовка</span>
                <span className="text-secondary">ветеранів</span>
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
              <Button 
                size="lg" 
                variant="outline"
                className="button-modern border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Дізнатись більше
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="hero-card p-8 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-3xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/20 rounded-3xl mx-auto flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-2xl"></div>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Нові можливості для професійного розвитку
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
