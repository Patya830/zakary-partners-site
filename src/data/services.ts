export interface Service {
  name: string;
  icon: string;
}

export const servicesB2B: Service[] = [
  { name: "Санкционное право", icon: "Shield" },
  { name: "Регистрация компаний", icon: "Building" },
  { name: "Due Diligence", icon: "Search" },
  { name: "Корпоративное право", icon: "Users" },
  { name: "Налоговое консультирование", icon: "Calculator" },
  { name: "Трудовое право", icon: "Briefcase" },
];

export const servicesB2C: Service[] = [
  { name: "Семейный юрист", icon: "Heart" },
  { name: "Жилищные споры", icon: "Home" },
  { name: "Наследство", icon: "Gift" },
  { name: "Автоюрист", icon: "Car" },
  { name: "Потребительские права", icon: "ShoppingCart" },
  { name: "Уголовное право", icon: "Scale" },
];
