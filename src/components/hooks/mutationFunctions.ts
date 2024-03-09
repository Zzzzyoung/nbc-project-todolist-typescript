import todoApi from "../../apis/todoApi";
import { Todo } from "../types/todo.d";

export const addTodo = async (newTodo: Todo) => {
  try {
    await todoApi.post("/todos", newTodo);
  } catch (error) {
    alert("Todo 추가 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await todoApi.delete(`/todos/${id}`);
  } catch (error) {
    alert("Todo 삭제 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};

export const updateTodo = async ({
  id,
  isDone
}: {
  id: string;
  isDone: boolean;
}) => {
  try {
    await todoApi.patch(`/todos/${id}`, { isDone });
  } catch (error) {
    alert("Todo 업데이트 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};
