import { BaseError } from "@little-nebulae/error";

import type { InvalidJsonValueErrorCode } from "@/error/codes";

import { INVALID_JSON_VALUE_ERROR_CODE } from "@/error/codes";

export class InvalidJsonValueError extends BaseError<
  InvalidJsonValueErrorCode,
  TypeError
> {
  readonly name = "InvalidJsonValueError";
  readonly code = INVALID_JSON_VALUE_ERROR_CODE;

  constructor({ message, cause }: { message?: string; cause: TypeError }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
