import shortId from "shortid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "../types/todo.d";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../../apis/todoApi";
import { StError, StLoading } from "../../styles/TodoControllerStyle";
import Loading from "../../assets/Loading.gif";

const TodoController: React.FC = () => {
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });
  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const onChangeContentHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  // Todo 가져오기
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return (
      <StLoading>
        <img src={Loading} alt="Loading" />
        잠시만 기다려 주세요.
      </StLoading>
    );
  }

  if (isError) {
    return <StError>오류가 발생하였습니다.</StError>;
  }

  const workingTodos = data?.filter((item) => !item.isDone) || [];
  const doneTodos = data?.filter((item) => item.isDone) || [];

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

        addTodoMutation.mutate(newTodo);
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
        await deleteTodoMutation.mutate(id);
      } catch (error) {
        console.error(error);
        alert("Todo 삭제 중에 오류가 발생했습니다.");
      }
    }
  };

  // Todo 상태 업데이트하기 (완료/취소)
  const clickUpdateTodoButton = async (id: string) => {
    try {
      const todoToUpdate = data?.find((item) => item.id === id);

      if (todoToUpdate) {
        await updateTodoMutation.mutate({ id, isDone: !todoToUpdate.isDone });
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
