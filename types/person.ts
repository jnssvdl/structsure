export type Person = {
  name: string;
  birthdate: string;
  residence: string;
  education: {
    level: string;
    school: string;
    year: number;
  }[];
};
