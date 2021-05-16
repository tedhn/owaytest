import { UPDATE_SEATS_REQUEST } from "../actions";

import { takeLatest, put } from "redux-saga/effects";

export function* updateSeatsSaga() {
  yield takeLatest(UPDATE_SEATS_REQUEST, update);
}

function* update(action: any) {
  const { payload, types } = action;

  const { selected, seats } = payload;

  selected.forEach((value: any) => {
    seats.forEach((c: any) => {
      c.forEach((seat: any) => {
        if (seat.number === value) {
          seat.available = false;
        }
      });
    });
  });

  yield put({ type: types[0], payload: seats });
}
