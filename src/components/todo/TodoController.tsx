import shortId from "shortid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "../types/todo.d";
import { useState } from "react";

import { StError, StLoading } from "../../styles/TodoControllerStyle";
import Loading from "../../assets/Loading.gif";
import { QUERY_KEYS } from "../hooks/keys.constant";
import { addTodo, deleteTodo, updateTodo } from "../hooks/mutationFunctions";
import { useGetTodos } from "../hooks/useQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoController: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const onChangeContentHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  // useMutation
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });

  // useQuery
  // Todo 가져오기
  const { data, isLoading, isError } = useGetTodos();

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
        id: shortId.generate(),
        title,
        content,
        isDone: false
      };

      addTodoMutation.mutate(newTodo);
      setTitle("");
      setContent("");
    }
  };

  // Todo 삭제하기
  const clickDeleteTodoButton = (id: string) => {
    const checkDelete = window.confirm("정말 삭제하시겠습니까?");
    if (checkDelete) {
      deleteTodoMutation.mutate(id);
    }
  };

  // Todo 상태 업데이트하기 (완료/취소)
  const clickUpdateTodoButton = (id: string) => {
    const todoToUpdate = data?.find((item) => item.id === id);

    if (todoToUpdate) {
      updateTodoMutation.mutate({ id, isDone: !todoToUpdate.isDone });
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
