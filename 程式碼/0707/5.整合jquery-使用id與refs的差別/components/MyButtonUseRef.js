import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

function MyButtonUseRef(props) {
  const { title, message } = props

  const buttonRef = useRef()

  // componentDidMount
  useEffect(() => {
    // jquery程式碼寫在這裡

    // 使用refs
    $(buttonRef.current).on('click', () => {
      alert(message)
    })
  }, [])

  return (
    <>
      <button ref={buttonRef}>{title}</button>
    </>
  )
}

export default MyButtonUseRef
