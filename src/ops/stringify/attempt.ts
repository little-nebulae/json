import { attempt } from "@little-nebulae/result";

import type { StringifiableValue } from "@/types/stringifiable";

import { InvalidJsonValueError } from "@/errors/invalid-json-value";
import { stringify } from "@/ops/stringify";

export function attemptStringify<T extends StringifiableValue>(
  value: T,
  space?: string | number,
) {
  return attempt({
    tryFn: () => stringify(value, space),
    catchFn: (error) =>
      new InvalidJsonValueError({ cause: error as TypeError }),
  });
}
