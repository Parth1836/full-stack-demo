import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";


function PureComponent (props) {
   console.log("This is a Pure Component!")
   
    return (
        <div>
           <h1>Job: {props.job}</h1>
           <h1>Age: {props.age}</h1>
        </div>
    )
}

export default React.memo(PureComponent);