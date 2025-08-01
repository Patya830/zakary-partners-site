export interface TeamMember {
  name: string;
  position: string;
  speciality: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Закарьяева Патимат",
    position: "Управляющий юрист",
    speciality: "Дипломы и сертификаты",
    image:
      "https://cdn.poehali.dev/files/9b91c5c3-6026-4930-a816-debf52efe26e.jpg",
  },
  {
    name: "Политов Роман",
    position: "Старший юрист",
    speciality: "Специализации",
    image: "/img/5f478823-4af1-4386-9195-055bd93ab20f.jpg",
  },
  {
    name: "Ялковский Владимир",
    position: "Юрист",
    speciality: "Статистика дел",
    image:
      "https://cdn.poehali.dev/files/77a7cad0-9daf-4c8f-942f-0e8e95fafb06.jpg",
  },
];
