import type { JsonPrimitive } from "@/types/primitive";

export type JsonObject = { [Key in string]: JsonValue };

export type JsonArray = JsonValue[] | readonly JsonValue[];

export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
