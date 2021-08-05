import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getAllPizzasReducers } from './Reducers/pizzaReducers'
import { addToCartReducer } from './Reducers/cartReducer'

const finalReducer = combineReducers({
  getAllPizzasReducers,
  addToCartReducer,
})

const initialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
