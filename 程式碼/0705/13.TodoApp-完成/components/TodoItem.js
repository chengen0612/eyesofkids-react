import React from 'react'

function TodoItem(props) {
  const {
    todoItem,
    handleCompleted,
    handleDelete,
    handleEdited,
  } = props

  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => {
            handleCompleted(todoItem.id)
          }}
        />
        {todoItem.completed ? (
          <del>{todoItem.text}</del>
        ) : (
          todoItem.text
        )}
        <button
          className="btn btn-primary"
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          編輯
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(todoItem.id)
          }}
        >
          刪除
        </button>
      </li>
    </>
  )
}

export default TodoItem
