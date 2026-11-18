import type { JsonValue, Tagged } from "type-fest";

export type JsonTextOfTagName = "JsonTextOf";
export type JsonTextOf<T extends JsonValue> = Tagged<
  string,
  JsonTextOfTagName,
  T
>;
