import { isError } from "@little-nebulae/error";

import type { ForbiddenEncodedPathSegmentErrorCause } from "@/errors/forbidden-encoded-path-segment/class";

export function isForbiddenEncodedPathSegmentErrorCause(
  value: unknown,
): value is ForbiddenEncodedPathSegmentErrorCause {
  return (
    isError(value) && value.message.includes("is not allowed as a property")
  );
}
