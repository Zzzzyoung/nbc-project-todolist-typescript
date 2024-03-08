import { PropsWithChildren } from "react";
import {
  StInputContainer,
  StSubmitContainer,
  StTodoAddButton
} from "../../styles/TodoFormStyle";
import { TodoFormProps } from "../types/Todo";

const TodoForm = ({
  title,
  content,
  onChangeTitleHandler,
  onChangeContentHandler,
  clickAddTodoButton
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
