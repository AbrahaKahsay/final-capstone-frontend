import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsFromServer, removeReservations } from '../redux/reservations/reservations';
import '../styles/my_reservations.css';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  console.log(reservations);

  useEffect(() => {
    dispatch(fetchReservationsFromServer);
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(removeReservations);
  };

  return (
    <div className="res-container">
      <h1>My Reservations</h1>
      {reservations.map((reservation) => (
        <div className="card" key={reservation.id}>
          <h2>
            City:
            {reservation.location}
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
      ))}
    </div>
  );
}

export default MyReservations;
