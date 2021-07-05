import React from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'

function TodoList(props) {
  const {
    todos,
    handleCompleted,
    handleDelete,
    handleEdited,
    handleEditedSave,
  } = props

  return (
    <>
      <ul>
        {todos.map((todoItem, i) => {
          return todoItem.edited ? (
            <TodoItemEditForm
              key={todoItem.id}
              handleEdited={handleEdited}
              todoItem={todoItem}
              handleEditedSave={handleEditedSave}
            />
          ) : (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
              handleEdited={handleEdited}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
