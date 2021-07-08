import React from 'react'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import MultiLevelBreadcrumb from '../components/MultiLevelBreadcrumb'

// 模擬從伺服器端來的產品資料
import { data } from '../data'

function ProductDetailSearchParams(props) {
  console.log(props)

  const searchParams = new URLSearchParams(
    props.location.search
  )

  // 網址上的?id=1
  // 網址上的參數值應是一個字串值
  const searchParamsId = searchParams.get('id')

  // 網址上的參數值應是一個字串值
  console.log(
    'id',
    searchParams.get('id'),
    typeof searchParams.get('id')
  )

  const [productItem, setProductItem] = useState({
    id: '',
    picture: 'https://via.placeholder.com/150',
    stock: 0,
    name: '預設商品',
    price: 999,
    tags: '',
  })

  // didMount
  // 從伺服器利用id值抓到本產品的內容
  useEffect(() => {
    const product = data.find((v, i) => {
      return searchParamsId === v.id
    })

    console.log(product)
    if (product) setProductItem(product)
  }, [])

  //if (!productItem) return <h1>目前此商品不存在</h1>

  return (
    <>
      <h1>ProductDetailSearchParams</h1>
      <MultiLevelBreadcrumb />
      <p>目前產品的id值是：{searchParamsId}</p>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={productItem.picture}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {productItem.name}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card
              title and make up the bulk of the card's
              content.
            </p>
            <a href="#" className="btn btn-primary">
              {productItem.tags}
            </a>
          </div>
        </div>
      </div>

      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
    </>
  )
}

// 擴充了此元件的屬性，得到router的三個主要屬性
export default withRouter(ProductDetailSearchParams)
