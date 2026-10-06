import type { Tagged } from "type-fest";

import type { StringifiableValue } from "@/types/stringifiable";

export type StringifiedValueOfTagName = "StringifiedValueOf";
export type StringifiedValueOf<T extends StringifiableValue> = Tagged<
  string,
  StringifiedValueOfTagName,
  T
>;
