import {
  UPDATE_SEATS_REQUEST,
  UPDATE_SEATS_FAILURE,
  UPDATE_SEATS_SUCCESS,
} from "./../actions/index";

export interface rootState {
  seatState: any;
}

export interface updateSeatsRequest {
  type: typeof UPDATE_SEATS_REQUEST;
  payload: any;
}
export interface updateSeatsSuccess {
  type: typeof UPDATE_SEATS_SUCCESS;

  payload: any;
}
export interface updateSeatsFailure {
  type: typeof UPDATE_SEATS_FAILURE;
  payload: any;
}

export interface seatType {
  number: string;
  available: boolean;
  price: number;
  status: string;
}

export type ACTION_TYPES =
  | updateSeatsRequest
  | updateSeatsSuccess
  | updateSeatsFailure;
