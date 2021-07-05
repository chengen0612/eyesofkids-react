import React, { useState } from 'react'

function TodoApp(props) {
  const [todos, setTodos] = useState(['買牛奶', '學React'])

  const [todoInput, setTodoInput] = useState('')

  return (
    <>
      <h1>待辨事項</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value)
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            // 1. 建立一個新的陣列，把文字輸入框的文字加到todos陣列中
            const newTodos = [event.target.value, ...todos]
            // 2. 設定回todos陣列
            setTodos(newTodos)
            // 3. 清空原本的文字輸入框
            setTodoInput('')
          }
        }}
      />
      <ul>
        {todos.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
