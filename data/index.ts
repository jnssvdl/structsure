import { Test } from "@/types";
import { DRH } from "./drh";
import { UPV } from "./upv";

export * from "@/data/machines";
export * from "@/data/buildings";

export const tests: Test[] = [
  // Machine 1 tests
  ...DRH,
  // Machine 2 tests
  ...UPV,
];
