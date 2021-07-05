import React, { useState } from 'react'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props

  // 用傳入props中的todoItem.text當初始化值
  const [input, setInput] = useState(todoItem.text)

  return (
    <>
      <li>
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          autoFocus
        />
        <button
          className="btn btn-success"
          onClick={() => {
            // 兩個傳入參數，第一個是要修改的項目id，第二個是修改的新文字字串
            handleEditedSave(todoItem.id, input)
          }}
        >
          儲存
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          取消
        </button>
      </li>
    </>
  )
}

export default TodoItemEditForm
