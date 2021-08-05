import React from 'react'
import Pizza from '../Components/Pizza'
// import { pizzas } from '../pizzaData'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizza } from '../Redux/Actions/pizzaAction'

const Home = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector((state) => state.getAllPizzasReducers)
  console.log(pizzaState)

  const { pizzas, error, loading } = pizzaState

  useEffect(() => {
    dispatch(getAllPizza())
  }, [])
  return (
    <div className='container-sm'>
      <div className='row'>
        {loading ? (
          <h1>Loading .............</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza, index) => {
            return (
              <div className='col-md-4' key={index}>
                <div>
                  <div>
                    <Pizza pizza={pizza} />
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Home
