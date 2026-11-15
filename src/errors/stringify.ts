import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

export const JSON_STRINGIFY_ERROR_CODE = "JSON_STRINGIFY_ERROR";
export type JsonStringifyErrorCode = typeof JSON_STRINGIFY_ERROR_CODE;

export class JsonStringifyError<
  TMeta extends BaseErrorMeta = null,
> extends BaseError<JsonStringifyErrorCode, TypeError, TMeta> {
  readonly name = "JsonStringifyError";
  readonly code = JSON_STRINGIFY_ERROR_CODE;

  constructor({
    message,
    cause,
    meta,
  }: {
    message?: string;
    cause: TypeError;
    meta: TMeta;
  }) {
    super({ message: message ?? cause.message, cause, meta });
  }
}
