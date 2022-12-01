import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservations/reservations';
// import { postReservations } from '../../redux/reservations/newAxios';

const Form = () => {
  const dispatch = useDispatch();
  //   const reservations = useSelector((state) => state.reservations.reservations);

  useEffect(() => {
    dispatch(addReservation);
  }, [dispatch]);

  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [bike_id, setBikeId] = useState(1);
  const [user_id, setUserId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user_id, bike_id, date, location,
    };

    dispatch(addReservation(formData));
    console.log(formData);

    // navigate('/reservations');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label>Select Bike</label>
        <input type="text" value={bike.model} />
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
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); }}
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
        <label>User</label>
        <input
          type="number"
          value={user_id}
          onChange={(e) => { setUserId(e.target.value); }}
        />
      </div>

      {/* //   <div>
    //     <label>User name</label>
    //     <input type="text" value={user.name} />
    //   </div> */}
      <input type="submit" value="Add Reservation" />
    </form>
  );
};

export default Form;
