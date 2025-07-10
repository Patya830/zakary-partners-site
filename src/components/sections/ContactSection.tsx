import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
