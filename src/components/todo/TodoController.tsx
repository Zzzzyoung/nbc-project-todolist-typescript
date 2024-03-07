import uuid from "react-uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "../type/Todo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/configStore";
import { addTodo, deleteTodo, updateTodo } from "../../redux/modules/todoSlice";
import { useState } from "react";

const TodoController: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const onChangeContentHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  // Todo 추가하기
  const clickAddTodoButton = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("제목을 입력하세요.");
      return;
    } else if (title && !content.trim()) {
      alert("내용을 입력하세요.");
      return;
    }

    const checkAdd = window.confirm("할 일을 추가하시겠습니까?");
    if (checkAdd) {
      const newTodo: Todo = {
        id: uuid(),
        title,
        content,
        isDone: false
      };

      dispatch(addTodo(newTodo));
      setTitle("");
      setContent("");
    }
  };

  // Todo 삭제하기
  const clickDeleteTodoButton = (id: string) => {
    const checkDelete = window.confirm("정말 삭제하시겠습니까?");
    if (checkDelete) {
      dispatch(deleteTodo(id));
    }
  };

  // Todo 상태 업데이트하기 (완료/취소)
  const clickUpdateTodoButton = (id: string) => {
    dispatch(updateTodo(id));
  };

  return (
    <main>
      <TodoForm
        title={title}
        content={content}
        onChangeTitleHandler={onChangeTitleHandler}
        onChangeContentHandler={onChangeContentHandler}
        clickAddTodoButton={clickAddTodoButton}
      />
      <TodoList
        headTitle="Working..🔥"
        todos={workingTodos}
        clickDeleteTodoButton={clickDeleteTodoButton}
        clickUpdateTodoButton={clickUpdateTodoButton}
      />
      <TodoList
        headTitle="Done..!🎉"
        todos={doneTodos}
        clickDeleteTodoButton={clickDeleteTodoButton}
        clickUpdateTodoButton={clickUpdateTodoButton}
      />
    </main>
  );
};

export default TodoController;
