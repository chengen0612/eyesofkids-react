import React, { useState } from 'react'
import RadioBox from './components/RadioBox'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectOption] = useState('')
  // radio
  const [gender, setGender] = useState('')
  const genderList = ['男', '女', '未定']
  // radio
  const [degree, setDegree] = useState('')
  const degreeList = ['大學', '碩士', '博士', '不告訴你']

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
        <h5>性別</h5>
        {genderList.map((v, i) => {
          return (
            <RadioBox
              key={i}
              value={v}
              checkedValue={gender}
              setCheckedValue={setGender}
            />
          )
        })}
        <hr />
        <h5>學歷</h5>
        {degreeList.map((v, i) => {
          return (
            <RadioBox
              key={i}
              value={v}
              checkedValue={degree}
              setCheckedValue={setDegree}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
