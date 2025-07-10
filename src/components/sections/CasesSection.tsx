import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/data/cases";

const CasesSection = () => {
  return (
    <section id="кейсы" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-cream text-center mb-12">
          Примеры наших дел
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="bg-cream hover:shadow-lg transition-all duration-300 cursor-document"
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
                <div className="space-y-2">
                  <h4 className="font-semibold text-navy">Решение:</h4>
                  <p className="text-green-600 font-medium">
                    {caseItem.solution}
                  </p>
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
