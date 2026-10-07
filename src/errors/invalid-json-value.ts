import { BaseError } from "@little-nebulae/error";

export const INVALID_JSON_VALUE_ERROR_CODE = "INVALID_JSON_VALUE_ERROR";
export type InvalidJsonValueErrorCode = typeof INVALID_JSON_VALUE_ERROR_CODE;

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
