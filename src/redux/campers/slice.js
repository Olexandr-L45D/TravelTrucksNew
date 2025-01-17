import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTruck } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllTruck.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllTruck.fulfilled, (state, action) => {
        // state.items = action.payload; // Зберігаємо масив вантажівок
        state.items = action.payload.items || [];
        state.loading = false;
      })
      .addCase(fetchAllTruck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;

// const slice = createSlice({
//   name: "campers",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,

//   },

//   reducers: {  },
//   },

//   extraReducers: builder => {
//     builder
//       .addCase(fetchAllTruck.pending, state => {
//         state.loading = true;
//       })
//       .addCase(fetchAllTruck.fulfilled, (state, action) => {
//         console.log("Дані з API (fulfilled):", action.payload); // Додатковий лог
//         state.items = action.payload.items || []; // Беремо лише масив items
//         console.log("Redux state.items:", state.items); // Лог після оновлення
//         state.loading = false;
//       })
//       .addCase(fetchAllTruck.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(gindById.pending, state => {
//         state.loading = true;
//       })
//       .addCase(gindById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(gindById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
// export const { setFilter, resetFilters } = slice.actions;
// export default slice.reducer;
