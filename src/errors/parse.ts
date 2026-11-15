import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

export const JSON_PARSE_ERROR_CODE = "JSON_PARSE_ERROR";
export type JsonParseErrorCode = typeof JSON_PARSE_ERROR_CODE;

export class JsonParseError<
  TMeta extends BaseErrorMeta = null,
> extends BaseError<JsonParseErrorCode, SyntaxError, TMeta> {
  readonly name = "JsonParseError";
  readonly code = JSON_PARSE_ERROR_CODE;

  constructor({
    message,
    cause,
    meta,
  }: {
    message?: string;
    cause: SyntaxError;
    meta: TMeta;
  }) {
    super({ message: message ?? cause.message, cause, meta });
  }
}
