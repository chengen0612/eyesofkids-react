import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {
  const [isChildAlive, setIsChildAlive] = useState(true)

  // 以使用者觸發事件的角度來模擬componentDidUpdate
  const [start, setStart] = useState(false)

  // 不管如何都會執行這裡面的程式碼
  // 大部份情況不會這樣寫
  // useEffect(() => {
  //   console.log('Parent render的一部份')
  // })

  // 模擬componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('Parent componentDidMount')
    //setDidMount(true)
  }, [])

  // 模擬componentDidUpdate + componentDidMount
  useEffect(() => {
    //程式碼寫在這
    console.log('Parent componentDidUpdate+componentDidMount', isChildAlive)
  }, [isChildAlive])

  // 完全模擬componentDidUpdate
  // 注意如果用didMount狀態不能加入相依性陣列中
  useEffect(() => {
    //程式碼寫在這
    if (start) {
      console.log('Parent componentDidUpdate', isChildAlive)
    }
  }, [isChildAlive, start])

  return (
    <>
      <button
        onClick={() => {
          setIsChildAlive(!isChildAlive)
          setStart(true)
        }}
      >
        {isChildAlive ? '再見！' : '復活吧！'}
      </button>
      <hr />
      {isChildAlive && <Child />}
    </>
  )
}

export default Parent
