import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/constants";
import VideoBackground from "../VideoBackground";

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const HeroSection = ({ mousePosition, scrollY }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Animated Background */}
      <VideoBackground scrollY={scrollY} />
      
      {/* Static Background Image for depth */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/img/0a26ac84-6dda-4e81-98e6-e0fada86ff14.jpg"
          alt="Legal background"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(1.05) translateY(${scrollY * 0.2}px)`,
            filter: "brightness(0.3) contrast(1.1) blur(1px)",
          }}
        />
      </div>
      
      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-transparent to-burgundy/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent"></div>

      {/* 3D Scales */}
      <div
        className="absolute scales-3d animate-float parallax-element"
        style={{
          transform: `translate(${mousePosition.x * 0.02 + scrollY * 0.1}px, ${
            mousePosition.y * 0.02 + scrollY * 0.3
          }px) rotateX(15deg) rotateY(${mousePosition.x * 0.01}deg)`,
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
          Защищаем ваши права с {companyInfo.foundedYear} года.
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
  );
};

export default HeroSection;