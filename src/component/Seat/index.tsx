import React from "react";
import { seatType } from "../../store/types";

interface Props {
  seat: seatType;
  handleSelectUpdate: any;
  handleDeselectUpdate: any;
}

const Seat: React.FC<Props> = ({
  seat,
  handleSelectUpdate,
  handleDeselectUpdate,
}) => {
  const [focus, setFocus] = React.useState(false);

  const handleClick = () => {
    if (seat.available) {
      if (!focus) {
        handleSelectUpdate(seat.number, seat.price);
      } else {
        handleDeselectUpdate(seat.number, seat.price);
      }

      setFocus(!focus);
    }
  };

  return (
    <div
      className="c"
      onClick={handleClick}
      style={{
        backgroundColor: seat.available
          ? "rgb(62, 168, 255)"
          : "rgb(0, 107, 194)",
        cursor: seat.available ? "pointer" : "default",
      }}
    >
      {seat.number}
    </div>
  );
};

export default Seat;
