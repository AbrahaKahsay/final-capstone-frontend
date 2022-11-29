// import addReservationsFailure
// import addReservationsRequest
// import addReservationsSuccess

const api = 'https://jsonplaceholder.typicode.com/users'

export const addToReservations = (bike) => {
    return (dispatch) => {
        dispatch(addReservationsRequest())
        axios.post('/api', { date: '', city: ''})
          .then((response) => {
            const bikes = response.data
          dispatch(addReservationsSuccess(bikes))
          })
          .catch(error=>{
            const error = error.message
            dispatch(addReservationsFailure(error))
          })   
    }
  }