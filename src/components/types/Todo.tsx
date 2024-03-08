export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TodoFormProps = {
  title: string;
  content: string;
  onChangeTitleHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickAddTodoButton: (event: React.FormEvent) => void;
};

export type TodoListProps = {
  headTitle: string;
  todos: Todo[];
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
};

export type TodoItemProps = {
  todo: Todo;
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
};
