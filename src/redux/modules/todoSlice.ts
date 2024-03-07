import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../components/types/Todo";
import todoApi from "../../apis/todo";

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const initialState: TodoState = {
  todos: [],
  isLoading: true,
  isError: false,
  error: null
};

export const __setTodos = createAsyncThunk<Todo[]>(
  "setTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await todoApi.get("/todos");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk<Todo, Todo>(
  "addTodo",
  async (newTodo, thunkAPI) => {
    try {
      const { data } = await todoApi.post("/todos", newTodo);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk<Todo[], string>(
  "deleteTodo",
  async (id, thunkAPI) => {
    try {
      const { data } = await todoApi.delete(`/todos/${id}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodo = createAsyncThunk<
  Todo[],
  { id: string; isDone: boolean }
>("updateTodo", async (payload, thunkAPI) => {
  try {
    const { data } = await todoApi.patch(`/todos/${payload.id}`, {
      isDone: !payload.isDone
    });
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__setTodos.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__setTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = action.payload;
      })
      .addCase(__setTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__addTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [...state.todos, action.payload];
      })
      .addCase(__addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__deleteTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = action.payload;
      })
      .addCase(__deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__updateTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__updateTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = action.payload;
      })
      .addCase(__updateTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  }
});

export default todoSlice.reducer;
