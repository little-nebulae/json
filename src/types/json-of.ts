import type { Tagged } from "type-fest";

export type JsonOfTagName = "JsonOf";

export type JsonOf<T> = Tagged<string, JsonOfTagName, T>;
