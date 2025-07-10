import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { servicesB2B, servicesB2C } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="услуги" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">
          Наши услуги
        </h2>
        <Tabs defaultValue="b2b" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="b2b">Для бизнеса</TabsTrigger>
            <TabsTrigger value="b2c">Для граждан</TabsTrigger>
          </TabsList>

          <TabsContent value="b2b">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesB2B.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-document group"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <Icon
                        name={service.icon}
                        size={32}
                        className="text-gold group-hover:scale-110 transition-transform"
                      />
                      <h3 className="text-navy font-semibold">
                        {service.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="b2c">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesB2C.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-document group"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <Icon
                        name={service.icon}
                        size={32}
                        className="text-gold group-hover:scale-110 transition-transform"
                      />
                      <h3 className="text-navy font-semibold">
                        {service.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
