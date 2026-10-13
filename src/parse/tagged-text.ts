import type { GetTagMetadata } from "type-fest";

import type { JsonTextOf, JsonTextOfTagName } from "@/types";

import { jsonParse } from "@/parse";

export function jsonParseTaggedText<T extends JsonTextOf<unknown>>(text: T) {
  return jsonParse<GetTagMetadata<T, JsonTextOfTagName>>(text);
}
