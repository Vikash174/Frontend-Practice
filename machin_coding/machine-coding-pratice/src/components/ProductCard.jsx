import React from 'react'

function ProductCard({product}) {
  return (
    <div style={{display:"flex", flexDirection:"column" ,alignItems:"center", maxWidth:"400px",margin:"5px", padding:"10px",border:"1px solid black", borderRadius:"10px", boxShadow:"2px 2px 1px gray" }}>
        <h4>{product.title}</h4>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.description}</p>
    </div>
  )
}

export default ProductCard;