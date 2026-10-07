import { BaseError } from "@little-nebulae/error";

export const INVALID_JSON_TEXT_ERROR_CODE = "INVALID_JSON_TEXT_ERROR";
export type InvalidJsonTextErrorCode = typeof INVALID_JSON_TEXT_ERROR_CODE;

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
