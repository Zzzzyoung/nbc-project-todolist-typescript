import axios from "axios";
import { Todo } from "../components/types/todo.d";

const todoApi = axios.create({
  baseURL: process.env.REACT_APP_TODO_SERVER_URL
});

const getTodos = async () => {
  try {
    const { data } = await todoApi.get<Todo[]>("/todos");
    return data;
  } catch (error) {
    alert("Todo 데이터를 불러오는 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};

const addTodo = async (newTodo: Todo) => {
  try {
    await todoApi.post("/todos", newTodo);
  } catch (error) {
    alert("Todo 추가 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};

const deleteTodo = async (id: string) => {
  try {
    await todoApi.delete(`/todos/${id}`);
  } catch (error) {
    alert("Todo 삭제 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};

const updateTodo = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  try {
    await todoApi.patch(`/todos/${id}`, { isDone });
  } catch (error) {
    alert("Todo 업데이트 중에 오류가 발생했습니다.");
    console.error(error);
    throw error;
  }
};

export default todoApi;
export { getTodos, addTodo, deleteTodo, updateTodo };
