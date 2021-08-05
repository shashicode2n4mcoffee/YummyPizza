/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCartReducer } from '../Redux/Reducers/cartReducer'

const Navbar = () => {
  const navbar = {
    color: 'black',
  }

  const items = useSelector((state) => state.addToCartReducer)

  return (
    <div>
      <nav
        className='navbar navbar-expand-sm shadow p-3 mb-5 bg-white rounded'
        style={navbar}
      >
        <a className='navbar-brand' href='#'>
          Yummy Pizza
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav '>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Cart {items.cartItems.length ? items.cartItems.length : ' '}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
