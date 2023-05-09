import { configureStore } from "@reduxjs/toolkit";
import cinemaSlice from "./card/NowInCinema"

export const store = configureStore({
    reducer: {
        nowInCinema: cinemaSlice,
    }
})