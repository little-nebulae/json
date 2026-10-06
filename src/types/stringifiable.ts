import type { JsonPrimitive } from "@/types/json";

export type StringifiableObject =
  | { [Key in string]?: StringifiableValue }
  | { toJSON: () => StringifiableValue };

export type StringifiableArray = readonly StringifiableValue[];

export type StringifiableValue =
  | JsonPrimitive
  | StringifiableObject
  | StringifiableArray;
