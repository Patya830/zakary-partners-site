import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { pricingB2B, pricingB2C } from "@/data/constants";

const PricingSection = () => {
  return (
    <section
      id="цены"
      className="py-20 bg-gradient-to-br from-navy to-burgundy relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-cream mb-4">
            Прозрачные цены
          </h2>
          <p className="text-cream/70 text-lg">
            Выберите категорию услуг для просмотра актуальных тарифов
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* B2B Pricing */}
            <div className="group cursor-calculator">
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:bg-cream/15 hover:scale-105">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Building2" size={32} className="text-navy" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-cream mb-2">
                    Для бизнеса
                  </h3>
                  <p className="text-cream/60">
                    Корпоративные юридические услуги
                  </p>
                </div>

                <div className="space-y-4">
                  {pricingB2B.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-cream/5 rounded-lg hover:bg-cream/10 transition-colors"
                    >
                      <div>
                        <p className="text-cream font-medium">{item.service}</p>
                        <p className="text-cream/60 text-sm">{item.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gold font-bold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-gold text-navy hover:bg-gold/90 font-semibold px-8">
                    Получить расчет
                  </Button>
                </div>
              </div>
            </div>

            {/* B2C Pricing */}
            <div className="group cursor-calculator">
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:bg-cream/15 hover:scale-105">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="User" size={32} className="text-navy" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-cream mb-2">
                    Для граждан
                  </h3>
                  <p className="text-cream/60">
                    Персональные юридические услуги
                  </p>
                </div>

                <div className="space-y-4">
                  {pricingB2C.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-cream/5 rounded-lg hover:bg-cream/10 transition-colors"
                    >
                      <div>
                        <p className="text-cream font-medium">{item.service}</p>
                        <p className="text-cream/60 text-sm">{item.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gold font-bold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-gold text-navy hover:bg-gold/90 font-semibold px-8">
                    Записаться на консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-gold/20">
              <p className="text-cream/80 text-sm">
                💡 <strong>Первичная консультация бесплатно</strong> при
                заключении договора на сумму от 50 000 ₽
              </p>
              <p className="text-cream/60 text-xs mt-2">
                * Окончательная стоимость услуг рассчитывается индивидуально в
                зависимости от сложности дела
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
