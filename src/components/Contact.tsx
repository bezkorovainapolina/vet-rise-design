
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    region: "",
    message: "",
    agreement: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Помилка",
        description: "Необхідно погодитися з умовами обробки персональних даних",
        variant: "destructive"
      });
      return;
    }

    // Тут буде логіка відправки форми
    toast({
      title: "Заявку надіслано!",
      description: "Ми зв'яжемося з вами найближчим часом",
    });

    // Очистити форму
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      program: "",
      region: "",
      message: "",
      agreement: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Зв'язатися з нами
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Маєте питання або готові подати заявку? Заповніть форму, і ми зв'яжемося з вами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактна інформація */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Контактна інформація</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-600">info@logistics-veterans.ua</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-600">+380 (44) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Адреса</p>
                    <p className="text-slate-600">м. Київ, вул. Хрещатик, 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма заявки */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Подати заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ім'я *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Прізвище *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="program">Програма навчання *</Label>
                  <Select onValueChange={(value) => handleInputChange("program", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть програму" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="driver-ce">Водій категорії «СЕ»</SelectItem>
                      <SelectItem value="qualification-card">Кваліфікаційна картка водія</SelectItem>
                      <SelectItem value="logist">Логіст</SelectItem>
                      <SelectItem value="forklift-driver">Водій навантажувача</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="region">Регіон *</Label>
                  <Select onValueChange={(value) => handleInputChange("region", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть регіон" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kyiv">Київ та Київська область</SelectItem>
                      <SelectItem value="dnipro">Дніпро та Дніпропетровська область</SelectItem>
                      <SelectItem value="lviv">Львів та Львівська область</SelectItem>
                      <SelectItem value="odesa">Одеса та Одеська область</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Додаткова інформація</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Розкажіть про свій досвід, мотивацію або поставте питання..."
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => handleInputChange("agreement", !!checked)}
                  />
                  <Label htmlFor="agreement" className="text-sm">
                    Я погоджуюся з обробкою персональних даних та умовами участі в проєкті *
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
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
