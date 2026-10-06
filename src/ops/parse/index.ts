import type { GetTagMetadata } from "type-fest";

import type { StringifiableValue } from "@/types/stringifiable";
import type {
  StringifiedValueOf,
  StringifiedValueOfTagName,
} from "@/types/stringified";

export function parse<T extends StringifiedValueOf<StringifiableValue>>(
  text: T,
  reviver?: (this: any, key: string, value: any) => any,
): GetTagMetadata<T, StringifiedValueOfTagName> {
  return JSON.parse(text, reviver);
}
