import React, { useState } from 'react'

function TodoApp(props) {
  // todoItem = {id: number, text: string, completed: bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學React', completed: false },
  ])

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
            // 1. 建立一個新的todo物件
            const newTodoItem = {
              id: +new Date(),
              text: event.target.value,
              completed: false,
            }

            // 1. 建立一個新的陣列，把文字輸入框的文字加到todos陣列中
            const newTodos = [newTodoItem, ...todos]
            // 2. 設定回todos陣列
            setTodos(newTodos)
            // 3. 清空原本的文字輸入框
            setTodoInput('')
          }
        }}
      />
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  // 1. 從todos拷貝出一個新的陣列
                  const newTodos = [...todos]

                  // 2.利用item.id找到這個項目的索引
                  const index = newTodos.findIndex((v, i) => {
                    return v.id === todo.id
                  })

                  // 3.如果有找到
                  if (index > -1) {
                    //，把它的completed屬性切換(true->false, false->true)
                    newTodos[index].completed = !newTodos[index].completed
                    // 4. 設定回todos陣列
                    setTodos(newTodos)
                  }
                }}
              />
              {/* 有被勾選completec=true */}
              {todo.completed ? <del>{todo.text}</del> : todo.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
