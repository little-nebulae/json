import type { GetTagMetadata } from "type-fest";

import { attempt } from "@little-nebulae/result";

import type { JsonTextOf, JsonTextOfTagName } from "@/types/text-of";

import { InvalidJsonTextError } from "@/errors/invalid-json-text";

export function attemptParse<T extends JsonTextOf<unknown>>(text: T) {
  return attempt({
    tryFn: () => JSON.parse(text) as GetTagMetadata<T, JsonTextOfTagName>,
    catchFn: (error) =>
      new InvalidJsonTextError({ cause: error as SyntaxError }),
  });
}
