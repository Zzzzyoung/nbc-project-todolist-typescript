import React from "react";
import { Todo } from "./TodoController";
import TodoItem from "./TodoItem";
import styled from "styled-components";

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

const StListContainer = styled.section`
  margin: 50px auto 60px auto;
  padding: 0 30px;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }
`;

const StTodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 25px;
`;
