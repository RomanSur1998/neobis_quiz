import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  page: 1,
  query: "",
  filter: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  setQuery(state, action) {
    state.query = action.payload;
  },
  setFilter(state, action) {
    state.filter = action.payload;
  },
});

export const { setPage, setQuery, setFilter } = articlesSlice.actions;
export default articlesSlice.reducer;
