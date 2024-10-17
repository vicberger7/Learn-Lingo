


import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './teachersOps';

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: { teachers: [], loading: true },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;

        state.teachers = action.payload
          ? Object.values(action.payload).filter((item) => item !== null)
          : [];
      })
      .addCase(fetchTeachers.rejected, (state) => {
        state.loading = false;
      }),
});

export const teachersReducer = teachersSlice.reducer;