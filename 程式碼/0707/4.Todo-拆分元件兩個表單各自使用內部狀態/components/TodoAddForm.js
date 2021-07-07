import React, { useState } from 'react'

function TodoAddForm(props) {
  const [todoInput, setTodoInput] = useState('')

  const { handleAddNew } = props

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddNew(e.target.value)
            // 清空文字輸入區域
            setTodoInput('')
          }
        }}
      />
    </>
  )
}

export default TodoAddForm
