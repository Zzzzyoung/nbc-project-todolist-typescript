import TodoItem from "./TodoItem";
import { TodoListProps } from "../types/todo.d";
import { StListContainer, StTodoList } from "../../styles/TodoListStyle";

const TodoList = ({
  headTitle,
  todos,
  clickDeleteTodoButton,
  clickUpdateTodoButton
}: TodoListProps) => {
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
