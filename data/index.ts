import { Data } from "@/types";
import { DRHData } from "./drh-data";
import { UPVData } from "./upv-data";
import { GPRData } from "./gpr-data";

export * from "@/data/machines";
export * from "@/data/buildings";

export const DATA: Data[] = [...DRHData, ...UPVData, ...GPRData];
