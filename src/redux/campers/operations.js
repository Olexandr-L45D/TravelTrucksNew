// contacts - operattions
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchAllTruck = createAsyncThunk(
  "campers/fetchAllTruck",
  // in fetchContact Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен ( а пусто не можна залишати!)
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");

      return response.data.items;
      // `axios` автоматично повертає вже розпарсений JSON у response.data
    } catch (e) {
      // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

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

//тут в фалі запитів це оголошення 3 операції (1-ша - запит на базовий УРЛ для відмалювання всих контактів - axios.defaults.baseURL, addContact, deleteContact)
// "tasks/fetchAll/pending" - початок запиту
// "tasks/fetchAll/fulfilled" - успішне завершення запиту
// "tasks/fetchAll/rejected" - завершення запиту з помилкою

// return {
//   title: response.data.title,
//   poster_path: response.data.poster_path,
//   release_date: response.data.release_date,
//   vote_average: response.data.vote_average,
//   overview: response.data.overview,
//   status: response.data.status,
//   // genres: { id: response.data.id, name: response.data.name },
// };
