import type { $ZodIssue } from "zod/v4/core";

import { BaseError } from "@little-nebulae/error";

export const JSON_STRINGIFY_ERROR_CODE = "JSON_STRINGIFY_ERROR";
export type JsonStringifyErrorCode = typeof JSON_STRINGIFY_ERROR_CODE;

export class JsonStringifyError extends BaseError<
  JsonStringifyErrorCode,
  TypeError,
  { issues: $ZodIssue[] }
> {
  readonly name = "JsonStringifyError";
  readonly code = JSON_STRINGIFY_ERROR_CODE;

  constructor({
    message,
    cause,
    issues,
  }: {
    message?: string;
    cause: TypeError;
    issues: $ZodIssue[];
  }) {
    super({ message: message ?? cause.message, cause, meta: { issues } });
  }
}
