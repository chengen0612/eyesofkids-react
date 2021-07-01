import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
  console.log(props.products)
  const { products } = props

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {products.map((product, i) => {
              return <ProductItem product={product} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList
