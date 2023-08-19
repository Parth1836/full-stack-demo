import React, {useState } from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
  
    return {count, increment, decrement, reset};
  }

function CustomHooks () {
    const {count, increment, decrement, reset} = useCounter(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHooks;