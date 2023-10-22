import React, { useState } from "react";

const Sqaure = ({ value, onSquareClick }) => {
  console.log("value", value);
  return (
    <div
      style={{
        border: "1px solid black",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
      }}
      onClick={() => onSquareClick()}
    >
      {value}
    </div>
  );
};
export const TicTacToe = () => {
  // rule is that, game starts with X turn
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXturn] = useState(true);
  const handleClick = (index) => {
    console.log("index", index, state);
    const tempState = state;
    tempState[index] = isXTurn ? "X" : "0";
    console.log("tempState", tempState);
    setState(tempState);
    setIsXturn(!isXTurn);
  };

  const checkWinner = () => {
    let winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const handleReset = () => {
    const tempState = Array(9).fill(null);
    setState(tempState);
  };
  return (
    <>
      <h1
        style={{
          fontSize: "4rem",
          fontFamily: "Arial",
          color: "cornflowerblue",
          textDecoration: "overline",
          margin:"20px 5px 20px 5px"
        }}
      >
        TicTacToe
      </h1>
      {checkWinner() && (
        <>
          <h1 style={{ color: "lawngreen" }}>{checkWinner()} Won the game</h1>
          <button
            style={{
              backgroundColor: "coral",
              width: "150px",
              color: "white",
              height: "50px",
              margin: "5px",
              fontSize: "25px",
              cursor: "pointer",
            }}
            onClick={handleReset}
          >
            Play Again !
          </button>
        </>
      )}
      <div className="board-container" style={{ width: "21%", margin: "auto" }}>
        <div
          className="board-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {console.log("state", state)}
          <Sqaure value={state[0]} onSquareClick={() => handleClick(0)} />
          <Sqaure value={state[1]} onSquareClick={() => handleClick(1)} />
          <Sqaure value={state[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div
          className="board-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Sqaure value={state[3]} onSquareClick={() => handleClick(3)} />
          <Sqaure value={state[4]} onSquareClick={() => handleClick(4)} />
          <Sqaure value={state[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div
          className="board-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Sqaure value={state[6]} onSquareClick={() => handleClick(6)} />
          <Sqaure value={state[7]} onSquareClick={() => handleClick(7)} />
          <Sqaure value={state[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};
