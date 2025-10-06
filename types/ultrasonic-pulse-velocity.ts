import { Building } from "./building";
import { Machine } from "./machine";

export type UltrasonicPulseVelocityType = {
  buildingId: Building["id"];
  machineId: Machine["id"];
  table: {
    location: string;
    member: string;
    compressiveStrength: number;
    velocity: number;
    method: string;
    concreteQuality: string;
    remarks: string;
  }[];
  chart: {
    velocity: {
      floor: string;
      velocity: number;
    }[];
    compressiveStrength: {
      floor: string;
      compressiveStrength: number;
    }[];
  };
  analysis: string[];
};
