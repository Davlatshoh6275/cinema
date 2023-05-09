import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Base_Url_Cinema from "../Base_Url";

export const fetchCinemas = createAsyncThunk(
  "cinemas/fetchCinemas",
  async () => {
    const response = await axios.get(`${Base_Url_Cinema}`);
    return response.data;
  }
);

const cinemaSlice = createSlice({
  name: "Cinemas",
  initialState: {
    cinemas: [],
    status: null,
    error: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder

      .addCase(fetchCinemas.pending, (state, action) => {
        state.status = "Loadig...";
      })
      .addCase(fetchCinemas.fulfilled, (state, action) => {
        state.status = "Success";
        state.cinemas = action.payload;
      })
      .addCase(fetchCinemas.rejected, (state, action) => {
        state.status = "fail";
      });
  },
});

export default cinemaSlice.reducer;
export const selectAllCinema = (state) => state.nowInCinema.cinemas;
