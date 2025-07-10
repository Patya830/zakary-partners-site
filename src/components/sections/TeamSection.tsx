import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { team } from "@/data/team";

const TeamSection = () => {
  return (
    <section id="команда" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-cream text-center mb-12">
          Наша команда
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-cream border-gold/20 hover:border-gold transition-all duration-300 group cursor-stamp"
            >
              <CardContent className="pt-8 text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-64 h-64 rounded-full mx-auto shadow-lg border-2 border-gold/30 ${
                      member.name === "Ялковский Владимир"
                        ? "object-cover object-top"
                        : "object-cover"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-navy mb-2">
                  {member.name}
                </h3>
                <Badge variant="outline" className="border-gold text-gold mb-4">
                  {member.position}
                </Badge>
                <p className="text-navy/70 text-sm">{member.speciality}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
