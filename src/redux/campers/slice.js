import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTruck, findTruckById, reservation } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    isFetched: false,
    error: null,
    selectedTruck: null, // Для збереження деталей вантажівки
    isBooked: false,
    id: 1,
    name: "Truck Name",
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
        state.isFetched = true;
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
      })
      .addCase(reservation.fulfilled, (state, action) => {
        const truckIndex = state.trucks.findIndex(
          truck => truck.id === action.payload.truckId
        );
        if (truckIndex >= 0) {
          state.trucks[truckIndex].isBooked = true; // Оновлюємо статус
        }
        state.loading = false;
      })
      .addCase(reservation.pending, state => {
        state.loading = true;
      })
      .addCase(reservation.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default campersSlice.reducer;
