import React, { useState, useEffect } from 'react'

function Child() {
  const [total, setTotal] = useState(0)
  // 切換是否已經完成Mounting(掛載)
  //const [didMount, setDidMount] = useState(false)

  // 以使用者觸發事件的角度來模擬componentDidUpdate
  const [start, setStart] = useState(false)

  // 模擬componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('Child componentDidMount')
    //setDidMount(true)
  }, [])

  // 模擬componentDidUpdate + componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('Child componentDidUpdate+componentDidMount', total)
  }, [total])

  // 完全模擬componentDidUpdate
  // 注意如果用didMount狀態不能加入相依性陣列中
  useEffect(() => {
    //程式碼寫在這
    if (start) {
      console.log('Child componentDidUpdate', total)
    }
  }, [total, start])

  // 模擬componentWillUnmount
  useEffect(() => {
    return () => {
      // 程式碼寫在這
      console.log('Child componentWillUnmount')
    }
  }, [])

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

export default Child
