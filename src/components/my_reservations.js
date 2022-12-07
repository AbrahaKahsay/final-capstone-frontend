import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsFromServer, removeReservations } from '../redux/reservations/reservations';
import { fetchModelsAsync } from '../redux/models/models';
import '../styles/my_reservations.css';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const bikes = useSelector((state) => state.models);
  console.log('bikes');
  console.log(bikes);

  useEffect(() => {
    dispatch(fetchReservationsFromServer());
    dispatch(fetchModelsAsync());
  });

  const handleDelete = () => {
    dispatch(removeReservations);
  };

  return (
    <div className="res-container">
      <h1>My Reservations</h1>
      {reservations.map((reservation) => {
        const bike = bikes.find((bike) => bike.id === reservation.bike_id);
        return (
          <div className="card" key={reservation.id}>
            <h2>
              City:
              {reservation.location}
            </h2>
            <h2>
              bike:
              {bike.model}
            </h2>
            <h2>
              Start Date:
              {reservation.start_date}
            </h2>
            <h2>
              End Date:
              {reservation.end_date}
            </h2>
            <div className="delete-reservation">
              <button type="button" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyReservations;
