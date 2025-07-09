import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const achievements = [
    { value: "10+", label: "лет опыта", icon: "Clock" },
    { value: "500+", label: "дел", icon: "FileText" },
    { value: "95%", label: "успеха", icon: "Trophy" },
  ];

  const team = [
    {
      name: "Закарьяева Патимат",
      position: "Управляющий юрист",
      speciality: "Дипломы и сертификаты",
      image: "/img/f23cafca-1cbd-4cec-892c-6051bf673f78.jpg",
    },
    {
      name: "Политов Роман",
      position: "Старший юрист",
      speciality: "Специализации",
      image: "/img/5f478823-4af1-4386-9195-055bd93ab20f.jpg",
    },
    {
      name: "Ялковский Владимир",
      position: "Юрист",
      speciality: "Статистика дел",
      image: "/img/e28a7833-bf8a-4edf-a123-7ee9d60f9a57.jpg",
    },
  ];

  const servicesB2B = [
    { name: "Санкционное право", icon: "Shield" },
    { name: "Регистрация компаний", icon: "Building" },
    { name: "Due Diligence", icon: "Search" },
    { name: "Корпоративное право", icon: "Users" },
    { name: "Налоговое консультирование", icon: "Calculator" },
    { name: "Трудовое право", icon: "Briefcase" },
  ];

  const servicesB2C = [
    { name: "Семейный юрист", icon: "Heart" },
    { name: "Жилищные споры", icon: "Home" },
    { name: "Наследство", icon: "Gift" },
    { name: "Автоюрист", icon: "Car" },
    { name: "Потребительские права", icon: "ShoppingCart" },
    { name: "Уголовное право", icon: "Scale" },
  ];

  const cases = [
    {
      category: "B2B",
      number: "А40-123456/2023",
      problem: "Взыскание 15 млн руб по договору подряда",
      solution: "Полное удовлетворение иска + проценты",
    },
    {
      category: "B2C",
      number: "А40-789012/2023",
      problem: "Раздел недвижимости при разводе",
      solution: "Справедливый раздел имущества",
    },
    {
      category: "B2B",
      number: "А40-345678/2023",
      problem: "Налоговый спор на 5 млн руб",
      solution: "Снижение доначислений на 80%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy/95 to-burgundy cursor-gavel">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-playfair font-bold text-gold">
              Zakary&Partners
            </h1>
            <nav className="hidden md:flex space-x-8">
              {["О нас", "Команда", "Услуги", "Кейсы", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-cream hover:text-gold transition-colors cursor-stamp"
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy"
            >
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D Scales */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-burgundy/30"></div>

        {/* 3D Scales */}
        <div
          className="absolute scales-3d animate-float parallax-element"
          style={{
            transform: `translate(${mousePosition.x * 0.02 + scrollY * 0.1}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px) rotateX(15deg) rotateY(${mousePosition.x * 0.01}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="text-9xl opacity-20 text-gold transform hover:text-burgundy transition-colors duration-500 glow-effect">
            ⚖️
          </div>
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-cream mb-6">
            Справедливость
            <span className="block text-gold">в каждом деле</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 mb-8 max-w-3xl mx-auto">
            Профессиональные юридические услуги для бизнеса и частных лиц.
            Защищаем ваши права с 2013 года.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 text-lg px-8 py-6"
            >
              Бесплатная консультация
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-navy text-lg px-8 py-6"
            >
              Наши услуги
            </Button>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="о-нас" className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">
            О нашей компании
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-navy/80 mb-8">
              Zakary&Partners — ведущая юридическая компания с многолетним
              опытом успешного решения правовых вопросов любой сложности. Мы
              объединяем глубокую экспертизу, инновационные подходы и
              персональное внимание к каждому клиенту.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center border-navy/20 hover:shadow-lg transition-all duration-300 animate-scale-in"
              >
                <CardContent className="pt-8">
                  <Icon
                    name={achievement.icon}
                    size={48}
                    className="mx-auto mb-4 text-gold"
                  />
                  <div className="text-4xl font-playfair font-bold text-navy mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-navy/70">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="команда" className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-cream text-center mb-12">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-cream border-gold/20 hover:border-gold transition-all duration-300 group cursor-stamp"
              >
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg border-2 border-gold/30"
                    />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-navy mb-2">
                    {member.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-gold text-gold mb-4"
                  >
                    {member.position}
                  </Badge>
                  <p className="text-navy/70 text-sm">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">
            Наши услуги
          </h2>

          <Tabs defaultValue="b2b" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="b2b" className="text-lg">
                Юридическим лицам
              </TabsTrigger>
              <TabsTrigger value="b2c" className="text-lg">
                Физическим лицам
              </TabsTrigger>
            </TabsList>

            <TabsContent value="b2b">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesB2B.map((service, index) => (
                  <Card
                    key={index}
                    className="border-navy/20 hover:border-gold hover:shadow-lg transition-all duration-300 cursor-stamp"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={service.icon}
                          size={24}
                          className="text-gold"
                        />
                        <CardTitle className="text-navy text-lg">
                          {service.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="b2c">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesB2C.map((service, index) => (
                  <Card
                    key={index}
                    className="border-navy/20 hover:border-gold hover:shadow-lg transition-all duration-300 cursor-stamp"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={service.icon}
                          size={24}
                          className="text-gold"
                        />
                        <CardTitle className="text-navy text-lg">
                          {service.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cases Section */}
      <section id="кейсы" className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-cream text-center mb-12">
            Успешные кейсы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="bg-cream border-gold/20 hover:border-gold transition-all duration-300 cursor-stamp"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        caseItem.category === "B2B" ? "default" : "secondary"
                      }
                    >
                      {caseItem.category}
                    </Badge>
                    <span className="text-sm text-navy/60">
                      {caseItem.number}
                    </span>
                  </div>
                  <CardTitle className="text-navy text-lg mb-2">
                    Проблема:
                  </CardTitle>
                  <CardDescription className="text-navy/70">
                    {caseItem.problem}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy">Решение:</h4>
                    <p className="text-green-600 font-medium">
                      {caseItem.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-cream/60 text-sm italic">
              * Не является гарантией результата. Каждый случай индивидуален.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">
            Свяжитесь с нами
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-gold" />
                <div>
                  <p className="font-semibold text-navy">Телефон</p>
                  <p className="text-navy/70">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-gold" />
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <p className="text-navy/70">info@zakarypartners.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-gold" />
                <div>
                  <p className="font-semibold text-navy">Адрес</p>
                  <p className="text-navy/70">Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
            </div>
            <div className="bg-navy rounded-lg p-8">
              <h3 className="text-xl font-playfair font-semibold text-cream mb-6">
                Получить консультацию
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded border border-gold/20 bg-cream text-navy"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded border border-gold/20 bg-cream text-navy"
                />
                <textarea
                  placeholder="Опишите вашу ситуацию"
                  rows={4}
                  className="w-full p-3 rounded border border-gold/20 bg-cream text-navy"
                />
                <Button className="w-full bg-gold text-navy hover:bg-gold/90">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
              Zakary&Partners
            </h3>
            <p className="text-cream/70 mb-6">
              Профессиональные юридические услуги с 2013 года
            </p>
            <div className="flex justify-center space-x-6">
              <Icon
                name="Phone"
                size={20}
                className="text-gold hover:text-cream cursor-pointer transition-colors"
              />
              <Icon
                name="Mail"
                size={20}
                className="text-gold hover:text-cream cursor-pointer transition-colors"
              />
              <Icon
                name="MapPin"
                size={20}
                className="text-gold hover:text-cream cursor-pointer transition-colors"
              />
            </div>
            <div className="mt-8 pt-8 border-t border-gold/20 text-cream/50 text-sm">
              © 2024 Zakary&Partners. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
