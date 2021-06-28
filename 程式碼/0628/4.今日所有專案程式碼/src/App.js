import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={() => setTotal(total + 1)}
          type="button"
          className="btn btn-primary"
        >
          +
        </button>
        <button type="button" disabled className="btn btn-light">
          {total}
        </button>
        <button
          onClick={() => {
            if (total > 0) setTotal(total - 1)
          }}
          type="button"
          className="btn btn-primary"
        >
          -
        </button>
      </div>
    </>
  )
}

export default App
