// slice = filtersSlice
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { filter: "" },
  filters: {
    name: "",
    price: null,
    rating: null,
    location: "",
  },
  reducers: {
    setChangeFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilter(state, action) {
      const { filterName, value } = action.payload;
      state.filters[filterName] = value; // Оновлюємо конкретний фільтр
    },
    resetFilters(state) {
      state.filters = {
        name: "",
        price: null,
        rating: null,
        location: "",
      }; // Скидаємо фільтри
    },
  },
});
export const { setChangeFilter, setFilter, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
