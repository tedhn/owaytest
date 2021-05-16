import React from "react";

import SelectScreen from "./component/Select";
import Nav from "./component/Navbar";

import "./App.scss";

function App() {
  const [screen, setScreen] = React.useState(2);

  const handleScreenChange = (screenValue: number) => {
    setScreen(screenValue);
  };

  return (
    <div className="App">
      <Nav />
      <div className="tab">
        <div
          onClick={() => handleScreenChange(0)}
          style={{
            borderBottom:
              screen === 0 ? "5px solid rgb(47, 47, 243)" : "transparent",
          }}
        >
          Bus Details
        </div>
        <div
          onClick={() => handleScreenChange(1)}
          style={{
            borderBottom:
              screen === 1 ? "5px solid rgb(47, 47, 243)" : "transparent",
          }}
        >
          Cancellation Policy
        </div>
        <div
          onClick={() => handleScreenChange(2)}
          style={{
            borderBottom:
              screen === 2 ? "5px solid rgb(47, 47, 243)" : "transparent",
          }}
        >
          Seat Selection
        </div>
      </div>

      {screen === 0 && <div className="screen">Bus Details</div>}
      {screen === 1 && <div className="screen">Cancellation Policy</div>}
      {screen === 2 && <SelectScreen />}
    </div>
  );
}

export default App;
