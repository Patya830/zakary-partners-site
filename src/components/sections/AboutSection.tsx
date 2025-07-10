import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { achievements } from "@/data/constants";

const AboutSection = () => {
  return (
    <section id="о-нас" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">
          О нашей компании
        </h2>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-navy/80 mb-8">
            Zakary&Partners — ведущая юридическая компания с многолетним опытом
            успешного решения правовых вопросов любой сложности. Мы объединяем
            глубокую экспертизу, инновационные подходы и персональное внимание к
            каждому клиенту.
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
  );
};

export default AboutSection;
