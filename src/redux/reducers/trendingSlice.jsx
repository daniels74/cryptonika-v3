import { createSlice } from "@reduxjs/toolkit";

const trendingSlice = createSlice({
  name: "trending",
  initialState: {},
  reducers: {
    getTrending() {},
    setTrending(state, action) {
      const TrendingData = action.payload;
      return { ...state, ...TrendingData };
    }
  }
});

export const { getTrending, setTrending } = trendingSlice.actions;

export default trendingSlice.reducer;
