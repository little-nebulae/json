import type { JsonPrimitive } from "@/types/primitive";

export type JsonStringifiableObject =
  | { [Key in string]?: JsonStringifiable }
  | { toJSON: () => JsonStringifiable };

export type JsonStringifiableArray = readonly JsonStringifiable[];

export type JsonStringifiable =
  | JsonPrimitive
  | JsonStringifiableObject
  | JsonStringifiableArray;
