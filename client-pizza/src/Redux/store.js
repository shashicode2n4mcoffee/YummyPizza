import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getAllPizzasReducers } from './Reducers/pizzaReducers'
import { addToCartReducer } from './Reducers/cartReducer'
import { registerUserAction } from './Actions/userAction'

const finalReducer = combineReducers({
  getAllPizzasReducers,
  addToCartReducer,
  registerUserAction,
})

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
