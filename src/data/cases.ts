export interface CaseItem {
  category: string;
  number: string;
  problem: string;
  solution: string;
}

export const cases: CaseItem[] = [
  {
    category: "B2B",
    number: "А40-123456/2023",
    problem: "Взыскание 15 млн руб по договору подряда",
    solution: "Полное удовлетворение иска + проценты",
  },
  {
    category: "B2C",
    number: "А40-789012/2023",
    problem: "Раздел недвижимости при разводе",
    solution: "Справедливый раздел имущества",
  },
  {
    category: "B2B",
    number: "А40-345678/2023",
    problem: "Налоговый спор на 5 млн руб",
    solution: "Снижение доначислений на 80%",
  },
];
