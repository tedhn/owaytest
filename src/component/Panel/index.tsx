import React from "react";

import "./index.scss";

interface Props {
  selected: any;
  totalPrice: any;
  handleSeatsUpdate: any;
}

const Panel: React.FC<Props> = ({
  selected,
  totalPrice,
  handleSeatsUpdate,
}) => {
  return (
    <div className="panel">
      <div className="text">Selected {selected.length} Seats </div>
      <div className="pricelist">
        <div className="list">
          {selected.map((value: any, index: number) => {
            return (
              <div key={index} className="item">
                {value}
              </div>
            );
          })}
        </div>
        <div className="price">Total Price : {totalPrice}</div>
      </div>
      <div className="button" onClick={handleSeatsUpdate}>
        Confirm
      </div>
    </div>
  );
};

export default Panel;
