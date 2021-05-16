import { seatReducer } from "./seatReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const createReducer = () => {
  return combineReducers({ seatState: seatReducer });
};
