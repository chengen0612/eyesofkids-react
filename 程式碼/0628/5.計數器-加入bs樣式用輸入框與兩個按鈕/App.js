import React, { useState } from 'react'
import './App.css'

function App() {
  // 使用狀態，勾子(hooks)
  // 解構賦值語法(es6)
  const [total, setTotal] = useState(0)

  return (
    <>
      <div class="center">
        <div class="input-group">
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              onClick={() => {
                setTotal(total - 1)
              }}
            >
              -
            </button>
          </span>
          <input
            type="text"
            value={total}
            class="form-control input-number"
            onChange={(e) => setTotal(+e.target.value)}
          />
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              onClick={() => {
                setTotal(total + 1)
              }}
            >
              +
            </button>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
