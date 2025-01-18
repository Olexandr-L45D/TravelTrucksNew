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
export const gindById = createAsyncThunk(
  "campers/gindById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data.items.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const res = await axios.delete('/contacts/{contactId}');
//тут в фалі запитів це оголошення 3 операції (1-ша - запит на базовий УРЛ для відмалювання всих контактів - axios.defaults.baseURL, addContact, deleteContact)
// "tasks/fetchAll/pending" - початок запиту
// "tasks/fetchAll/fulfilled" - успішне завершення запиту
// "tasks/fetchAll/rejected" - завершення запиту з помилкою
// початковий варіант запиту без відпрацювання станів з помилками:
// export const fetchTasks = createAsyncThunk("contacts/fetchAll", async () => {
//     const response = await axios.get("/contacts");
//     return response.data;
// });

// deleteContact При успішному запиті повертаємо проміс із даними з бекенду для видалення шукаєм по id - contactId
// (ця не працює а верхня з шаблонним рядком і зн долар працює (`/contacts/${contactId}`))
// export const deleteContact = createAsyncThunk("contacts/deleteContact",
//     async (contactId, thunkAPI) => {
//         try {
//             const response = await axios.delete("/contacts", { contactId });
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );
