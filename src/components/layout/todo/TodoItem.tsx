import React from "react";
import { Todo } from "./TodoController";

interface TodoItemProps {
  todo: Todo;
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  clickDeleteTodoButton,
  clickUpdateTodoButton
}) => {
  return (
    <div key={todo.id}>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <button onClick={() => clickDeleteTodoButton(todo.id)}>삭제</button>
      <button onClick={() => clickUpdateTodoButton(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default TodoItem;
