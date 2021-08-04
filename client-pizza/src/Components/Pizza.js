import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import './Pizza.css'
const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState('small')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='card m-1' style={{ width: '18rem' }}>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          className='img-fluid'
          src={pizza.image}
          alt={pizza.name}
          style={{ height: '12.5rem', width: '12.5rem' }}
        ></img>
      </div>

      <div className='d-flex p-2 bd-highlight'>
        <div className='w-100'>
          <p>Varients</p>
          <select
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value)
            }}
          >
            {pizza.varients.map((variant, index) => {
              return (
                <option value={variant} key={index}>
                  {variant}
                </option>
              )
            })}
          </select>
        </div>
        <div className='w-100'>
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <div className='d-flex p-2 bd-highlight justify-content-center align-items-center '>
        <div className='w-100'>
          <h1 className='mt-1'>
            Price : Rs {pizza.prices[0][varient] * quantity}
          </h1>
        </div>
        <div className='w-100 add-to-cart'>
          <button type='button' className='btn btn-danger'>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>{pizza.name} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='modal-body'>
            <img src={pizza.image} alt={pizza.name} />
            <p>{pizza.description}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizza
