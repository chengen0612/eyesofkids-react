import React, { useEffect, useState } from 'react'

function Parent() {
  const [total, setTotal] = useState(0)
  // 切換是否已經完成Mounting(掛載)
  const [didMount, setDidMount] = useState(false)

  // 以使用者觸發事件的角度來模擬componentDidUpdate
  const [start, setStart] = useState(false)

  // 模擬componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('componentDidMount')
    setDidMount(true)
  }, [])

  // 模擬componentDidUpdate + componentDidMount
  useEffect(() => {
    //程式碼寫在這
    //console.log('componentDidUpdate+componentDidMount', total)
  }, [total])

  // 完全模擬componentDidUpdate
  // 注意didMount狀態不能加入相依性陣列中
  useEffect(() => {
    //程式碼寫在這
    if (start) {
      console.log('componentDidUpdate', total)
    }
  }, [total, start])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
          setStart(true)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
          setStart(true)
        }}
      >
        -1
      </button>
    </>
  )
}

export default Parent
