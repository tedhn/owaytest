import {
  UPDATE_SEATS_REQUEST,
  UPDATE_SEATS_FAILURE,
  UPDATE_SEATS_SUCCESS,
} from "./../actions/index";
import { ACTION_TYPES } from "../types";

import { seats } from "../variables";

const initialState = { seats, loading: false };

export const seatReducer = (seatState = initialState, action: ACTION_TYPES) => {
  switch (action.type) {
    case UPDATE_SEATS_REQUEST: {
      return { ...seatState, loading: true };
    }
    case UPDATE_SEATS_SUCCESS: {
      return { seats: action.payload, loading: false };
    }
    case UPDATE_SEATS_FAILURE: {
      return { seats: action.payload, loading: false };
    }

    default: {
      return seatState;
    }
  }
};
