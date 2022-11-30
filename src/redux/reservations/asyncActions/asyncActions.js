import axios from "axios"
import { 
  addReservationsRequest, 
  addReservationsSuccess,
  addReservationsFailure} from "../actions/actionCreators"

const api = 'http://localhost:4000/api/v1/users/1/reservations'

export const addToReservations = (reservation) => {
    return (dispatch) => {
        dispatch(addReservationsRequest())
        axios.post('/api', { date: '', city: ''})
          .then((response) => {
            const reservations = response.data
          dispatch(addReservationsSuccess(reservations))
          })
          .catch(error=>{
            const error = error.message
            dispatch(addReservationsFailure(error))
          })   
    }
  }

  // Add actions for remove 