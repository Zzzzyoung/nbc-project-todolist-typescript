import React, { PropsWithChildren } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";
import { StListContainer, StTodoList } from "../../styles/TodoListStyle";

type TodoListProps = {
  headTitle: string;
  todos: Todo[];
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
};

const TodoList = ({
  headTitle,
  todos,
  clickDeleteTodoButton,
  clickUpdateTodoButton
}: PropsWithChildren<TodoListProps>) => {
  return (
    <StListContainer>
      <h2>{headTitle}</h2>
      <StTodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            clickDeleteTodoButton={clickDeleteTodoButton}
            clickUpdateTodoButton={clickUpdateTodoButton}
          />
        ))}
      </StTodoList>
    </StListContainer>
  );
};

export default TodoList;
