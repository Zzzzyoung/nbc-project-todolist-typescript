import React from "react";
import { Todo } from "./TodoController";

interface TodoListProps {
  todos: Todo[];
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  clickDeleteTodoButton,
  clickUpdateTodoButton
}) => {
  return (
    <div>
      <div>
        <h2>Working</h2>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
              <button onClick={() => clickDeleteTodoButton(todo.id)}>
                삭제
              </button>
              <button onClick={() => clickUpdateTodoButton(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </div>
          ))}
      </div>

      <div>
        <h2>Done</h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
              <button onClick={() => clickDeleteTodoButton(todo.id)}>
                삭제
              </button>
              <button onClick={() => clickUpdateTodoButton(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
