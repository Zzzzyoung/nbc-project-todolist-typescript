import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../components/types/Todo";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<String>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<String>) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    }
  }
});

export const { setTodos, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
