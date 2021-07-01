import React, { useEffect, useState } from 'react'

function Parent() {
  const [total, setTotal] = useState(
    // iife，純學術研究，平常不要這樣用
    (function () {
      console.log('constructor(init)')
      return 0
    })()
  )

  // 模擬componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('componentDidMount')
  }, [])

  return (
    <>
      {
        // iife，純學術研究，平常不要這樣用
        (function () {
          console.log('render')
        })()
      }
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default Parent
