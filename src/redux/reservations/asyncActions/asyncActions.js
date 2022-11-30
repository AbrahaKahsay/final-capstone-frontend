// import addReservationsFailure
// import addReservationsRequest
// import addReservationsSuccess

const api = 'https://jsonplaceholder.typicode.com/users'

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