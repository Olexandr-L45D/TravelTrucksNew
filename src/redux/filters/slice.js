import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // filters: "",
  filters: {},
  // filters: {
  //   location: "Ukraine, Kyiv",
  // },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { filterName, value } = action.payload;
      console.log("Set filter currents:", filterName, value); // Діагностика
      state.filters = { ...state.filters, [filterName]: value };
    },
    // setFilter(state, action) {
    //   const { filterName, value } = action.payload;
    //   state.filters = { ...state.filters, [filterName]: value,
    //   };
    // },
    setChangeFilter: (state, action) => {
      state.filters = action.payload; // Оновлюємо всі фільтри
    },
    // resetFilters(state) {
    //   state.filters = {};
    // },
  },
});

export const { setChangeFilter, setFilter, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// {
//   filters: {
//     filters: {
//       location: "Ukraine, Kyiv",
//       kitchen: true,
//       ...
//     }
//   },
//   campers: {
//     items: [...],
//     ...
//   }
// }

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

// add filtersReducer

// const initialState = {
//   location: "",
//   feature1: false,
//   feature2: false,
// };

// const filtersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_FILTER":
//       return {
//         ...state,
//         [action.payload.key]: action.payload.value,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;
