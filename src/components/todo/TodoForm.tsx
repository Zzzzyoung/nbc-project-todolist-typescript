import React from "react";
import {
  StInputContainer,
  StSubmitContainer,
  StTodoAddButton
} from "../../styles/TodoFormStyle";

interface TodoFormProps {
  title: string;
  content: string;
  onChangeTitleHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickAddTodoButton: (event: React.FormEvent) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  title,
  content,
  onChangeTitleHandler,
  onChangeContentHandler,
  clickAddTodoButton
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
