export type ArrayElementType<A> = A extends readonly (infer T)[] ? T : never;
export type PickByValue<T, ValueType> = Pick<
  T,
  {
    [Key in keyof T]: T[Key] extends ValueType ? Key : never;
  }[keyof T]
>;
