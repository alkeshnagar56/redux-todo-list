import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  TodoList: [],
};

const Reducer = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const objToDO = {
        id: nanoid(),
        text: action.payload,
      };
      state.TodoList.push(objToDO);
    },
    removeTodo: (state, action) => {
      state.TodoList = state.TodoList.filter(
        (item) => item.id != action.payload
      );
    },
    updateToDo: (state, action) => {
      const { id, text } = action.payload;
      const idExist = state.TodoList.find((item) => item.id == id);
      if (idExist){
        idExist.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateToDo} = Reducer.actions;
export default Reducer.reducer;
