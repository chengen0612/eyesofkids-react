import React from 'react'

function TodoItem(props) {
  const { todo, handleCompleted, handleEdited, handleDelete } = props

  return (
    <>
      <li>
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
          }}
        >
          {/* 判所是否完成 */}
          {todo.completed ? <del>{todo.text}</del> : todo.text}
        </span>
        <button
          onClick={() => {
            handleDelete(todo.id)
          }}
        >
          X刪除
        </button>
      </li>
    </>
  )
}

export default TodoItem
