import Icon from "@/components/ui/icon";
import { companyInfo } from "@/data/constants";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
            {companyInfo.name}
          </h3>
          <p className="text-cream/70 mb-6">
            Профессиональные юридические услуги с {companyInfo.foundedYear} года
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
            © 2024 {companyInfo.name}. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
