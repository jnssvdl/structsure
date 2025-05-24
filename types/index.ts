export type Building = {
  id: string;
  name: string;
  capacity: number;
  numberOfFloors: number;
  function: "OTHERS" | "OFFICE" | "ASSEMBLY" | "SCHOOL" | "OFFICE AND SCHOOL";
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
  locationDescription: string;
  member: string;
  testPoint: string;
  averageReboundNumber: number;
  averageCompressiveStrengthMpa: number;
  remarks: string;
  compressiveStrength: string;
};

export type UPV = {
  location: string;
  locationDescription: string;
  member: string;
  compressiveStrength: number;
  velocity: number;
  method: string;
  concreteQuality: string;
  remarks: string;
};

export type GPR = {
  location: string;
};

type TestResult = DRH | UPV | GPR;

export type BuildingTestData = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  data: TestResult[];
};
