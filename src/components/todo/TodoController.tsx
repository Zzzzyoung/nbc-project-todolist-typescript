import shortId from "shortid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "../types/Todo";
import { RootState } from "../../redux/config/configStore";
import {
  addTodo,
  deleteTodo,
  setTodos,
  updateTodo
} from "../../redux/modules/todoSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import todoApi from "../../apis/todo";

const TodoController: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const onChangeContentHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  // Todo 데이터 가져오기
  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data } = await todoApi.get("/todos");
        dispatch(setTodos(data));
      } catch (error) {
        console.error(error);
        alert("데이터를 가져오는 중에 오류가 발생했습니다.");
      }
    };
    getTodos();
  }, [dispatch]);

  // Todo 추가하기
  const clickAddTodoButton = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("제목을 입력하세요.");
      return;
    } else if (title && !content.trim()) {
      alert("내용을 입력하세요.");
      return;
    }

    try {
      const checkAdd = window.confirm("할 일을 추가하시겠습니까?");
      if (checkAdd) {
        const newTodo: Todo = {
          id: shortId.generate(),
          title,
          content,
          isDone: false
        };

        const { data } = await todoApi.post("/todos", newTodo);

        dispatch(addTodo(data));
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error(error);
      alert("Todo 추가 중에 오류가 발생했습니다.");
    }
  };

  // Todo 삭제하기
  const clickDeleteTodoButton = async (id: string) => {
    const checkDelete = window.confirm("정말 삭제하시겠습니까?");
    if (checkDelete) {
      try {
        await todoApi.delete(`/todos/${id}`);
        dispatch(deleteTodo(id));
      } catch (error) {
        console.error(error);
        alert("Todo 삭제 중에 오류가 발생했습니다.");
      }
    }
  };

  // Todo 상태 업데이트하기 (완료/취소)
  const clickUpdateTodoButton = async (id: string) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        await todoApi.patch(`/todos/${id}`, { isDone: !todoToUpdate.isDone });
        dispatch(updateTodo(id));
      }
    } catch (error) {
      console.error(error);
      alert("Todo 업데이트 중에 오류가 발생했습니다.");
    }
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
