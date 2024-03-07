import React from "react";
import { Todo } from "./TodoController";
import styled from "styled-components";

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
    <StItemContainer key={todo.id}>
      <StTodoItem>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </StTodoItem>

      <StTodoItemButtonSet>
        <StDeleteButton onClick={() => clickDeleteTodoButton(todo.id)}>
          삭제
        </StDeleteButton>
        <StUpdateButton onClick={() => clickUpdateTodoButton(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </StUpdateButton>
      </StTodoItemButtonSet>
    </StItemContainer>
  );
};

export default TodoItem;

const StItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  width: 210px;
  border: 1px solid saddlebrown;
  border-radius: 15px;
  background-color: #fdf0d5;
  color: black;
  box-shadow: 3px 3px 10px gray;
  list-style-type: none;
`;

const StTodoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const StTodoItemButtonSet = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
`;

const StDeleteButton = styled.button`
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(239, 35, 60, 0.5);

  &:hover {
    background-color: #ef233c;
    color: white;
  }
`;

const StUpdateButton = styled.button`
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(56, 176, 0, 0.5);

  &:hover {
    background-color: #38b000;
    color: white;
  }
`;
