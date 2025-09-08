import React from 'react'
import { useCounter } from '../store/store'

const Button = () => {
  const { increment, decrement } = useCounter()
    return (
    <div>
        <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      
    </div>
  )
}

export default Button