import type { Tagged } from "type-fest";

import type { EncodableValue } from "@/types/encodable";
import type { JsonValue } from "@/types/json";
import type {
  MinimisedTree,
  ReferentialEqualityAnnotations,
  TypeAnnotation,
} from "@/types/meta";

export type EncodedValue = {
  json: JsonValue;
  meta?: {
    values?: MinimisedTree<TypeAnnotation>;
    referentialEqualities?: ReferentialEqualityAnnotations;
    v?: number;
  };
};

export type EncodedValueOfTagName = "EncodedValueOf";
export type EncodedValueOf<T extends EncodableValue> = Tagged<
  EncodedValue,
  EncodedValueOfTagName,
  T
>;
