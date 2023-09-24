export interface Filterable<T, U = T[]> {
  filter(predicate: (v: T) => unknown): U;
}
