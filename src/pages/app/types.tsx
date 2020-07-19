export interface Todo {
  description?: string,
  title?: string,
  priority?: Priorities,
};

export interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement,
}

export enum Priorities {
  baixo,
  medio,
  alto,
};

export const PrioritiesName = ['Baixo', 'Médio', 'Alto'];
