import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h3>第1種</h3>
      {total && <p>total has value</p>}
      <h3>第2種</h3>
      {total !== 0 && <p>total has value</p>}
      <h3>第3種</h3>
      {!!total && <p>total has value</p>}
      <h3>第4種</h3>
      {Boolean(total) && <p>total has value</p>}
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
