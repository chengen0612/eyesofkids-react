import React, { useState, useEffect } from 'react'
import $ from 'jquery'

function MyButtonUseId(props) {
  const [data, setData] = useState(123)
  const [didMount, setDidMount] = useState(false)

  const { title, message } = props

  // componentDidMount

  useEffect(() => {
    // 進入更新階段
    setDidMount(true)

    // jquery程式碼寫在這裡
    //使用id
    $('#one').on('click', () => {
      alert(data)
    })
  }, [])

  // 完全模擬componentDidUpdate
  useEffect(() => {
    if (didMount) {
      // 移除原事件
      $('#one').off('click')

      // 加入新事件
      $('#one').on('click', () => {
        alert(data)
      })
    }
  }, [data])

  return (
    <>
      <button id="one">{title}</button>
      <br />
      <button
        onClick={() => {
          setData(99999)
        }}
      >
        Change State
      </button>
    </>
  )
}

export default MyButtonUseId
