import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const amount =  useSelector(state => state.cart)
  const loggedin =  useSelector(state => state.loggedin)
  return (
    <div>Cart: {amount} {loggedin ? 'Logged in': 'Logged out'}</div>
    
  )
}
