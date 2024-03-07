import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import uuid from "react-uuid";

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const App: React.FC = () => {
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

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Todo List</h1>

        <form onSubmit={clickAddTodoButton}>
          <label>제목 </label>
          <input type="text" value={title} onChange={onChangeTitleHandler} />
          <label>내용 </label>
          <input
            type="text"
            value={content}
            onChange={onChangeContentHandler}
          />
          <button type="submit">추가하기</button>
        </form>

        <div>
          <h2>Working</h2>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <div key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
                <button onClick={() => clickDeleteTodoButton(todo.id)}>
                  삭제
                </button>
                <button onClick={() => clickUpdateTodoButton(todo.id)}>
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </div>
            ))}
        </div>

        <div>
          <h2>Done</h2>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <div key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
                <button onClick={() => clickDeleteTodoButton(todo.id)}>
                  삭제
                </button>
                <button onClick={() => clickUpdateTodoButton(todo.id)}>
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
