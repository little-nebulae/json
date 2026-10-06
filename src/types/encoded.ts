import type { JsonValue } from "@/types/json";
import type {
  MinimisedTree,
  ReferentialEqualityAnnotations,
  TypeAnnotation,
} from "@/types/meta";

export type Encoded = {
  json: JsonValue;
  meta?: {
    values?: MinimisedTree<TypeAnnotation>;
    referentialEqualities?: ReferentialEqualityAnnotations;
    v?: number;
  };
};
