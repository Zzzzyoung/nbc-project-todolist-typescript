import React from "react";

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
    <form onSubmit={clickAddTodoButton}>
      <label>제목 </label>
      <input type="text" value={title} onChange={onChangeTitleHandler} />
      <label>내용 </label>
      <input type="text" value={content} onChange={onChangeContentHandler} />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoForm;
