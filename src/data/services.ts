export interface Service {
  name: string;
  icon: string;
  description?: string;
}

export const servicesB2B: Service[] = [
  { name: "Корпоративное право", icon: "Users" },
  { name: "Налоговое консультирование", icon: "Calculator" },
  { name: "Трудовое право", icon: "Briefcase" },
  { name: "Регистрация компаний", icon: "Building" },
  { name: "Банкротство юридических лиц", icon: "AlertTriangle" },
  { name: "Договорное право", icon: "FileText" },
];

export const servicesB2C: Service[] = [
  { name: "Представительство в суде", icon: "Scale" },
  { name: "Семейный юрист", icon: "Heart" },
  { name: "Жилищный юрист", icon: "Home" },
  { name: "Наследство", icon: "Gift" },
  { name: "Медицинские споры", icon: "Stethoscope" },
  { name: "Трудовые споры", icon: "Briefcase" },
  { name: "Банкротство физических лиц", icon: "AlertTriangle" },
  { name: "Защита чести и достоинства", icon: "Shield" },
  { name: "Защита интеллектуальной собственности", icon: "Lock" },
  { name: "Земельные споры", icon: "MapPin" },
  { name: "Страховые споры", icon: "Car" },
  { name: "Защита права собственности", icon: "Key" },
  { name: "Защита прав потребителей", icon: "ShoppingCart" },
  { name: "Взыскание неустойки по ДДУ", icon: "Building" },
  { name: "Взыскание долгов", icon: "CreditCard" },
  { name: "Возмещение ущерба", icon: "AlertCircle" },
  { name: "Сопровождение сделок", icon: "FileText" },
  { name: "Досудебное урегулирование", icon: "MessageSquare" },
  { name: "Сопровождение исполнительного производства", icon: "Gavel" },
];
