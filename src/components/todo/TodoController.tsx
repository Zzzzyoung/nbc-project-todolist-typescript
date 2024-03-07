import { useState } from "react";
import uuid from "react-uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const TodoController: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

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

      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  // Todo 삭제하기
  const clickDeleteTodoButton = (id: string) => {
    const checkDelete = window.confirm("정말 삭제하시겠습니까?");
    if (checkDelete) {
      const remainTodo = todos.filter((todo) => todo.id !== id);
      setTodos(remainTodo);
    }
  };

  // Todo 상태 업데이트하기 (완료/취소)
  const clickUpdateTodoButton = (id: string) => {
    const updateTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updateTodo);
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

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
