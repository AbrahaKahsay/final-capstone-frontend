import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsFromServer } from '../redux/reservations/reservations';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservationsFromServer);
  }, [dispatch]);

  return (
    <div>
      <h1>Hi</h1>
      <h2>{reservations}</h2>
      {/* {reservations.map((reservation) => (
        <div key={reservation.id}>
          <h2>{reservation.location}</h2>
          <h2>{reservation.date}</h2>
        </div>
      ))} */}

    </div>
  );
}

export default MyReservations;
