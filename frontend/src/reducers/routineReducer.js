import routineService from '../services/routines'

const routineReducer = (state = [], action) => {
  console.log('ACTION ROUTINE: ', action)
  switch (action.type) {
  case 'LIST':
    return action.data
  case 'SHOW':
    return action.data
  case 'INIT_ROUTINES':
    return action.data
  default:
    return state
  }
}

export const initializeRoutines = (id) => {
  return async (dispatch) => {
    const routines = await routineService.getAllRoutines(1)
    dispatch({
      type: 'INIT_ROUTINES',
      data: routines
    })
  }
}

export const listRoutines = (userId) => {
  console.log('list routines', userId)
  return async (dispatch) => {
    const routines = await routineService.getAllRoutines(userId)
    dispatch({
      type: 'LIST',
      data: routines
    })
  }
}

export const showRoutine = (userId, routineId) => {
  console.log('show routine ', userId, routineId)
  return async (dispatch) => {
    const data = await routineService.showRoutine(userId, routineId)    
    dispatch({
      type: 'SHOW',
      data: data
    })
  }
}

export default routineReducer