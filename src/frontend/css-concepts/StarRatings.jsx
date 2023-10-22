import React, { useState } from "react";
import filledStar from "../../../assets/images/filled.jpg";
import unFilledStar from "../../../assets/images/unfilled.png";

export const StarRatings = () => {
  const [filled, setFilled] = useState([]);
  const [stars, setStars] = useState([
    { id: 1, filled: false, clicked:false },
    { id: 2, filled: false, clicked:false },
    { id: 3, filled: false, clicked:false},
    { id: 4, filled: false, clicked:false },
    { id: 5, filled: false, clicked:false },
  ]);
  const mouseEnterFun = (idx) => {};

  const handleClick = (idx, type) => {
    console.log("clicked index", idx);
    const newStarsArr = stars.map((ele, index) => {
      if (index < idx) {
        ele.filled = true;
        if(type === "click") {
            ele.clicked = true;
          }
      } else {
        ele.filled = false;
      }
      
      console.log("22 ele", ele);
      return ele;
    });
    console.log("newStarsArr", newStarsArr);
    setStars(newStarsArr);
  };

  const handleMouseLeave = (idx) => {
    console.log("mouse leave", idx, stars[idx]);
    const newStarsArr = stars.map((ele, index) => {
      if (index < idx) {
        ele.filled = false;
      } 
    //   else {
    //     ele.filled = false;
    //   }
      console.log("40 ele", ele);
      return ele;
    });
    console.log("newStarsArr", newStarsArr);
    setStars(newStarsArr);
  };
  return (
    <>
      <h1>StarRatings</h1>
      {/* {console.log("ele", stars.map((ele)=> console.log("filled", ele.filled)))} */}
      {stars.length &&
        stars.map((ele, i) =>
          //    console.log("filled", ele.filled)
          ele?.filled ? (
            <img
              id={i}
              style={{ width: "50px" }}
              src={filledStar}
              onClick={() => handleClick(i + 1, "click")}
              onMouseEnter={() => handleClick(i + 1, "mouseEnter")}
              onMouseLeave={() => handleMouseLeave(i + 1)}
            />
          ) : (
            <img
              id={i}
              style={{ width: "50px" }}
              src={unFilledStar}
              onClick={() => handleClick(i + 1, "click")}
              onMouseEnter={() => handleClick(i + 1, "mouseEnter")}
              onMouseLeave={() => handleMouseLeave(i + 1)}
            />
          )
        )}
    </>
  );
};
