import type { JsonPrimitive } from "@/types/json";

type StringifiableObject =
  | { [Key in string]?: StringifiableValue }
  | { toJSON: () => StringifiableValue };

type StringifiableArray = readonly StringifiableValue[];

export type StringifiableValue =
  | JsonPrimitive
  | StringifiableObject
  | StringifiableArray;
