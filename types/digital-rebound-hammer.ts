import { Building } from "./building";
import { Machine } from "./machine";

export type DigitalReboundHammerType = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  table: {
    location: string;
    member: string;
    testPoint: string;
    averageReboundNumber: number;
    averageCompressiveStrength: number;
    reboundNumber: string;
    compressiveStrength: string;
  }[];
  chart: {
    floor: string;
    averageReboundNumber: number;
    averageCompressiveStrength: number;
  }[];
  analysis: {
    compressiveStrength: string;
    reboundValue: string;
    conreteCondition: string;
    recommendation: string;
  };
};
