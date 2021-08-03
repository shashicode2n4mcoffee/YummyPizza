/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const navbar = {
    color: 'black',
  }
  return (
    <div>
      <nav
        class='navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded'
        style={navbar}
      >
        <a class='navbar-brand' href='#'>
          Yummy Pizza
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div
          class='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul class='navbar-nav '>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Login
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
