import React from "react";

export default ({countValue, dispatch/*, decreaseCount, increaseCount*/}) => <div>
    <button onClick={() => dispatch({type: 'decrease'})}>-</button>
    <span>{countValue}</span>
    <button onClick={() => dispatch({type: 'increase'})}>+</button>
    {/*<button onClick={increaseCount}>+</button>*/}
</div>
