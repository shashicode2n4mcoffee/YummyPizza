import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const register = () => {
    if (password !== cpassword) {
      alert('Password Mismatch')
    } else {
      const user = {
        name,
        email,
        password,
      }
      console.log(user)
    }
  }

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto p-0'>
        <div className='card'>
          <div className='login-box'>
            <div className='login-snip'>
              <input
                id='tab-1'
                required
                type='radio'
                name='tab'
                className='sign-in'
                checked={true}
                onChange={() => {}}
              />
              <label htmlFor='tab-1' className='tab'>
                Login
              </label>{' '}
              <input id='tab-2' type='radio' name='tab' className='sign-up' />
              <label htmlFor='tab-2' className='tab'>
                {/* <a href='/register'>Sign Up</a> */}
              </label>
              <div className='login-space'>
                <div className='login'>
                  <div className='group'>
                    {' '}
                    <label htmlFor='user' className='label'>
                      Username
                    </label>
                    <input
                      required
                      type='text'
                      className='input'
                      placeholder='Enter your username'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div className='group'>
                    {' '}
                    <label htmlFor='pass' className='label'>
                      Password
                    </label>{' '}
                    <input
                      required
                      type='password'
                      className='input'
                      data-type='password'
                      placeholder='Enter your password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />{' '}
                  </div>
                  {/* <div className='group'>
                    <input id='check' type='checkbox' className='check' />
                    <label for='check'>
                      <span className='icon'></span> Keep me Signed in
                    </label>{' '}
                  </div> */}
                  <div className='group'>
                    {' '}
                    <input
                      type='submit'
                      className='button'
                      value='Sign In'
                    />{' '}
                  </div>
                  <div className='hr'></div>
                  <div className='foot'>
                    {' '}
                    <a href='#'>Forgot Password?</a>{' '}
                  </div>

                  <div className='hr'></div>
                  <div className='foot'>
                    <a href='/register' style={{ color: 'white' }}>
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
