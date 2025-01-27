import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// export const fetchAllTruck = createAsyncThunk(
//   "campers/fetchAllTruck",
//   // in fetchContact Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен ( а пусто не можна залишати!)
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/campers");

//       return response.data.items;
//       // `axios` автоматично повертає вже розпарсений JSON у response.data
//     } catch (e) {
//       // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const findTruckById = createAsyncThunk(
  "campers/findTruckById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data; // Повертаємо об'єкт, який прийшов із сервера
    } catch (error) {
      // Перевіряємо, чи це AxiosError, і передаємо серіалізовану інформацію
      return thunkAPI.rejectWithValue({
        status: error.response?.status,
        message: error.message,
      });
    }
  }
);

export const fetchAllTruck = createAsyncThunk(
  "campers/fetchAllTruck",

  async ({ page = 1 }, { thunkAPI, getState }) => {
    try {
      const filter = getState().filters.filters;
      // console.log(filter);
      console.log("Fetching Page:", page); // Додати лог для переірки кількості запитів
      const response = await axios.get("/campers", {
        params: {
          page,
          filter,
          limit: 4,
        },
      });
      // console.log("Request params:", { page, limit: 5, filter });
      return response.data;
      // `axios` автоматично повертає вже розпарсений JSON у response.data
    } catch (e) {
      // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//  було параметроп в запиті, поки прибрав
// items: {
//   location: "Ukraine, Kyiv",
//   kitchen: false,
//   AC: false,
//   bathroom: false,
//   van: false,
//   TV: false,
// },
