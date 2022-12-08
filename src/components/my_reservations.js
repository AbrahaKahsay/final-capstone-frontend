import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsFromServer, removeReservations } from '../redux/reservations/reservations';
import { fetchModelsAsync } from '../redux/models/models';
import '../styles/my_reservations.css';

function MyReservations() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.current_user.user);
  useEffect(() => {
    dispatch(fetchReservationsFromServer(user.id));
    dispatch(fetchModelsAsync());
  }, [dispatch, user.id]);

  const reservations = useSelector((state) => state.reservations.reservations);
  const bikes = useSelector((state) => state.models);
  const handleDelete = (id) => {
    dispatch(removeReservations({ id, user_id: user.id }));
  };

  return (
    <div className="res-container">
      <h1>My Reservations</h1>

      {reservations.length !== 0 ? reservations.map((reservation) => {
        const bike = bikes.find((bike) => bike.id === reservation.bike_id);
        return (
          <div className="card" key={reservation.id}>
            <h2>
              City:
              {reservation.location}
            </h2>
            {bike
              ? (
                <h2>
                  bike:
                  {bike.model}
                </h2>
              )
              : <p /> }
            <h2>
              Start Date:
              {reservation.start_date}
            </h2>
            <h2>
              End Date:
              {reservation.end_date}
            </h2>
            <div className="delete-reservation">
              <button type="button" onClick={() => handleDelete(reservation.id)}>Delete</button>
            </div>
          </div>
        );
      })
        : <h2>No reservations</h2>}
    </div>
  );
}

export default MyReservations;
