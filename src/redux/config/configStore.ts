import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todos
  }
});

// RootState : Redux 스토어의 state를 나타내는 타입
export type RootState = ReturnType<typeof store.getState>;
// AppDispath : Redux 액션을 dispatch하는 함수의 타입
export type AppDispatch = typeof store.dispatch;
export default store;
