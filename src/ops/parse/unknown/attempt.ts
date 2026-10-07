import { attempt } from "@little-nebulae/result";

import { InvalidJsonTextError } from "@/errors/invalid-json-text";
import { parseUnknown } from "@/index";

export function attemptParseUnknown<T = unknown>(text: string) {
  return attempt({
    tryFn: () => parseUnknown<T>(text),
    catchFn: (error) =>
      new InvalidJsonTextError({ cause: error as SyntaxError }),
  });
}
