export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export type TodoFormProps = {
  title: string;
  content: string;
  onChangeTitleHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickAddTodoButton: (event: React.FormEvent) => void;
};

export interface TodoProps {
  todo: Todo;
  todos: Todo[];
  headTitle: string;
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
}

export type TodoListProps = Omit<TodoProps, "todo">;

export type TodoItemProps = Omit<TodoProps, "todos" | "headTitle">;
