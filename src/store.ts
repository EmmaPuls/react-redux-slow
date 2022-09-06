import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemList = Item[];
type Item = {
  id: string;
  value: string;
};

type State = {
  itemList: ItemList;
};

const initialState: State = {
  itemList: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState: { itemList: initialState.itemList },
  reducers: {
    initItems: (state, action: PayloadAction<ItemList>) => {
      state.itemList = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      if (!state.itemList.find((item) => item.id === action.payload.id)) {
        state.itemList.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.itemList = state.itemList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export default store;
