
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Про проєкт", href: "#about" },
    { label: "Навчання", href: "#training" },
    { label: "Новини", href: "#news" },
    { label: "Партнери", href: "#partners" },
    { label: "Контакти", href: "#contacts" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo placeholder - ready for future logo */}
          <div className="w-40 h-12 bg-muted/30 rounded-2xl flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Логотип</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium relative py-2 px-4 rounded-full hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              className="button-modern bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
              onClick={() => scrollToSection('#training')}
            >
              Обрати навчання
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-2xl hover:bg-muted/50"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4">
                <Button 
                  className="w-full button-modern bg-primary text-primary-foreground hover:bg-primary/90 py-3"
                  onClick={() => scrollToSection('#training')}
                >
                  Обрати навчання
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
