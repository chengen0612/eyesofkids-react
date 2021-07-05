import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props

  return (
    <>
      <input
        className="form-control"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleAddNew}
      />
    </>
  )
}

export default TodoAddForm
