import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      <br />
      {/* 相當if…else */}
      {total === 0 ? <p>你可以開始點數字了</p> : <p>再多點一些！</p>}
      {/* 相當於if… */}
      {total === 0 && <p>你可以開始點數字了</p>}
    </>
  )
}

export default App
