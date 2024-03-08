import { PropsWithChildren } from "react";
import { Todo } from "../types/Todo";
import {
  StDeleteButton,
  StItemContainer,
  StTodoItem,
  StTodoItemButtonSet,
  StUpdateButton
} from "../../styles/TodoItemStyle";

type TodoItemProps = {
  todo: Todo;
  clickDeleteTodoButton: (id: string) => void;
  clickUpdateTodoButton: (id: string) => void;
};

const TodoItem = ({
  todo,
  clickDeleteTodoButton,
  clickUpdateTodoButton
}: PropsWithChildren<TodoItemProps>) => {
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
