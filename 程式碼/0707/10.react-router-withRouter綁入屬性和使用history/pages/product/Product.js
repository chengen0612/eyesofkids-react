import React from 'react'

function Product(props) {
  return (
    <>
      <h1>Product</h1>
      <h3>目前登入狀態：{props.auth ? '登入中' : '沒登入'}</h3>
    </>
  )
}

export default Product
