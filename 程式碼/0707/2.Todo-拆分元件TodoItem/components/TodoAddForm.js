import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value)
        }}
        onKeyPress={handleAddNew}
      />
    </>
  )
}

export default TodoAddForm
