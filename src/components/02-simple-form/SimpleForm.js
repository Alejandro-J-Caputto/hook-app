import React, { useState, useEffect } from 'react'

import './effects.css'
export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState, 
      [target.name] : target.value
    })
  }

  const {name, email} = formState;

  useEffect(() => {
    console.log('hey!')
  },[])
  useEffect(() => {
    console.log('Form is changing!')
  },[formState])


  return (
    <>
      <h1>UseEffect</h1>
      <hr/>
      <div className='form-group'>
        <input
          type='text'
          name='name'
          value={name}
          className='form-control'
          placeholder='name'
          autoComplete= 'off'
          onChange={handleInputChange}
        />
        <input
          type='email'
          name='email'
          value={email}
          className='form-control'
          placeholder='email'
          autoComplete= 'off'
          onChange={handleInputChange}
        />
          
      </div>
    </>
  )
}
