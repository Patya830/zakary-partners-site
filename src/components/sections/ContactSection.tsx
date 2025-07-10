import Icon from "@/components/ui/icon";
import { ContactForm } from "./ContactForm";
import { contactInfo } from "@/data/constants";

const ContactSection = () => {
  return (
    <section id="контакты" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">
          Свяжитесь с нами
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Icon name={item.icon} size={24} className="text-gold" />
                <div>
                  <p className="font-semibold text-navy">{item.title}</p>
                  <p className="text-navy/70">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
