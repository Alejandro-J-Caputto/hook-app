import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset}= useCounter();


  return (
    <>
      <h1>Counter Hook: { state }</h1>
      <button onClick={()=> increment(3)} className='btn'> ADD 1</button>
      <button onClick={()=> decrement(3)} className='btn'> SUBSTRAC 1</button>
      <button onClick={reset} className='btn'> RESET</button>
    </>
  )
}
