// slice = filtersSlice
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {},
  },
  // initialState: {
  //   filters: {
  //     location: "",
  //     AC: true,
  //     water: true,
  //     engin: true,
  //     kitchen: true,
  //   },
  // },
  reducers: {
    setFilter(state, action) {
      state.filters[action.payload.filterName] = action.payload.value;
    },
    setChangeFilter: (state, action) => {
      state.filters = action.payload; // Оновлюємо всі фільтри
    },
    resetFilters(state) {
      state.filters = {};
    },
  },

  // reducers: {
  //   setChangeFilter: (state, action) => {
  //     state.filters = action.payload; // Оновлюємо всі фільтри
  //   },
  //   setFilter(state, action) {
  //     const { filterName, value } = action.payload;
  //     state.filters[filterName] = value; // Оновлюємо конкретний фільтр
  //   },
  //   resetFilters: state => {
  //     state.filters = {
  //       location: "",
  //       AC: false,
  //       water: false,
  //       engin: false,
  //       kitchen: false,
  //     };
  //   },
  // },
});

export const { setChangeFilter, setFilter, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// const initialState = {
//   filters: {},
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     setFilter(state, action) {
//       const { filterName, value } = action.payload;
//       state.filters[filterName] = value;
//     },
//     resetFilters(state) {
//       state.filters = {};
//     },
//   },
// });
