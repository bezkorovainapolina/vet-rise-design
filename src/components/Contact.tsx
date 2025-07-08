
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "",
    region: "",
    hasDriverLicense: false,
    isVeteran: false,
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Контакти та реєстрація
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Зв'яжіться з нами для отримання додаткової інформації або подайте заявку на участь у програмі
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Контактна інформація</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Адреса</h3>
                    <p className="text-muted-foreground">м. Київ, вул. Хрещатик, 1</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Телефон</h3>
                    <p className="text-muted-foreground">+380 (44) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@logistics-veterans.ua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Години роботи</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Нд: вихідні</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Форма реєстрації</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">Повне ім'я *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="border-input focus:border-primary focus:ring-primary"
                    placeholder="Введіть ваше повне ім'я"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-input focus:border-primary focus:ring-primary"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-input focus:border-primary focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program" className="text-foreground">Програма навчання *</Label>
                  <select
                    id="program"
                    required
                    value={formData.program}
                    onChange={(e) => handleInputChange('program', e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Оберіть програму</option>
                    <option value="driver-ce">Водій категорії «СЕ»</option>
                    <option value="qualification-card">Кваліфікаційна картка водія</option>
                    <option value="logist">Логіст</option>
                    <option value="forklift-driver">Водій навантажувача</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region" className="text-foreground">Регіон навчання *</Label>
                  <select
                    id="region"
                    required
                    value={formData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Оберіть регіон</option>
                    <option value="kyiv">Київ</option>
                    <option value="kharkiv">Харків</option>
                    <option value="dnipro">Дніпро</option>
                    <option value="odesa">Одеса</option>
                    <option value="lviv">Львів</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasDriverLicense"
                      checked={formData.hasDriverLicense}
                      onCheckedChange={(checked) => handleInputChange('hasDriverLicense', checked as boolean)}
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="hasDriverLicense" className="text-muted-foreground text-sm">
                      Маю водійське посвідчення відповідної категорії
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isVeteran"
                      checked={formData.isVeteran}
                      onCheckedChange={(checked) => handleInputChange('isVeteran', checked as boolean)}
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="isVeteran" className="text-muted-foreground text-sm">
                      Є ветераном/нкою російсько-української війни
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="agreement" className="text-muted-foreground text-sm">
                      Погоджуюся з умовами участі та обробкою персональних даних *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!formData.agreement}
                >
                  Подати заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
