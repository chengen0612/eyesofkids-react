import React from 'react'

function ProductItem(props) {
  const { tshirt, setTshirt, price, picture, name } = props

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img
              alt=""
              className="img-fluid"
              src={picture}
            />
          </div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                // 限制數量為最少要買1件
                const newTshirt =
                  tshirt - 1 < 1 ? 1 : tshirt - 1

                setTshirt(newTshirt)
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {tshirt}
            </a>
            <a
              href="#/"
              onClick={() => {
                setTshirt(tshirt + 1)
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
