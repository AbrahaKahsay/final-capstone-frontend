import React from 'react'

function Form() {
  return (
    <form>
        <div>
            <label>Select Bike</label>
            <input type='text' value={model}/>
        </div>
        <div>
            <label>City</label>
            <input type='text' value={city}/>
        </div>
        <div>
            <label>Date</label>
            <input type='date' value={date}/>
        </div>
    </form> 
    )
}

export default Form