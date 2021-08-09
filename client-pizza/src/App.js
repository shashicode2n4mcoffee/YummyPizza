/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './Components/Navbar'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Views/Home'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Cart from './Views/Cart'
import Register from './Views/Register'
import Login from './Views/Login'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </BrowserRouter>
    </div>
  )
}

export default App
