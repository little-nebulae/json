import { BaseError } from "@little-nebulae/error";

export const JSON_PARSE_ERROR_CODE = "JSON_PARSE_ERROR";
export type JsonParseErrorCode = typeof JSON_PARSE_ERROR_CODE;

export class JsonParseError extends BaseError<JsonParseErrorCode, SyntaxError> {
  readonly name = "JsonParseError";
  readonly code = JSON_PARSE_ERROR_CODE;

  constructor({ message, cause }: { message?: string; cause: SyntaxError }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
