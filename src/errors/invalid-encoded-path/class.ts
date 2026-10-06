import type { Tagged } from "type-fest";

import { BaseError } from "@little-nebulae/error";

export const INVALID_ENCODED_PATH_ERROR_CODE = "INVALID_ENCODED_PATH_ERROR";
export type InvalidEncodedPathErrorCode =
  typeof INVALID_ENCODED_PATH_ERROR_CODE;

export type InvalidEncodedPathErrorCauseTagName =
  "InvalidEncodedPathErrorCause";
export type InvalidEncodedPathErrorCause = Tagged<
  Error,
  InvalidEncodedPathErrorCauseTagName
>;

export class InvalidEncodedPathError extends BaseError<
  InvalidEncodedPathErrorCode,
  InvalidEncodedPathErrorCause
> {
  readonly name = "InvalidEncodedPathError";
  readonly code = INVALID_ENCODED_PATH_ERROR_CODE;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: InvalidEncodedPathErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
