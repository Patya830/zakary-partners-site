import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cases } from "@/data/constants";

const CasesSection = () => {
  return (
    <section id="кейсы" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-cream text-center mb-12">
          Успешные кейсы
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="bg-cream border-gold/20 hover:border-gold transition-all duration-300 cursor-stamp"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={
                      caseItem.category === "B2B" ? "default" : "secondary"
                    }
                    className="font-semibold"
                  >
                    {caseItem.category}
                  </Badge>
                  <span className="text-sm text-navy/60">
                    {caseItem.number}
                  </span>
                </div>
                <CardTitle className="text-navy text-lg mb-2">
                  Проблема:
                </CardTitle>
                <CardDescription className="text-navy/70">
                  {caseItem.problem}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Решение:</h4>
                    <p className="text-green-600 font-medium text-sm leading-relaxed">
                      {caseItem.solution}
                    </p>
                  </div>
                  {(caseItem as any).pdfUrl && (
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                        onClick={() =>
                          window.open((caseItem as any).pdfUrl, "_blank")
                        }
                      >
                        <Icon name="FileText" size={16} className="mr-2" />
                        Посмотреть судебный акт
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-cream/60 text-sm italic">
            * Не является гарантией результата. Каждый случай индивидуален.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
