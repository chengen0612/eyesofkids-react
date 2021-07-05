import React, { useState, useEffect } from 'react'
// 模擬從伺服器來的資料
import { data } from './data'

import CoverSpinner from './components/CoverSpinner'

function App() {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // componentDidMount
  useEffect(() => {
    // 1. 開啟載入狀態 isLoading
    setIsLoading(true)

    // 2. 載入資料(從伺服器載入)
    // fetch url...
    setProductData(data)

    // 3. 關閉載入狀態 isLoading X秒後
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = <CoverSpinner show={true} />

  const display = (
    <ul>
      {productData.map((product, i) => {
        return (
          <li key={product.id}>
            {product.name}/{product.price}
          </li>
        )
      })}
    </ul>
  )

  return <>{isLoading ? spinner : display}</>
}

export default App
