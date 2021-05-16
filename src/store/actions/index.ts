export const UPDATE_SEATS_REQUEST = "UPDATE_SEATS_REQUEST";
export const UPDATE_SEATS_SUCCESS = "UPDATE_SEATS_SUCCESS";
export const UPDATE_SEATS_FAILURE = "UPDATE_SEATS_FAILURE";

export const updateSeatsRequest = (selected: Array<any>, seats: any) => ({
  type: UPDATE_SEATS_REQUEST,
  payload: { selected, seats },
  loading: true,
  types: [UPDATE_SEATS_SUCCESS, UPDATE_SEATS_FAILURE, UPDATE_SEATS_REQUEST],
});

export const updateSeatsSuccess = (seats: any) => ({
  type: UPDATE_SEATS_SUCCESS,
  payload: seats,
  loading: false,
});
export const updateSeatsFailure = (seats: any) => ({
  type: UPDATE_SEATS_FAILURE,
  payload: seats,
  loading: false,
});
