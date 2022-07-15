import React from "react"

function Calculator (){
    const[n1,newn1]=React.useState('')
    const[brackets,setBracket]=React.useState('(')
  
   
    function handleChange(e){
      newn1(e.target.value)
    }
    const backspace=()=>{
      const y=n1.slice(0,n1.length-1)
      newn1(y)
      }
      const handleBrackets1=()=>{
        newn1(n1+'(');
        setBracket(')');
      }
      const  handleBrackets2=()=>{
        newn1(n1+')');
        setBracket('(');
      }
    return (
      <div>
  <h1>calculator</h1>
  {/* <h1>{n1}</h1> */}
  <input type="text"  value={n1}onChange={handleChange} className='input' />
  <div className='bg'>
  <div>
    <button  className='btn' onClick={()=>{newn1('')}}>AC</button> 
    { brackets=='('?(
        <button  className="btn" onClick={handleBrackets1} >	 &#40;	&#41;</button>):
           ( <button  className="btn" onClick={handleBrackets2}>  &#40;	&#41;</button>)} 
    <button   className='btn' onClick={()=>{newn1(n1/100)}}>%</button> 
    <button  className='btn' onClick={()=>{newn1(n1+'/')}}><span>&#247;</span>
  
  </button> 
    </div> 
  <div>
    <button className='btn' onClick={()=>{newn1(n1+'7')}}>7</button> 
    <button  className='btn' onClick={()=>{newn1(n1+'8')}}>8</button> 
    <button  className='btn' onClick={()=>{newn1(n1+'9')}}>9</button> 
    <button  className='btn' onClick={()=>{newn1(n1+"*")}}>X</button> 
    </div> 
    <div>
    <button  className='btn' onClick={()=>{newn1(n1+'4')}}>4</button> 
    <button  className='btn' onClick={()=>{newn1(n1+'5')}}>5</button> 
    <button  className='btn' onClick={()=>{newn1(n1+'6')}}>6</button> 
    <button  className='btn' onClick={()=>{newn1(n1+'-')}}>-</button> 
    </div>
    <div>
    <button  className='btn' onClick={()=>{newn1(n1+'1')}}>1</button> 
    <button  className='btn' onClick={()=>{newn1(n1+"2")}}>2</button> 
    <button  className='btn' onClick={()=>{newn1(n1+"3")}}>3</button> 
    <button  className='btn' onClick={()=>{newn1(n1+"+")}}>+</button> 
    </div>
    <div>
    <button  className='btn' onClick={()=>{newn1(n1+0)}}>0</button> 
    <button   className='btn' onClick={()=>{newn1(n1+".")}}>.</button> 
    <button  className='btn' onClick={backspace}>C</button> 
    <button  className='btn' onClick={()=>{newn1(eval(n1))}}>=</button> 
    </div>
    </div>
   </div>
    );
  }
  
export default Calculator;
