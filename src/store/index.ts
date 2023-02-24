import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { movieSlice } from "./slices/movieSlice";
import { createWrapper } from "next-redux-wrapper";
import { enableMapSet } from 'immer';

enableMapSet();

const makeStore = () =>
  configureStore({
    reducer: {
      [movieSlice.name]: movieSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);