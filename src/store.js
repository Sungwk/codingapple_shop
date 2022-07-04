import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    plusAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, plusAge } = user.actions;

let cartItem = createSlice({
  name: "cartItem",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusCount(state, action) {
      state.find((x) => x.id == action.payload).count += 1;
    },
    addItem(state, action) {
      let item = state.find((x) => x.id == action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        let item = { id: action.payload.id, name: action.payload.title, count: 1 };
        state.push(item);
      }
    },
  },
});

export let { plusCount, addItem } = cartItem.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    cartItem: cartItem.reducer,
  },
});
