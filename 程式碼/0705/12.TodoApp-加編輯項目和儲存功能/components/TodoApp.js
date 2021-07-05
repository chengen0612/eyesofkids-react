import React, { useState } from 'react'

function TodoApp(props) {
  // todoItem = {id: number, text: string, completed: bool, edited:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false, edited: false },
    { id: 2, text: '學React', completed: false, edited: false },
  ])

  // 輸入新的todo用
  const [todoInput, setTodoInput] = useState('')

  // 每個項目編輯用
  const [text, setText] = useState('')

  const handleAddNew = (event) => {
    if (event.key === 'Enter') {
      // 1. 建立一個新的todo物件
      const newTodoItem = {
        id: +new Date(),
        text: event.target.value,
        completed: false,
        edited: false,
      }

      // 1. 建立一個新的陣列，把文字輸入框的文字加到todos陣列中
      const newTodos = [newTodoItem, ...todos]
      // 2. 設定回todos陣列
      setTodos(newTodos)
      // 3. 清空原本的文字輸入框
      setTodoInput('')
    }
  }

  const handleCompleted = (id) => {
    // 1. 從todos拷貝出一個新的陣列
    const newTodos = [...todos]

    //2.利用item.id找到這個項目的索引
    const index = newTodos.findIndex((v, i) => {
      return v.id === id
    })

    // 3.如果有找到
    if (index > -1) {
      //，把它的completed屬性切換(true->false, false->true)
      newTodos[index].completed = !newTodos[index].completed
      // 4. 設定回todos陣列
      setTodos(newTodos)
    }

    // // 2.找到這個項目的索引
    // //，把它的completed屬性切換(true->false, false->true)
    // newTodos[index].completed = !newTodos[index].completed
    // // 3. 設定回todos陣列
    // setTodos(newTodos)
  }

  const handleEdited = (id) => {
    // 1. 從todos拷貝出一個新的陣列
    const newTodos = [...todos]

    // 把所有的編輯框都關起來
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos[i].edited = true
      } else {
        newTodos[i].edited = false
      }
    }

    // 4. 設定回todos陣列
    setTodos(newTodos)
  }

  const handleEditedSave = (id, event) => {
    if (event.key !== 'Enter') return

    // 1. 從todos拷貝出一個新的陣列
    const newTodos = [...todos]

    // 2.利用item.id找到這個項目的索引
    const index = newTodos.findIndex((v, i) => {
      return v.id === id
    })

    // 3.如果有找到
    if (index > -1) {
      //，把它的completed屬性切換(true->false, false->true)
      newTodos[index].text = event.target.value
      // 4. 設定回todos陣列
      setTodos(newTodos)
    }

    // 關閉編輯框
    newTodos[index].edited = false
  }

  const handleDelete = (id) => {
    // 1. 從todos拷貝出一個新的陣列
    // 2.找到這個項目的索引，把它的資料從陣列中刪除
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })

    // for迴圈
    // const newTodos = []
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === todo.id) continue
    //   newTodos.push(todos[i])
    // }

    // 3. 設定回todos陣列
    setTodos(newTodos)
  }

  return (
    <>
      <h1>待辨事項</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value)
        }}
        onKeyPress={handleAddNew}
      />
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  handleCompleted(todo.id)
                }}
              />
              {/* 有被勾選completec=true */}
              <span
                onDoubleClick={() => {
                  // 切換編輯狀態
                  handleEdited(todo.id)
                  // 目前文字設定進去
                  setText(todo.text)
                }}
              >
                {todo.edited ? (
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
                ) : todo.completed ? (
                  <del>{todo.text}</del>
                ) : (
                  todo.text
                )}
              </span>
              <button
                onClick={() => {
                  handleDelete(todo.id)
                }}
              >
                X刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
