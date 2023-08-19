import React from "react";
import ArgumentComponent from "./ArgumentComponent";
import HOCFunction from "./HOCFunction";

function ParentHOC() {
  // High Order Components (HOC) functions are functions
  // which takes functions as arguments and return a functions.
  const EnhancedComponent = HOCFunction(ArgumentComponent);
  return (
    <div>
      <EnhancedComponent />
    </div>
  );
}

export default ParentHOC;
