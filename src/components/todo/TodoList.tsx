import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../type/Todo";
import { StListContainer, StTodoList } from "../../styles/TodoListStyle";

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
