import React from "react";
import styled from "styled-components";

interface TodoFormProps {
  title: string;
  content: string;
  clickAddTodoButton: (event: React.FormEvent) => void;
  onChangeTitleHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  title,
  content,
  clickAddTodoButton,
  onChangeTitleHandler,
  onChangeContentHandler
}) => {
  return (
    <StSubmitContainer onSubmit={clickAddTodoButton}>
      <StInputContainer>
        <label>제목</label>
        <input type="text" value={title} onChange={onChangeTitleHandler} />
        <label>내용</label>
        <input type="text" value={content} onChange={onChangeContentHandler} />
      </StInputContainer>
      <StTodoAddButton type="submit">추가하기</StTodoAddButton>
    </StSubmitContainer>
  );
};

export default TodoForm;

const StSubmitContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 30px 25px;
  height: 50px;
  max-width: 1230px;
  min-width: 800px;
  border: 1px solid;
  border-radius: 15px;
  border-color: transparent;
  font-size: 18px;
  font-weight: 700;
  background-color: #669bbc;
`;

const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  label {
    font-size: 16px;
  }

  input {
    height: 20px;
    border-radius: 5px;
    border-color: transparent;
  }
`;

const StTodoAddButton = styled.button`
  margin-left: 10px;
  padding: 5px 8px;
  border-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  background-color: #0230499f;
  color: white;

  &:hover {
    background-color: #003049;
    color: white;
  }
`;
