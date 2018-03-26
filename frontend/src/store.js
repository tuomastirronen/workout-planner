import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import muscleReducer from './reducers/muscleReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  muscles: muscleReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store