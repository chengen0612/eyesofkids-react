import React, { useState } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  // 待辨事項每個的物件值
  // todo = {id:number, text:string, completed:bool(default: false), edited:false}
  const [todos, setTodos] = useState([
    {
      id: 9999999,
      text: '努力學React',
      completed: true,
      edited: false,
    },
    {
      id: 9999977,
      text: '買iPhone或安卓手機',
      completed: false,
      edited: false,
    },
  ])

  // 另一個仿照資料庫的自動遞增的方式來產生id
  // 每次要id值時呼叫increment()
  // const [autoIncrement, setAutoIncrement] = useState(0)

  // const increment = () => {
  //   const newAutoIncrement = autoIncrement + 1
  //   setAutoIncrement(newAutoIncrement)
  //   return newAutoIncrement
  // }

  // 切換使用
  const handleEdited = (id) => {
    // 先由目前的todos拷貝出一個陣列
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    // 用findIndex的作法
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    // 如果有找到就切換completed的true/false
    if (index !== -1) {
      newTodos[index].edited = !newTodos[index].edited
      // 設定回狀態值
      setTodos(newTodos)
    }

    // // for迴圈的作法
    // for (let i = 0; i < newTodos.length; i++) {
    //   if (newTodos[i].id === id) {
    //     newTodos[i].completed = !newTodos[i].completed
    //     break
    //   }
    // }

    // setTodos(newTodos)
  }

  const handleEditedSave = (id, text) => {
    // 先拷貝一個新的陣列
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    // 用findIndex的作法
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    // 如果有找到的話
    if (index !== -1) {
      //把該項目的文字屬性改成新的
      newTodos[index].text = text

      // 設定回原本的todos
      setTodos(newTodos)

      // 切換回原本的狀態
      handleEdited(id)
    }
  }

  // 刪除使用
  const handleDelete = (id) => {
    // 先由目前的todos過濾掉"不要"有這個id的一個新陣列
    const newTodos = todos.filter((item) => item.id !== id)
    // 設定回狀態值
    setTodos(newTodos)

    // // for
    // const newTodos = []

    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === id) continue

    //   newTodos.push(todos[i])
    // }
    // setTodos(newTodos)
  }

  // 完成使用
  const handleCompleted = (id) => {
    // 先由目前的todos拷貝出一個陣列
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    // 用findIndex的作法
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    // 如果有找到就切換completed的true/false
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed
      // 設定回狀態值
      setTodos(newTodos)
    }

    // // for迴圈的作法
    // for (let i = 0; i < newTodos.length; i++) {
    //   if (newTodos[i].id === id) {
    //     newTodos[i].completed = !newTodos[i].completed
    //     break
    //   }
    // }

    // setTodos(newTodos)
  }

  const handleAddNew = (e) => {
    if (e.key === 'Enter') {
      // 建立一個todo項目的物件值
      // 用時間物件轉微秒整數當id值
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
        edited: false
      }

      // 文字輸入框的值加到陣列todos
      // 相當於unshift，在陣列前加入新的成員
      const newTodos = [newTodoItem, ...todos]

      // 設定陣列狀態值
      setTodos(newTodos)

      // 清空文字輸入框
      setTodoInput('')
    }
  }

  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleAddNew={handleAddNew}
      />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEdited={handleEdited}
        handleEditedSave={handleEditedSave}
      />
    </>
  )
}

export default TodoApp
