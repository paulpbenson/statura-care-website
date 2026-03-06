export type { ModuleData, ModuleCapability, ModuleWorkflowStep, ModuleIntegration, ModuleRegRequirement, ModuleCategory, CareType } from "./types";
export { categories, categoryDescriptions, categoryColours } from "./types";

import { complianceModules } from "./compliance";
import { residentModules } from "./resident";
import { clinicalModules } from "./clinical";
import { workforceModules } from "./workforce";
import { financialModules } from "./financial";
import { reportingModules } from "./reporting";

export const modules: import("./types").ModuleData[] = [
  ...complianceModules,
  ...residentModules,
  ...clinicalModules,
  ...workforceModules,
  ...financialModules,
  ...reportingModules,
];

export function getModuleBySlug(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCategory(category: import("./types").ModuleCategory) {
  return modules.filter((m) => m.category === category);
}

export function getModulesByCareType(careType: import("./types").CareType) {
  return modules.filter((m) => m.applicableTo.includes(careType));
}
