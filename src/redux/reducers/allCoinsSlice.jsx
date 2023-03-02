import { createSlice } from "@reduxjs/toolkit";

const allCoinsSlice = createSlice({
  name: "allCoins",
  initialState: {},
  reducers: {
    getAllCoins() {},
    setAllCoins(state, action) {
      const data = action.payload;
      return { ...state, ...data };
    }
  }
});

export const { getAllCoins, setAllCoins } = allCoinsSlice.actions;

export default allCoinsSlice.reducer;
