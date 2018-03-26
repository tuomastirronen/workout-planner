import muscleService from '../services/muscles'

const muscleReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'INIT_NOTES':
    return action.data
  default:
    return state
  }
}

export const initializeMuscles = () => {
  return async (dispatch) => {
    const muscles = await muscleService.getAllMuscles()
    dispatch({
      type: 'INIT_NOTES',
      data: muscles
    })
  }
}

export default muscleReducer