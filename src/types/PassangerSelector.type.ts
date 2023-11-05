export interface PassangerState {
  count: number;
  class: string;
}

export const CABIN_CLASSES = [
  { value: "ECONOMY", label: "Economy Class" },
  { value: "BUSINESS", label: "Business Class" },
];

export enum PassangerActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  SELECT_CLASS = "SELECT_CLASS",
}

export interface PassangerAction {
  type: PassangerActionKind;
  payload?: string;
}