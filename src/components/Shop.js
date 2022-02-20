import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from "../state/index"

export default function Shop() {
  const dispatch = useDispatch()
  return (
    <>
        <button onClick={() => dispatch(actionCreators.addCart(1))}>+</button>
        Add to cart
        <button onClick={() => dispatch(actionCreators.removeCart(1))}>-</button>
    </>
  )
}
