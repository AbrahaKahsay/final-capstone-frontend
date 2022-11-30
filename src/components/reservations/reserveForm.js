import React, { useState } from 'react';
import { addToReservations } from '../../redux/reservations/asyncActions/asyncActions';

const Form = (props) => {

  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    const data = {user_id, bike_id, date, city}

    dispatch(addToReservations())
    console.log(data)

    navigate( '/reservations')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Bike</label>
        <input type="text" value={bike.model} />
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
