import { Test } from "@/types";
import { DRH } from "./drh";
import { UPV } from "./upv";
import { GRP } from "./gpr";

export * from "@/data/machines";
export * from "@/data/buildings";

export const tests: Test[] = [...DRH, ...UPV, ...GRP];
