import React, { useState } from 'react'
import './counter.css';
export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 0,
    counter2: 10
  });

  const {counter1, counter2} = state;
  // const handleAdd = () => {
  //   setCounter(counter + 1);
  // }
  // const handleSubstract = () => {
  //   setCounter(counter + 1);
  // }
  // const handleReset = () => {
  //   setCounter(0);
  // }

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1 name="counter2" onClick={(e) => {
        console.log(e)
        setState({...state, counter2: counter2 + 1})
      }}>Counter2 {counter2}</h1>
      <hr/>
      <button
       className='btn btn-primary'
       onClick={()=> setState({ ...state, counter1: counter1 + 1 })}
       > Add 1 </button>
    </>
  )
}
