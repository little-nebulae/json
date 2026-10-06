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
