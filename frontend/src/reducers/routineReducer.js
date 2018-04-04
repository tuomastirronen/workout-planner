import routineService from '../services/routines'

const routineReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'LIST':
    return action.data
  default:
    return state
  }
}

export const listRoutines = (id) => {
  console.log('reducer ', id)
  return async (dispatch) => {
    const user = await routineService.getAllRoutines(id)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export default routineReducer