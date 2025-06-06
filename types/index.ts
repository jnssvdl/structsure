export type Person = {
  name: string;
  birthDate: string;
  residence: string;
  education: {
    level: string;
    school: string;
    year: number;
  }[];
};

export type Building = {
  id: string;
  name: string;
  capacity: number;
  numberOfFloors: number;
  function: string;
  buildingAge?: number;
  imageUrl?: string;
};

export type Machine = {
  id: string;
  name: string;
  description: string;
  fullText: string;
  imageUrl: string;
};

export type DRH = {
  location: string;
  member: string;
  testPoint: string;
  averageReboundNumber: number;
  averageCompressiveStrengthMpa: number;
  reboundNumberRemarks: string;
  compressiveStrengthRemarks: string;
};

export type UPV = {
  location: string;
  member: string;
  compressiveStrengthMpa: number;
  velocityMs: number;
  method: string;
  concreteQualityRemarks: string;
  compressiveStrengthRemarks: string;
};

export type GPR = {
  location: string;
};

type TestData = DRH | UPV | GPR;

export type Test = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  data: TestData[];
};
