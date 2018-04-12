import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import muscleReducer from './reducers/muscleReducer'
//import filterReducer from './reducers/filterReducer'
import userReducer from './reducers/userReducer'
import routineReducer from './reducers/routineReducer'

const loggerMiddleware = createLogger()

const reducer = combineReducers({
  muscles: muscleReducer,
  user: userReducer,
  routines: routineReducer,
  routine: routineReducer
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
)

export default store