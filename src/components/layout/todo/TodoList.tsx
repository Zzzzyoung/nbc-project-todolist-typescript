import React from "react";
import { Todo } from "./TodoController";
import TodoItem from "./TodoItem";

interface TodoListProps {
  headTitle: string;
  todos: Todo[];
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  headTitle,
  todos,
  clickDeleteTodoButton,
  clickUpdateTodoButton
}) => {
  return (
    <div>
      <h2>{headTitle}</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          clickDeleteTodoButton={clickDeleteTodoButton}
          clickUpdateTodoButton={clickUpdateTodoButton}
        />
      ))}
    </div>
  );
};

export default TodoList;
