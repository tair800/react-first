import React from 'react'

export default function Products({products}) {
    console.log({products})
  return (
    <div>
      Salam
      {products&&products.map((product)=>{
        return <li key={product.id}>{product.name}</li>
      })}
    </div>
  )
}
