import routineService from '../services/routines'

const routineReducer = (state = [], action) => {
  console.log('ACTION ROUTINE: ', action)
  switch (action.type) {
  case 'LIST':
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

export const listRoutines = (id) => {
  console.log('list routines', id)
  return async (dispatch) => {
    const routines = await routineService.getAllRoutines(id)
    dispatch({
      type: 'LIST',
      data: routines
    })
  }
}

export const showRoutine = (id) => {
  console.log('show routine ', id)
  return async (dispatch) => {
    const routine = await routineService.showRoutine(id)
    dispatch({
      type: 'SHOW',
      data: routine
    })
  }
}

export default routineReducer