import React from "react";

function Todo (){
    const[task,settask]=React.useState([])
    const[newtask,setnewtask]=React.useState({})
  
    function addTask(){
      settask([...task,newtask])
    }
    function update(e){
      setnewtask({...task,ab:e.target.value})
    }
    function del(a){
      task.splice(a,1)
      settask([...task])
    }
  
    return(
      <div>
        <h1> Todo </h1>
        <input type="text" onChange={update}/>
        <button onClick={addTask}>addtask</button>
        {
          task.map((t,i)=>{
            return(<li key={i}>{t.ab}
            <button onClick={(a)=>del(i)}>del</button>
            </li>)
          })
        }
          </div>
    )
}
export default Todo;