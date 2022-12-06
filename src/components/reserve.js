/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';
import '../styles/reserve.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Reserve = () => {
  const dispatch = useDispatch();
  // const {bike_id} = useParams()
  // const bike = useSelector((state) => state.models.find((bike)=> bike.id === bike_id))
  // const user = useSelector((state) => state.current_user)
  useEffect(() => {
    dispatch(addReservation);
  }, [dispatch]);

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  // const [model, setModel] = useState('')
  
  const [bike_id, setBikeId] = useState(1);
  const [user_id, setUserId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const bike_id = model.id
    // const current_user = current_user

    const formData = {
      user_id, bike_id, start_date, end_date, location,
    };

    dispatch(addReservation(formData));
    console.log(formData);

    // navigate('/reservations');
  };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label>Select Bike</label>
        <input type="text" value={bike.model} />
        onChange={(e) => { setModel(e.target.value); }}
      </div> */}

      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => { setLocation(e.target.value); }}
        />
      </div>

      <div>
        <label>Start Date</label>
        <input
          type="date"
          value={start_date}
          onChange={(e) => { setStartDate(e.target.value); }}
        />
      </div>

      <div>
        <label>End Date</label>
        <input
          type="date"
          value={end_date}
          onChange={(e) => { setEndDate(e.target.value); }}
        />
      </div>

      <div>
        <label>Bike</label>
        <input
          type="number"
          value={bike_id}
          onChange={(e) => { setBikeId(e.target.value); }}
        />
      </div>

      <div>
        <label>User name</label>
        <input
          type="number"
          value={user_id}
          onChange={(e) => { setUserId(e.target.value); }}
        />
      </div>

      {/* <div>
        <label>User name</label>
        <input type="text" value={user.name} />
      </div> */}
      <input className='reserve-btn' type="submit" value="Add Reservation" />
    </form>
    </div>
  );
};

export default Reserve;
