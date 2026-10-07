import { attempt } from "@little-nebulae/result";

import type { StringifiableValue } from "@/types/stringifiable";
import type { StringifiedValueOf } from "@/types/stringified";

import { InvalidJsonTextError } from "@/errors/invalid-json-text";
import { parse } from "@/ops/parse";

export function attemptParse<T extends StringifiedValueOf<StringifiableValue>>(
  text: T,
) {
  return attempt({
    tryFn: () => parse(text),
    catchFn: (error) =>
      new InvalidJsonTextError({ cause: error as SyntaxError }),
  });
}
