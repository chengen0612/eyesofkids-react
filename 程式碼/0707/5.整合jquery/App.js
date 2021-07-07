import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const buttonRef = useRef()

  // componentDidMount
  useEffect(() => {
    // jquery程式碼寫在這裡
    //使用id
    $('#one').on('click', () => {
      alert('hello1')
    })

    // 使用refs
    $(buttonRef.current).on('click', () => {
      alert('hello2')
    })
  }, [])

  return (
    <>
      <button id="one">click me-1</button>
      <button ref={buttonRef}>click me-2</button>
    </>
  )
}

export default App
