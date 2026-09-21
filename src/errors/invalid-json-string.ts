import { BaseError } from "@little-nebulae/error";

export const INVALID_JSON_STRING_ERROR_CODE = "INVALID_JSON_STRING_ERROR";
export type InvalidJsonStringErrorCode = typeof INVALID_JSON_STRING_ERROR_CODE;

export class InvalidJsonStringError extends BaseError<
  InvalidJsonStringErrorCode,
  SyntaxError,
  null
> {
  readonly name = "InvalidJsonStringError";
  readonly code = INVALID_JSON_STRING_ERROR_CODE;
}
