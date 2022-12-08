/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';
import '../styles/reserve.css'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchModelsAsync } from '../redux/models/models';

const Reserve = () => {
  const dispatch = useDispatch();
  const locationReact = useLocation()
  const { id } = locationReact.state || {id: null};
  const user = useSelector((state) => state.current_user.user)
  const models = useSelector((state) => state.models);
  console.log(user);
  console.log(models);
  useEffect(() => {
    dispatch(fetchModelsAsync());
  }, [dispatch]);

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [bikeId, setBikeId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_id: user.id, bike_id: id || bikeId , start_date, end_date, location,
    };
    dispatch(addReservation(formData));
  };

  const modelsList = (bikes) => {
    const list = bikes.map((bike) => (
      <option key={`res-${bike.id}`} value={bike.id}>{ bike.model }</option>
    ));
    return list;
  }

  return (
    <div className='form-container'>
      <h1 className='tit-form'>RESERVE A BIKE</h1>
      <form className='res-form' onSubmit={handleSubmit}>
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
              <label>Bike Model</label>
              <input list="models"
                name="models"
                id="list-cont"
                value = {bikeId}
                onChange={(e) => { setBikeId(e.target.value); }}
              />
                <datalist id="models">
                  { modelsList(models) }
                </datalist>
            </div>
            <input className='reserve-btn' type="submit" value="Add Reservation" />
          </>
        }
      </form>
    </div>
  );
};

export default Reserve;
