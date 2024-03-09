import todoApi from "../../apis/todoApi";
import { Todo } from "../types/todo.d";

export const getTodos = async () => {
  try {
    const { data } = await todoApi.get<Todo[]>("/todos");
    return data;
  } catch (error) {
    alert("Todo 데이터를 불러오는 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};
