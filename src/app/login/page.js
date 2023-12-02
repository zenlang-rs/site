'use client'
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../app/contextapi/ThemeContext'

export default function Login () {
  const { darkMode } = useContext(ThemeContext)
  const [passwordError, setPasswordError] = useState('')

  const validatePassword = password => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password)
  }

  const handlePasswordChange = event => {
    if (!validatePassword(event.target.value)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      )
    } else {
      setPasswordError('')
    }
  }

  const backgroundImageURL = '/zen-lang-img.jpg'

  return (
    <div
      className={darkMode ? 'ag dark' : 'ag'}
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <main className='w-full h-screen flex flex-col items-center justify-center px-4 '>
        <div
          className={
            darkMode
              ? 'max-w-md w-full text-white px-5 rounded-md py-4 bg-gray-800 shadow-lg'
              : 'max-w-md w-full text-gray-600 px-5 rounded-md py-4 bg-gray-50 shadow-lg'
          }
        >
          <div className='text-center'>
            <div className='mt-5 space-y-2'>
              <h3
                className={
                  darkMode
                    ? 'text-white text-2xl font-bold sm:text-3xl'
                    : 'text-gray-800 text-2xl font-bold sm:text-3xl'
                }
              >
                Log in to your account
              </h3>
              <p className=''>
                Don't have an account?{' '}
                <Link href='/signup'>
                  <sp className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Sign up
                  </sp>
                </Link>
              </p>
            </div>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className='mt-8 space-y-9 ml-20px'
          >
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
              />
            </div>
            <div>
              <label className='font-medium'>Password</label>
              <input
                type='password'
                required
                onChange={handlePasswordChange}
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
              />
              {passwordError && (
                <small style={{ color: 'red' }}>{passwordError}</small>
              )}
            </div>
            <div className='text-center mb-1'>
              <button className='w-full px-4 py-2  text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'>
                Create Account
              </button>
              <Link href='/forgotpassword'>
                <span className='hover:text-indigo-600 pt-4'>Forgot password?</span>
              </Link>
            </div>

            <div></div>
            <div></div>
          </form>
        </div>
      </main>
    </div>
  )
}