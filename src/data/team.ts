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
      "https://cdn.poehali.dev/files/c0dd0261-745c-4a1d-8c69-6a2931682e6a.jpg",
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
