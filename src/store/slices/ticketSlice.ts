import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketsState } from "../../types/TTicket.ts";

const initialState: TicketsState = {
    list: [
        {
            id: 3,
            from: "SVO",
            to: "LED",
            company: "S7",
            price: 23995,
            currency: "Р",
            time: {
                startTime: "04:50",
                endTime: "13:30",
            },
            duration: 510,
            transfers: 2,
        },
        {
            id: 2,
            from: "SVO",
            to: "LED",
            company: "RED WINGS",
            price: 21500,
            currency: "Р",
            time: {
                startTime: "14:00",
                endTime: "16:00",
            },
            duration: 120,
            transfers: 0,
        },
        {
            id: 1,
            from: "SVO",
            to: "LED",
            company: "Победа",
            price: 12680,
            currency: "Р",
            time: {
                startTime: "12:00",
                endTime: "16:30",
            },
            duration: 270,
            transfers: 1,
        },
    ],
};

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        sortByPrice(state) {
            state.list = state.list.sort((a, b) => a.price - b.price);
        },

        sortByTime(state) {
            state.list = state.list.sort((a, b) => a.duration - b.duration);
        },

        sortByTransfers(state) {
            state.list = state.list.sort((a, b) => a.transfers - b.transfers);
        },

        filterCompany(state, action: PayloadAction<string[]>) {
            state.list = initialState.list.filter((company) =>
                action.payload.includes(company.company),
            );
            if (state.list.length === 0) {
                state.list = initialState.list;
            }
        },

        filterTransfers(state, action: PayloadAction<number[]>) {
            state.list = initialState.list.filter((flight) =>
                action.payload.includes(flight.transfers),
            );
            if (state.list.length === 0) {
                state.list = initialState.list;
            }
        },
    },
});

export const {
    sortByPrice,
    sortByTime,
    sortByTransfers,
    filterTransfers,
    filterCompany,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
