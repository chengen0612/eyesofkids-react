import React from 'react'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadcrumb from '../components/MultiLevelBreadcrumb'

function Login(props) {
  console.log(props)

  return (
    <>
      <h1>會員登入</h1>
      <MultiLevelBreadcrumb />
      <h3>目前登入狀態：{props.auth ? '登入中' : '沒登入'}</h3>
      <button
        onClick={() => {
          props.setAuth(true)
          // 登入後連到產品頁
          props.history.push('/product')
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          props.setAuth(false)
        }}
      >
        登出
      </button>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到上一頁
      </button>
    </>
  )
}

// HOC(高階元件)樣式，用於綁入Router中的三個屬性值
export default withRouter(Login)
