export enum TodoStatus {
  PENDING = 'pending',
  DONE = 'done',
}

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
};
