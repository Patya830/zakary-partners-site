import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { achievements } from "@/data/achievements";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-burgundy rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-gold rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* 3D Scales */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      >
        <div className="scales-3d text-gold/20">
          <Icon name="Scale" size={400} />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-cream mb-6 animate-fade-in">
            Zakary&Partners
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 mb-8 animate-fade-in delay-200">
            Профессиональная юридическая помощь с 2013 года
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-300">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 font-semibold px-8 py-3 cursor-document"
            >
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-navy font-semibold px-8 py-3 cursor-stamp"
            >
              Наши кейсы
            </Button>
          </div>

          {/* Achievements */}
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
      </div>
    </section>
  );
};

export default HeroSection;
