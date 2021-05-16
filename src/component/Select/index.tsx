import React from "react";

import { connect } from "react-redux";
import "./index.scss";
import { seatType, rootState } from "../../store/types";
import { updateSeatsRequest } from "../../store/actions";
import Seat from "../Seat";
import Panel from "../Panel";

interface Props {
  seatState: any;
  updateSeats: any;
}

const Select: React.FC<Props> = ({ seatState, updateSeats }) => {
  const [selected, setSelected] = React.useState(Array);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleSelectUpdate = (seatnumber: string, seatprice: number) => {
    let newSelected = [...selected];
    newSelected.push(seatnumber);
    setSelected(newSelected);
    setTotalPrice(totalPrice + seatprice);
  };
  const handleDeselectUpdate = (seatnumber: string, seatprice: number) => {
    let newSelected = [...selected];
    newSelected.splice(newSelected.indexOf(seatnumber), 1);
    setSelected(newSelected);
    setTotalPrice(totalPrice - seatprice);
  };

  const handleSeatsUpdate = () => {
    updateSeats(selected, seatState.seats);
    setSelected([]);
    setTotalPrice(0);
  };

  return (
    <div className="selectWrapper">
      <div className="seatWrapper">
        <div className="seats">
          {seatState.seats.map((column: any, index1: number) => {
            return (
              <div className="r" key={index1 + ""}>
                {column.map((seat: seatType, index2: number) => {
                  if (seat.number === "") {
                    return (
                      <div className="space" key={index1 + index2 + ""}></div>
                    );
                  }

                  return (
                    <Seat
                      key={index1 + index2 + ""}
                      seat={seat}
                      handleSelectUpdate={handleSelectUpdate}
                      handleDeselectUpdate={handleDeselectUpdate}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="legend">
          <div className="item">
            <div className="available"></div>
            <div className="text">Available</div>
          </div>
          <div className="item">
            <div className="booked"></div>
            <div className="text">Booked</div>
          </div>
          <div className="item">
            <div className="blocked"></div>
            <div className="text">Blocked</div>
          </div>
          <div className="item">
            <div className="BBL"></div>
            <div className="text">Booked by ladies</div>
          </div>
        </div>
      </div>

      <Panel
        selected={selected}
        totalPrice={totalPrice}
        handleSeatsUpdate={handleSeatsUpdate}
      />
    </div>
  );
};

const statetoProps = (state: rootState) => {
  return {
    seatState: state.seatState,
  };
};

const actionToProps = (dispatch: any) => {
  return {
    updateSeats: (selected: Array<any>, seats: any) => {
      dispatch(updateSeatsRequest(selected, seats));
    },
  };
};

export default connect(statetoProps, actionToProps)(Select);
