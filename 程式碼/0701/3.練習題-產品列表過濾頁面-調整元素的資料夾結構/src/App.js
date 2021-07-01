import React, { useState, useEffect } from 'react'
import './App.css'
import FilterBar from './components/FilterBlock/FilterBar'
import ProductList from './components/ProductBlock/ProductList/'
import SearchBar from './components/ProductBlock/SearchBar'
import SortBar from './components/ProductBlock/SortBar'

import { data } from './data/'

function App() {
  const [products, setProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])

  const [tags, setTags] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  // 商品載入用
  useEffect(() => {
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar />
                    <div className="padding"></div>
                    <SortBar />
                    <ProductList products={displayProducts} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
