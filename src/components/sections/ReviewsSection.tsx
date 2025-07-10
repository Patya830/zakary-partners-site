import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredReviews = reviews.filter((review) => {
    if (activeTab === "all") return true;
    return review.category === activeTab;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${i < rating ? "text-gold fill-gold" : "text-gray-300"}`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="отзывы" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-cream text-center mb-12">
          Отзывы клиентов
        </h2>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-6xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-lg">
              Все отзывы
            </TabsTrigger>
            <TabsTrigger value="B2B" className="text-lg">
              Бизнес-клиенты
            </TabsTrigger>
            <TabsTrigger value="B2C" className="text-lg">
              Частные клиенты
            </TabsTrigger>
          </TabsList>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <Card
                key={review.id}
                className="bg-cream border-gold/20 hover:border-gold transition-all duration-300 h-full flex flex-col"
              >
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-navy text-lg">
                        {review.name}
                      </h3>
                      {review.company && (
                        <p className="text-navy/60 text-sm">{review.company}</p>
                      )}
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <p className="text-navy/80 text-sm leading-relaxed mb-4 flex-grow">
                    "{review.text}"
                  </p>

                  <div className="flex items-center justify-between text-xs text-navy/50 mt-auto">
                    <span>{formatDate(review.date)}</span>
                    <span className="bg-gold/20 text-navy px-2 py-1 rounded-full">
                      {review.category === "B2B" ? "Бизнес" : "Частный клиент"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cream/70">
                Отзывы в данной категории пока отсутствуют
              </p>
            </div>
          )}
        </Tabs>

        <div className="text-center mt-12 space-y-4">
          <p className="text-cream/70 text-lg italic">
            Вот что говорят о нас те, кто уже воспользовался нашими услугами
          </p>
          <div className="flex items-center justify-center space-x-2 text-cream/80">
            <Icon name="Star" size={20} className="text-gold fill-gold" />
            <span className="text-2xl font-bold text-gold">5.0</span>
            <span>средняя оценка на основе {reviews.length} отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
