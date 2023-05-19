import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// Define a type for the slice state
interface UserState {
  value: string[];
}

// Define the initial state using that type
const initialState: UserState = {
  value: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
