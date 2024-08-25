import React from 'react'
import "./index.css"

function Hello({person}) {
  const{name,surname}=person
  return (
    <div>
      Hi,{name}{surname}
    </div>
  )
}

export default Hello
