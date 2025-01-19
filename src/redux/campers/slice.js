import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTruck, findTruckById } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedTruck: null, // Для збереження деталей вантажівки
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
      })
      .addCase(findTruckById.pending, state => {
        state.loading = true;
      })
      .addCase(findTruckById.fulfilled, (state, action) => {
        state.selectedTruck = action.payload; // Зберігаємо деталі вантажівки
        state.loading = false;
        state.error = null;
      })
      .addCase(findTruckById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Серіалізовані дані про помилку
      });
  },
});

export default campersSlice.reducer;
