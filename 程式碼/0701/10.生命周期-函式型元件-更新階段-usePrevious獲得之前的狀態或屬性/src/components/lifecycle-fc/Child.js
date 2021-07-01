import React, { useState, useEffect, useRef } from 'react'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function Child() {
  const [total, setTotal] = useState(0)
  // 切換是否已經完成Mounting(掛載)
  //const [didMount, setDidMount] = useState(false)

  // 為了要在componentDidUpdate階段取得之前的props或是state
  const prevTotal = usePrevious(total)

  // 以使用者觸發事件的角度來模擬componentDidUpdate
  const [start, setStart] = useState(false)

  // 不管如何都會執行這裡面的程式碼
  // 大部份情況不會這樣寫
  // useEffect(() => {
  //   console.log('Child render的一部份')
  // })

  // 模擬componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('Child componentDidMount')
    //setDidMount(true)
  }, [])

  // 模擬componentWillUnmount
  useEffect(() => {
    return () => {
      // 程式碼寫在這
      console.log('Child componentWillUnmount')
    }
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
      console.log('Child componentDidUpdate', prevTotal, total)
    }
  }, [total, start, prevTotal])

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
