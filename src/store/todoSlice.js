import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  }, // - state
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action.payload); // данные
      state.todos.push(action.payload);
    },
    changeTodoStatus: (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload) 
        todo.status = !todo.status // не важно тру или фолс
    }
  },
});

export const { addTodo, changeTodoStatus } = todoSlice.actions; // actions - фиксированные слова
export default todoSlice.reducer; // reducer -  управлять состоянием и action
