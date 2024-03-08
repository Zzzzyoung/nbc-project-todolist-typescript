import axios from "axios";
import { Todo } from "../components/types/todo.d";

const todoApi = axios.create({
  baseURL: process.env.REACT_APP_TODO_SERVER_URL
});

const getTodos = async () => {
  const { data } = await todoApi.get<Todo[]>("/todos");
  return data;
};

const addTodo = async (newTodo: Todo) => {
  await todoApi.post("/todos", newTodo);
};

const deleteTodo = async (id: string) => {
  await todoApi.delete(`/todos/${id}`);
};

const updateTodo = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  await todoApi.patch(`/todos/${id}`, { isDone });
};

export default todoApi;
export { getTodos, addTodo, deleteTodo, updateTodo };
