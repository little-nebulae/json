import type { Result } from "@little-nebulae/result";
import type { SuperJSONResult } from "superjson";

import { composeErrorMessage, UnexpectedError } from "@little-nebulae/error";
import { fail, succeed } from "@little-nebulae/result";
import { deserialize } from "superjson";

import { jsonSerialize } from "@/ops/serialize";

export function jsonDeserialize<T = unknown>({
  json,
  meta,
  inPlace = false,
}: SuperJSONResult & {
  inPlace?: boolean;
}): Result<T, UnexpectedError<unknown, { inPlace: boolean }>> {
  try {
    const payload = meta ? { json, meta } : { json };
    const originalValue = deserialize<T>(payload, { inPlace });
    return succeed(originalValue);
  } catch (error) {
    return fail(
      new UnexpectedError({
        message: composeErrorMessage({
          operation: `deserialize the output of ${jsonSerialize.name} back into the original value.`,
          reason: "some unexpected error",
        }),
        cause: error,
        meta: { inPlace },
      }),
    );
  }
}
