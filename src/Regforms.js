import React from "react";

function Regforms(){
    return(
        <div>
            <form>
            <input type="text" placeholder='firstname'/><br/>
      <input type="text" placeholder='lastname'/><br/>
      <label htmlFor="">Gender:</label>
      <input type="radio" name='gender' value='male'/>male
      <input type="radio" name="gender" value="female"/>female
      <input type="radio" name='gender' value='others'/>others<br/>
      <button onClick="submit">submit</button>

      </form>
      </div>
    )
}
export default Regforms;