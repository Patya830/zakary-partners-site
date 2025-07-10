export interface PricingItem {
  service: string;
  price: string;
  duration: string;
}

export const pricingB2B: PricingItem[] = [
  { service: "Консультация", price: "от 5 000 ₽", duration: "1 час" },
  {
    service: "Составление договоров",
    price: "от 15 000 ₽",
    duration: "3-5 дней",
  },
  { service: "Регистрация ООО", price: "от 25 000 ₽", duration: "10 дней" },
  {
    service: "Налоговые споры",
    price: "от 100 000 ₽",
    duration: "2-6 месяцев",
  },
  {
    service: "Абонентское обслуживание",
    price: "от 30 000 ₽/мес",
    duration: "постоянно",
  },
];

export const pricingB2C: PricingItem[] = [
  { service: "Консультация", price: "от 2 000 ₽", duration: "1 час" },
  { service: "Семейные споры", price: "от 20 000 ₽", duration: "1-3 месяца" },
  { service: "Жилищные споры", price: "от 25 000 ₽", duration: "2-4 месяца" },
  {
    service: "Наследственные дела",
    price: "от 30 000 ₽",
    duration: "1-6 месяцев",
  },
  { service: "Автоюрист", price: "от 15 000 ₽", duration: "2-8 недель" },
];
