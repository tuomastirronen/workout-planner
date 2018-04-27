import loginService from '../services/login'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const loginReducer = (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  // case 'LOGIN':
  //   return action.data
  // case 'LOGOUT':
  //   return null
  // case 'REGISTER':
  //   return action.data
  case 'AUTH_SUCCESS':
    return action.authData
  case 'AUTH_FAILURE':
    return action.authData
  default:
    return state
  }
}

// uudet
export const authStart = () => {
  return {
    type: 'AUTH_START'
  }
}

export const authSuccess = (authData) => {
  return {
    type: 'AUTH_SUCCESS',
    authData: authData
  }
}

export const authFail = (error) => {
  return {
    type: 'AUTH_ERROR',
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  return {
    type: 'AUTH_LOGOUT',
    authData: null
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      dispatch(authSuccess(token))
    }
  }
}

export const auth = (email, password) => {
  console.log('email: ', email, ' password: ', password)
  return async dispatch => {
    dispatch(authStart())
    try {
      const authData = await loginService.login(email, password)
      console.log('authData: ',authData)
      console.log('localstorage: ', authData.token)
      localStorage.setItem('token', authData.token)
      dispatch(authSuccess(authData))
    }
    catch(err) {
      console.log(err)
      dispatch(authFail())
    }
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

export const logoutUser = (credentials) => {
  console.log('reducer ', credentials)
  return async (dispatch) => {
    //const user = await loginService.login(credentials)
    dispatch({
      type: 'LOGOUT',
      data: null
    })
  }
}

export default loginReducer