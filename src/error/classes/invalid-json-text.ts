import { BaseError } from "@little-nebulae/error";

import type { InvalidJsonTextErrorCode } from "@/error/codes";

import { INVALID_JSON_TEXT_ERROR_CODE } from "@/error/codes";

export class InvalidJsonTextError extends BaseError<
  InvalidJsonTextErrorCode,
  SyntaxError
> {
  readonly name = "InvalidJsonTextError";
  readonly code = INVALID_JSON_TEXT_ERROR_CODE;

  constructor({ message, cause }: { message?: string; cause: SyntaxError }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
