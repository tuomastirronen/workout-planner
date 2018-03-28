import loginService from '../services/login'

const loginReducer = (state = null, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return action.data
  case 'REGISTER':
    return action.data
  default:
    return state
  }
}

export const loginUser = (credentials) => {
  console.log('reducer ', credentials)
  return async (dispatch) => {
    const user = await loginService.login(credentials)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export default loginReducer