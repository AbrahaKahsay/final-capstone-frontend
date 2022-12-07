/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';
import '../styles/reserve.css'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Reserve = () => {
  const dispatch = useDispatch();
  const locationReact = useLocation()
  const { id } = locationReact.state || {id: null}
  const user = useSelector((state) => state.current_user.user)
  useEffect(() => {
    dispatch(addReservation);
  }, [dispatch]);

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [bikeId, setBikeId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_id: user.id, bike_id: id || bikeId, start_date, end_date, location,
    };
    dispatch(addReservation(formData));
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
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
        {id ?
          <input className='reserve-btn' type="submit" value="Add Reservation" />
          :
          <>
            <div>
              <label>Bike:</label>
              {/* input to be added */}
            </div>
            <input className='reserve-btn' type="submit" value="Add Reservation" />
          </>
        }
      </form>
    </div>
  );
};

export default Reserve;
