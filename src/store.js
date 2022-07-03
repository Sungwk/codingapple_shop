import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    plusAge(state, a) {
      state.age += a.payload;
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
    plusCount(state, a) {
      state.find((x) => x.id == a.payload).count += 1;
    },
    addItem(state, a) {
      let item = state.find((x) => x.id == a.payload.id);
      if (item) {
        item.count += 1;
      } else {
        let item = { id: a.payload.id, name: a.payload.title, count: 1 };
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
