import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 產品訂購的項目(模擬從伺服器來的資料)
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
]

function Product(props) {
  console.log(props)

  const [product, setProduct] = useState({
    id: 0,
    name: '',
    catgory: '',
    image: '',
    price: 0,
  })

  // 頁面載入時 didMount
  useEffect(() => {
    // 目前要載入的商品ID
    // 從網址得到的params
    // 注意：從網址上獲得的值都是字串
    const productId = +props.match.params.id

    const product = products.find((v, i) => {
      return v.id === productId
    })

    if (product) setProduct(product)
  }, [])

  return (
    <>
      <h1>Product</h1>
      <h3>目前登入狀態：{props.auth ? '登入中' : '沒登入'}</h3>
      <img src={product.image} alt="" style={{ width: 200, height: 200 }} />
      <h5>{product.name}</h5>
    </>
  )
}

// HOC(高階元件)樣式，用於綁入Router中的三個屬性值
export default withRouter(Product)
