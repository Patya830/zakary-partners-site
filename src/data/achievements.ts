export interface Achievement {
  value: string;
  label: string;
  icon: string;
}

export const achievements: Achievement[] = [
  { value: "10+", label: "лет опыта", icon: "Calendar" },
  { value: "500+", label: "дел", icon: "FileText" },
  { value: "95%", label: "успеха", icon: "Trophy" },
];
