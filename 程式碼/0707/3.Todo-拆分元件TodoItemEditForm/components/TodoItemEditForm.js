import React from 'react'

function TodoItemEditForm(props) {
  const { todo, text, setText, handleEditedSave } = props

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
