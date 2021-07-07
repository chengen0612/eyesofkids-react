import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'

function MyButtonUseRef(props) {
  const [data, setData] = useState(123)
  const [didMount, setDidMount] = useState(false)

  const { title, message } = props

  const buttonRef = useRef()

  // componentDidMount
  useEffect(() => {
    // 進入更新階段
    setDidMount(true)

    // jquery程式碼寫在這裡

    // 使用refs
    $(buttonRef.current).on('click', () => {
      alert(message)
    })
  }, [])

  // 完全模擬componentDidUpdate
  useEffect(() => {
    if (didMount) {
      // 移除原事件
      $(buttonRef.current).off('click')

      // 加入新事件
      $(buttonRef.current).on('click', () => {
        alert(data)
      })
    }
  }, [data])

  return (
    <>
      <button ref={buttonRef}>{title}</button>
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

export default MyButtonUseRef
