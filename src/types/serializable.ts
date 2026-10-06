import type { JsonValue } from "@/types/json";

export type SerializablePrimitive =
  | JsonValue
  | undefined
  | symbol
  | bigint
  | Set<SerializableValue>
  | Map<SerializableValue, SerializableValue>
  | Date
  | RegExp;

export type SerializableObject = {
  [K: string]: SerializableValue;
};

export type SerializableArray =
  | SerializableValue[]
  | readonly SerializableValue[];

export type SerializableValue =
  | SerializablePrimitive
  | SerializableObject
  | SerializableArray;
