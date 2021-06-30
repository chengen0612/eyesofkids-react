import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <h3>文字輸入框</h3>
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value)
        }}
      />
    </>
  )
}

export default App
