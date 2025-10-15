export const TEST = 'word';

export type Nullish<T> = T | null | undefined | void;

export interface Service {
  a(id: string): Promise<Nullish<string>>;
  b(ids: string[]): Promise<boolean>;
  c(): Promise<string[]>;
}

export interface A {
  service: Service;
}
