import React from 'react'
import { useState } from 'react'
import './Login.css'

const Register = () => {
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
                id='tab-2'
                type='radio'
                name='tab'
                className='sign-up'
                checked={true}
                onChange={() => {}}
              />

              <label htmlFor='tab-2' className='tab'>
                Sign Up
              </label>

              <div className='login-space'>
                <div className='sign-up-form'>
                  <div className='group'>
                    {' '}
                    <label htmlFor='user' className='label'>
                      Username
                    </label>{' '}
                    <input
                      required
                      type='text'
                      className='input'
                      placeholder='Create your Username'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />{' '}
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
                      placeholder='Create your password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />{' '}
                  </div>
                  <div className='group'>
                    {' '}
                    <label htmlFor='pass' className='label'>
                      Repeat Password
                    </label>{' '}
                    <input
                      required
                      type='password'
                      className='input'
                      data-type='password'
                      placeholder='Repeat your password'
                      value={cpassword}
                      onChange={(e) => {
                        setCpassword(e.target.value)
                      }}
                    />{' '}
                  </div>
                  <div className='group'>
                    {' '}
                    <label htmlFor='pass' className='label'>
                      Email Address
                    </label>{' '}
                    <input
                      required
                      type='text'
                      className='input'
                      placeholder='Enter your email address'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                  <div className='group'>
                    {' '}
                    <input
                      type='submit'
                      className='button'
                      value='Sign Up'
                      onClick={register}
                    />{' '}
                  </div>
                  <div className='hr'></div>
                  <div className='foot'>
                    {' '}
                    <a href='/login'>Already Member?</a>{' '}
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

export default Register
