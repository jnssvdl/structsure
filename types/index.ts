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
  buildingAge: number;
  imageUrl: string;
};

export type Machine = {
  id: string;
  name: string;
  description: string;
  fullText: string;
  imageUrl: string;
};

export type DRHRecord = {
  location: string;
  member: string;
  testPoint: string;
  averageReboundNumber: number;
  averageCompressiveStrengthMpa: number;
  reboundNumberRemarks: string;
  compressiveStrengthRemarks: string;
};

export type UPVRecord = {
  location: string;
  member: string;
  compressiveStrengthMpa: number;
  velocityMs: number;
  method: string;
  concreteQualityRemarks: string;
  compressiveStrengthRemarks: string;
};

export type GPRRecord = {
  location: string;
};

type DRHAnalysis = {
  compressiveStrength: string;
  reboundValue: string;
  conreteCondition: string;
  recommendation: string;
};

type UPVAnalysis = string[];

type GPRAnalysis = {
  slabRebarSpacing: string;
  wallRebarSpacing: string;
  signalClaritySpacing: string;
  rebarCondition: string;
  issuesDetected: string;
  recommendation: string;
};

export type UPVChart = {
  velocity: {
    floor: string;
    velocity: number;
  }[];
  compressiveStrength: {
    floor: string;
    compressiveStrength: number;
  }[];
};

export type DRHChartType = {
  floor: string;
  averageReboundNumber: number;
  averageCompressiveStrength: number;
}[];

export type UPVData = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  table: UPVRecord[];
  chart: UPVChart;
  analysis: UPVAnalysis;
};

export type DRHData = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  table: DRHRecord[];
  chart: DRHChartType;
  analysis: DRHAnalysis;
};

export type GPRData = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  table: GPRRecord[];
  analysis: GPRAnalysis;
};

export type Data = UPVData | DRHData | GPRData;
