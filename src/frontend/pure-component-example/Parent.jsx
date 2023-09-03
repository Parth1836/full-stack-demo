import React, {useEffect, useState } from "react";
import PureComponent from "./PureComponent";
import { useSelector } from "react-redux";



function Parent () {
   console.log("This is a Parent Component!");
   const [salary, setSalary] = useState(10000);
   const [age, setAge] = useState(25);
   const [job, setJob] = useState("Technician");
   const csData = useSelector((state) => state.customerSolution.csData);
   console.log("csData", csData);
   useEffect(()=> {
    // setInterval(()=> {
    //     console.log("inside set interval");
    //     setSalary(salary + 1000)
    // }, 5000);
   })
    return (
        <div>
            <h1>Salary: {salary}</h1>
           <PureComponent age={age} job={job} />
        </div>
    )
}

export default Parent;