import type { LucideIcon } from "@lucide/vue";

export interface dataItem {
  icon: LucideIcon | Component;
  title: string;
  description: string;
  name?: string;
}

export interface validationMsg {
  isValidate: boolean;
  issueMsg?: string;
}
