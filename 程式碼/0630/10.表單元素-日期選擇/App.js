import React, { useState } from 'react'
import MyRadioBox from './components/MyRadioBox'
import MyCheckbox from './components/MyCheckbox'

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

  // checkbox 單一勾選(核取方塊)
  const [agree, setAgree] = useState(false)

  // checkbox 多個勾選(核取方塊)
  const [likeList, setLikeList] = useState([])
  const likeTypes = ['芒果', '西瓜', '芭樂', '香蕉']

  // date
  const [date, setDate] = useState('')

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
            <MyRadioBox
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
            <MyRadioBox
              key={i}
              value={v}
              checkedValue={degree}
              setCheckedValue={setDegree}
            />
          )
        })}
      </section>
      <section id="checkbox">
        <h3>核取方塊</h3>
        <h5>單一勾選</h5>
        <input
          type="checkbox"
          checked={agree}
          onChange={(event) => {
            setAgree(event.target.checked)
          }}
        />
        <label>我同意網站會員註冊相關規定</label>

        <h5>多個勾選</h5>
        {likeTypes.map((v, i) => {
          return (
            <MyCheckbox
              key={i}
              value={v}
              checkedValueList={likeList}
              setCheckedValueList={setLikeList}
            />
          )
        })}
      </section>
      <section id="input-date">
        <h3>日期時間選擇</h3>
        <input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value)
          }}
        />
      </section>
    </>
  )
}

export default App
