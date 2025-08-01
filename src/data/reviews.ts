export interface Review {
  id: number;
  name: string;
  company?: string;
  rating: number;
  text: string;
  date: string;
  category: "B2B" | "B2C";
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Александр Петров",
    company: 'ООО "Стройтех"',
    rating: 5,
    text: "Отличная команда профессионалов! Помогли нам в сложном арбитражном споре по взысканию долга. Все вопросы решались оперативно, консультации были понятными и детальными. Рекомендую!",
    date: "2024-11-15",
    category: "B2B",
  },
  {
    id: 2,
    name: "Мария Иванова",
    rating: 5,
    text: "Обратилась по семейному спору - раздел имущества при разводе. Патимат Магомедовна проявила высокий профессионализм и человечность. Все прошло максимально корректно, результатом довольна.",
    date: "2024-11-08",
    category: "B2C",
  },
  {
    id: 3,
    name: "Сергей Николаев",
    company: "ИП Николаев С.А.",
    rating: 5,
    text: "Сопровождали регистрацию ООО и настройку всех корпоративных процедур. Очень довольны качеством услуг и скоростью работы. Теперь обращаемся по всем юридическим вопросам только к ним.",
    date: "2024-10-28",
    category: "B2B",
  },
  {
    id: 4,
    name: "Елена Смирнова",
    rating: 5,
    text: "Помогли с наследственным делом. Ситуация была непростая, но юристы разобрались во всех нюансах и помогли получить наследство в полном объеме. Спасибо за профессионализм!",
    date: "2024-10-20",
    category: "B2C",
  },
  {
    id: 5,
    name: "Дмитрий Козлов",
    company: 'ООО "ТехноПром"',
    rating: 5,
    text: "Обращались по налоговому спору с ФНС. Zakary&Partners смогли снизить доначисления на 70% и полностью избежать штрафных санкций. Очень благодарны за работу!",
    date: "2024-10-12",
    category: "B2B",
  },
  {
    id: 6,
    name: "Анна Волкова",
    rating: 5,
    text: "Консультировалась по жилищному спору с управляющей компанией. Получила исчерпывающие ответы на все вопросы и четкий план действий. В итоге удалось решить вопрос в досудебном порядке.",
    date: "2024-09-30",
    category: "B2C",
  },
];
