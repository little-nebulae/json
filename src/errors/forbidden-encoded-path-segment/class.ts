import type { Tagged } from "type-fest";

import { BaseError } from "@little-nebulae/error";

export type ForbiddenEncodedPathSegmentErrorCause = Tagged<
  Error,
  "ForbiddenEncodedPathSegmentErrorCause"
>;

export class ForbiddenEncodedPathSegmentError extends BaseError<
  "FORBIDDEN_ENCODED_PATH_SEGMENT_ERROR",
  ForbiddenEncodedPathSegmentErrorCause
> {
  readonly name = "ForbiddenEncodedPathSegmentError";
  readonly code = "FORBIDDEN_ENCODED_PATH_SEGMENT_ERROR";

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: ForbiddenEncodedPathSegmentErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
