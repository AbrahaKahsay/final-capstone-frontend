import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsFromServer } from '../redux/reservations/reservations';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  console.log(reservations);
  useEffect(() => {
    dispatch(fetchReservationsFromServer);
  }, [dispatch]);

  return (
    <div>
      <h1>This is a list of your reservations</h1>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
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
        </div>
      ))}

    </div>
  );
}

export default MyReservations;
