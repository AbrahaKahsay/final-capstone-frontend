import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../../redux/reservations/reservations'

const Reservation = ({model , city, date, id, photo }) => {
  const dispatch = useDispatch()

    const handleDelete=()=>{
      dispatch(removeReservation(id))
    }
  return (
    <div>
      <div className='photo'>
        <img src={photo} />
      </div>
      <div className='details'>
        <h3>{ model }  </h3>
        <h4> { date } </h4>
        <h4>{city}</h4>
       <button onClick={handleDelete}> Remove </button>
      </div>
    </div>
  )
}

export default Reservation
