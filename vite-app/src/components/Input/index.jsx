import React from 'react'
import "./index.css"

export default function Input() {
  return (
    <div >
      <p>Name</p>
      <input type="text" className='name'/>

      <p>Last Name</p>
      <input type="text" className='last'/>

      <p>Email</p>
      <input type="email" className='email'/>

      <p>Password</p>
      <input type="password" className='pass'/>

      <p>Age</p>
      <input type="number" className='age'/>
      <br />
      <button className='submit'>Submit</button>
    </div>
  )
}
