import { Building } from "./building";
import { Machine } from "./machine";

export type GroundPenetratingRadarType = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  table: {
    scanId: number;
    location: string;
    member: string;
    layer: string;
    materialGuess: string;
    rebarSpacing: string;
    signalClarity: string;
    rebarCondition: string;
    remarks: string;
  }[];
  analysis: {
    slabRebarSpacing: string;
    wallRebarSpacing: string;
    signalClaritySpacing: string;
    rebarCondition: string;
    issuesDetected: string;
    recommendation: string;
  };
};
