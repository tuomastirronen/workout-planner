import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import muscleReducer from './reducers/muscleReducer'
import filterReducer from './reducers/filterReducer'
import userReducer from './reducers/userReducer'
import routineReducer from './reducers/routineReducer'

const reducer = combineReducers({
  muscles: muscleReducer,
  filter: filterReducer,
  user: userReducer,
  routines: routineReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store