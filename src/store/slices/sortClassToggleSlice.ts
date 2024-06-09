import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClassToggleSort } from "../../types/classToggleTypes.ts";

const initialState: IClassToggleSort = {
    sortClass: "",
};

const sortClassToggleSlice = createSlice({
    name: "toggleClass",
    initialState: initialState,
    reducers: {
        classToggleSort(state, action: PayloadAction<string>) {
            state.sortClass = action.payload;
        },

        classToDefaultSort(state) {
            state.sortClass = initialState.sortClass;
        },
    },
});

export const { classToggleSort, classToDefaultSort } =
    sortClassToggleSlice.actions;
export default sortClassToggleSlice.reducer;
