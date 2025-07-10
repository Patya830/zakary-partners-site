import { Button } from "@/components/ui/button";
import { navigationItems, companyInfo } from "@/data/constants";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-gold">
            {companyInfo.name}
          </h1>
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-cream hover:text-gold transition-colors ${
                  item === "Цены" ? "cursor-calculator" : "cursor-stamp"
                }`}
              >
                {item}
              </a>
            ))}
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
  );
};

export default Header;
