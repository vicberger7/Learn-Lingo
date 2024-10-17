import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async ({ startAt = null, limit = 4 }, thunkAPI) => {
    try {
     
     let url = `https://learn-lingo-4257b-default-rtdb.europe-west1.firebasedatabase.app/.json?orderBy="$key"&limitToFirst=${limit}`;
      if (startAt) {
        url += `&startAt="${startAt}"`;
      }

      const response = await axios.get(url);
      console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);