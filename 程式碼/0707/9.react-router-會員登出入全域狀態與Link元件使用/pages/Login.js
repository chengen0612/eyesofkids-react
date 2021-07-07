import React from 'react'

function Login(props) {
  return (
    <>
      <h1>Login</h1>
      <h3>目前登入狀態：{props.auth ? '登入中' : '沒登入'}</h3>
      <button
        onClick={() => {
          props.setAuth(true)
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
    </>
  )
}

export default Login
