import React from 'react'
import Pizza from '../Components/Pizza'
import { pizzas } from '../pizzaData'

const Home = () => {
  return (
    <div className='container-sm'>
      <div className='row'>
        {pizzas.map((pizza, index) => {
          return (
            <div className='col-md-4'>
              <div key={index}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
