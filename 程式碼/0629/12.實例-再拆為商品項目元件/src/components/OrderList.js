import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const {
    tshirtOne,
    tshirtTwo,
    tshirtThree,
    setTshirtOne,
    setTshirtTwo,
    setTshirtThree,
    priceList,
    pictureList,
    nameList,
  } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        <ProductItem
          tshirt={tshirtOne}
          setTshirt={setTshirtOne}
          price={priceList.tshirtOne}
          picture={pictureList.tshirtOne}
          name={nameList.tshirtOne}
        />
        <ProductItem
          tshirt={tshirtTwo}
          setTshirt={setTshirtTwo}
          price={priceList.tshirtTwo}
          picture={pictureList.tshirtTwo}
          name={nameList.tshirtTwo}
        />
        <ProductItem
          tshirt={tshirtThree}
          setTshirt={setTshirtThree}
          price={priceList.tshirtThree}
          picture={pictureList.tshirtThree}
          name={nameList.tshirtThree}
        />
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
