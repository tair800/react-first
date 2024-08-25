import React from 'react'
import "./index.css"

export default function Button({variant,text,color}) {
  return (
    <div>
      <button style={{color:color}} className={variant}>
        {text}
      </button>
    </div>
  )
}
