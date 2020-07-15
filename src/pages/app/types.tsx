export interface Todo {
  description?: string,
  id?: number,
  title?: string,
  priority?: Priorities,
};

export enum Priorities {
  baixo,
  medio,
  alto,
}
