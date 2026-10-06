import type { JsonPrimitive } from "@/types/json";

export type EncodablePrimitive = JsonPrimitive | undefined | symbol | bigint;

export type EncodableSet = Set<EncodableValue>;
export type EncodableMap = Map<EncodableValue, EncodableValue>;

export type EncodableObject = {
  [K: string]: EncodableValue;
};
export type EncodableArray = EncodableValue[] | readonly EncodableValue[];

export type EncodableValue =
  | EncodablePrimitive
  | Date
  | RegExp
  | EncodableSet
  | EncodableMap
  | EncodableObject
  | EncodableArray;
