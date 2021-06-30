import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectOption] = useState('')
  // radio
  const [gender, setGender] = useState('')

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
      <section id="select">
        <h3>下拉選單</h3>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectOption(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          <option value="雞腿">雞腿</option>
          <option value="魯肉">魯肉</option>
          <option value="排骨">排骨</option>
        </select>
      </section>
      <section id="radio">
        <h3>選項按鈕</h3>
        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>
        <input
          type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>未定</label>
      </section>
    </>
  )
}

export default App
