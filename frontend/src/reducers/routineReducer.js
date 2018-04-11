import routineService from '../services/routines'

const routineReducer = (state = [], action) => {
  console.log('ACTION ROUTINE: ', action)
  switch (action.type) {
  case 'LIST':
    return action.data
  default:
    return state
  }
}

export const listRoutines = (id) => {
  console.log('list routines reducer')
  console.log('reducer jee', id)
  return async (dispatch) => {
    const routines = await routineService.getAllRoutines(id)
    dispatch({
      type: 'LIST',
      data: routines
    })
    console.log('wtf')
  }
}

export default routineReducer