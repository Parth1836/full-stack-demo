import React from "react";

const HOCFunction  = (Component) => {
    console.log("HOC Function", Component);
    return () => (
        <div style={{border: "2px solid red"}}>
           <h1>Hi I am HOC Component !</h1>
            <Component />
        </div>
    )
}

export default HOCFunction;