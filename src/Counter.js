import React from "react";

function Counter (){
    const [count,setcount]=React.useState(0)
    return(
        <div>
      <h1>counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>{setcount(count+1)}}>inc</button>&nbsp;&nbsp;
      <button onClick={()=>{setcount(count-1)}}>dec</button>

        </div>
    )
}
export default Counter;