type PrimitiveTypeAnnotation = "number" | "undefined" | "bigint";
type LeafTypeAnnotation = PrimitiveTypeAnnotation | "regexp" | "Date" | "URL";
type TypedArrayAnnotation = ["typed-array", string];
type ClassTypeAnnotation = ["class", string];
type SymbolTypeAnnotation = ["symbol", string];
type CustomTypeAnnotation = ["custom", string];
type SimpleTypeAnnotation = LeafTypeAnnotation | "map" | "set" | "Error";
type CompositeTypeAnnotation =
  | TypedArrayAnnotation
  | ClassTypeAnnotation
  | SymbolTypeAnnotation
  | CustomTypeAnnotation;
export type TypeAnnotation = SimpleTypeAnnotation | CompositeTypeAnnotation;

type Tree<T> = InnerNode<T> | Leaf<T>;
type Leaf<T> = [T];
type InnerNode<T> = [T, Record<string, Tree<T>>];
export type MinimisedTree<T> = Tree<T> | Record<string, Tree<T>> | undefined;

export type ReferentialEqualityAnnotations =
  | Record<string, string[]>
  | [string[]]
  | [string[], Record<string, string[]>];
