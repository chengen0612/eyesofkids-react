import React, { useState } from 'react'
import './App.css'
import Summary from './components/Summary'
import OrderList from './components/OrderList'

function App() {
  const [tshirtOne, setTshirtOne] = useState(1)
  const [tshirtTwo, setTshirtTwo] = useState(1)
  const [tshirtThree, setTshirtThree] = useState(1)

  // 代表每個產品的單價
  const price = {
    tshirtOne: 300,
    tshirtTwo: 200,
    tshirtThree: 450,
  }

  // 計算總價
  const total = () =>
    Number(
      price['tshirtOne'] * tshirtOne +
        price['tshirtTwo'] * tshirtTwo +
        price['tshirtThree'] * tshirtThree
    ).toLocaleString()

  // 計算所有商品數量
  const productCount = () =>
    tshirtOne + tshirtTwo + tshirtThree

  return (
    <div className="card">
      <div className="row">
        <OrderList
          tshirtOne={tshirtOne}
          setTshirtOne={setTshirtOne}
          tshirtTwo={tshirtTwo}
          setTshirtTwo={setTshirtTwo}
          tshirtThree={tshirtThree}
          setTshirtThree={setTshirtThree}
        />
        <Summary
          productCount={productCount}
          total={total}
        />
      </div>
    </div>
  )
}

export default App
