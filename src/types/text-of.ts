import type { Tagged } from "type-fest";

export type JsonTextOfTagName = "JsonTextOf";
export type JsonTextOf<T> = Tagged<string, JsonTextOfTagName, T>;
