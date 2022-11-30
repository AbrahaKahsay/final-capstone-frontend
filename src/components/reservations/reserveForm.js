import React, { useState } from 'react';

const Form = ({ model, bike_id, handleSubmit }) => {

  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    const data = {user_id, bike_id, date, city}

    dispatch(postReservation())
    console.log(data)
    
    navigate( '/reservations')
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e, { user_id, bike_id, date, city })}>
      <div>
        <label>Select Bike</label>
        <input type="text" value={model} readOnly />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => { setCity(e.target.value); }}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); }}
        />
      </div>
      <div>
        <label>User name</label>
        <input type="text" value={user.name} />
      </div>
      <input type="submit" value="Add Reservation" />
    </form>
  );
};

export default Form;
