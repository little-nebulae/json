import { isError } from "@little-nebulae/error";

import type { InvalidEncodedPathErrorCause } from "@/errors/invalid-encoded-path/class";

export function isInvalidEncodedPathErrorCause(
  value: unknown,
): value is InvalidEncodedPathErrorCause {
  return isError(value) && value.message.includes("invalid path");
}
