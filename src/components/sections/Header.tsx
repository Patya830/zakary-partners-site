import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-gold">
            Zakary&Partners
          </h1>
          <nav className="hidden md:flex space-x-8">
            {["О нас", "Команда", "Услуги", "Цены", "Кейсы", "Контакты"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-cream hover:text-gold transition-colors ${
                    item === "Цены" ? "cursor-calculator" : "cursor-stamp"
                  }`}
                >
                  {item}
                </a>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
