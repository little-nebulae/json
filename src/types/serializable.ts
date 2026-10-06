import type { JsonValue } from "@/types/json";

export type SerializableJsonPrimitive =
  | JsonValue
  | undefined
  | symbol
  | bigint
  | Set<SerializableJsonValue>
  | Map<SerializableJsonValue, SerializableJsonValue>
  | Date
  | RegExp;

export type SerializableJsonObject = {
  [K: string]: SerializableJsonValue;
};

export type SerializableJsonArray =
  | SerializableJsonValue[]
  | readonly SerializableJsonValue[];

export type SerializableJsonValue =
  | SerializableJsonPrimitive
  | SerializableJsonObject
  | SerializableJsonArray;
