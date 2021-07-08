import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  console.log(props.location)

  // 建立一個對照陣列
  const pathnameList = ['/about', '/login', '/product']
  const pathnameTextList = ['關於我們', '會員登入', '商品']

  const convertPathnameToText = () => {
    const index = pathnameList.findIndex((v) => {
      // '/product/123' => '/product'
      return props.location.pathname.includes(v)
    })

    return pathnameTextList[index]
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {convertPathnameToText()}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(Breadcrumb)
