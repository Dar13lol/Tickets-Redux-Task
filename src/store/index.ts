import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./slices/ticketSlice.ts";
import sortClassToggleReducer from "./slices/sortClassToggleSlice.ts";
import settingsClassToggleReducer from "./slices/settingsClassToggle.ts";

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        classToggleSort: sortClassToggleReducer,
        classToggleSettings: settingsClassToggleReducer,
    },
});

export default store;
