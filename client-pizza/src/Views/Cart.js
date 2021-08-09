import React from 'react'
import { useSelector } from 'react-redux'
// import { addToCartReducer } from '../Redux/Reducers/cartReducer'
import './Cart.css'
import { addToCartAction, deleteFromCart } from '../Redux/Actions/cartAction'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state) => state.addToCartReducer)
  const dispatch = useDispatch()
  const items = cartItems.cartItems
  let subTotal = cartItems.cartItems.reduce((x, items) => x + items.price, 0)

  return (
    <div className='card'>
      <div className='row'>
        <div className='col-md-8 cart'>
          <div className='title'>
            <div className='row'>
              <div className='col'>
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className='col align-self-center text-right text-muted'>
                {cartItems.cartItems.length}
              </div>
            </div>
          </div>

          <>
            {cartItems.cartItems.map((item, index) => {
              return (
                <div className='row border-top border-bottom' key={index}>
                  <div className='row main align-items-center'>
                    <div className='col-2'>
                      <img
                        className='img-fluid'
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className='col d-flex flex-column align-items-center'>
                      <div className='row text-muted'>{item.name}</div>
                      <div className='row'>{item.varient}</div>
                    </div>
                    <div className='col'>
                      <p
                        onClick={() => {
                          if (item.quantity >= 1) {
                            dispatch(deleteFromCart(item))
                          } else if (item.quantity < 1) {
                            dispatch(
                              addToCartAction(
                                item,
                                item.varient,
                                item.quantity - 1
                              )
                            )
                          }
                        }}
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() => {
                          dispatch(
                            addToCartAction(
                              item,
                              item.varient,
                              item.quantity + 1
                            )
                          )
                        }}
                      >
                        +
                      </p>
                    </div>
                    <div className='col'>
                      &#8377; {item.quantity * item.prices[0][item.varient]}
                    </div>
                    <div className='col'>
                      <span
                        className='close'
                        onClick={() => {
                          dispatch(deleteFromCart(item))
                        }}
                      >
                        &#10005;
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        </div>
        <div className='col-md-4 summary'>
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='col' style={{ paddingLeft: 0 }}>
              <span>ITEMS</span> <span> {cartItems.cartItems.length}</span>
            </div>
            <div className='col text-right'> &#8377; {subTotal}</div>
          </div>
          <form>
            <p>SHIPPING</p>{' '}
            <select>
              <option className='text-muted'>
                Standard-Delivery- &#8377;5.00
              </option>
            </select>
            <p>GIVE CODE</p> <input id='code' placeholder='Enter your code' />
          </form>
          <div
            className='row'
            style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}
          >
            <div className='col'>TOTAL PRICE</div>
            <div className='col text-right'> &#8377;{subTotal}</div>
          </div>
          <button className='btn'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
