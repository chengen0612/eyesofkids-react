import React from 'react'

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <h3>目前登入狀態：{props.auth ? '登入中' : '沒登入'}</h3>
    </>
  )
}

export default Home
