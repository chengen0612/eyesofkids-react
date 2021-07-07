import React, { useState, useEffect } from 'react'

function TodoItemEditForm(props) {
  const { todo, handleEditedSave } = props

  // 文字輸入框用，這是local state
  // 反樣式：利用props值來設定本地端的狀態初始值
  // 比較不好的寫法
  // const [text, setText] = useState(todo.text)
  const [text, setText] = useState('')

  // 為了要解決上述的問題用的生命周期方法
  // componentDidMount + componentDidUpdate
  useEffect(() => {
    setText(todo.text)
  }, [todo.text])

  return (
    <>
      <li>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          onKeyPress={(e) => {
            handleEditedSave(todo.id, e)
          }}
        />
      </li>
    </>
  )
}

export default TodoItemEditForm
