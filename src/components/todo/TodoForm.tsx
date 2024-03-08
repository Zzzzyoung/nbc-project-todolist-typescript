import React, { PropsWithChildren } from "react";
import {
  StInputContainer,
  StSubmitContainer,
  StTodoAddButton
} from "../../styles/TodoFormStyle";

type TodoFormProps = {
  title: string;
  content: string;
  clickAddTodoButton: (event: React.FormEvent) => void;
  onChangeTitleHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoForm = ({
  title,
  content,
  clickAddTodoButton,
  onChangeTitleHandler,
  onChangeContentHandler
}: PropsWithChildren<TodoFormProps>) => {
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
