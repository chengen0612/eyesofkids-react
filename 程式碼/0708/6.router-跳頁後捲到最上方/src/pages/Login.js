import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
  return (
    <>
      <h1>Login</h1>
      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
      <button
        onClick={() => {
          // 登入
          props.setAuth(!props.auth)
          // 跳到產品頁
          props.history.push('/product')
        }}
      >
        {props.auth ? '登出' : '請登入'}+跳轉產品頁
      </button>
    </>
  )
}

// 擴充了此元件的屬性，得到router的三個主要屬性
export default withRouter(Login)
