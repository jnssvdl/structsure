export type Building = {
  id: string;
  name: string;
  location: string;
};

export type Machine = {
  id: string;
  name: string;
  description: string;
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

type UPV = {
  thermalEfficiency: number;
  insulationRating: string;
  windowQuality: string;
};

type TestResult = DRH | UPV;

export type BuildingTestData = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  data: TestResult[];
};
