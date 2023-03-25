import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import barangApi from "./barang.api";

export const fecthBarang = createAsyncThunk("fecth/barang", async () => {
  await barangApi.getAll();
});

const barangSlice = createSlice({
  name: "barang",
  initialState: {
    data: [],
    status: "idle",
  },
  extraReducers(builder) {
    builder
      .addCase(fecthBarang.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fecthBarang.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export const barangSLI = barangSlice.reducer;
