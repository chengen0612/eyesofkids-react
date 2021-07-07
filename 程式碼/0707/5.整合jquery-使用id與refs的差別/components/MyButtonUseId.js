import React, { useEffect } from 'react'
import $ from 'jquery'

function MyButtonUseId(props) {
  const { title, message } = props

  // componentDidMount
  useEffect(() => {
    // jquery程式碼寫在這裡
    //使用id
    $('#one').on('click', () => {
      alert(message)
    })
  }, [])

  return (
    <>
      <button id="one">{title}</button>
    </>
  )
}

export default MyButtonUseId
