import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  return (
    <>
      <h1>可控表單元素</h1>
      <section id="input-text">
        <h3>文字輸入框</h3>
        <input
          type="text"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h3>文字區域</h3>
        <textarea
          value={textArea}
          onChange={(event) => {
            setTextArea(event.target.value)
          }}
        />
      </section>
    </>
  )
}

export default App
