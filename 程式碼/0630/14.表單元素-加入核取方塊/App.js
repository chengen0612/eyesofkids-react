import React, { useState } from 'react'

function App() {
  // 狀態變為物件，處理多個欄位
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    agree: false,
  })

  // 每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
    agree: '',
  })

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type, e.target.checked)

    const updateValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: updateValue,
    }

    setFields(updatedFields)
  }

  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    // 以下需要有name屬性
    console.log(data.get('email'))
    console.log(data.get('username'))
    console.log(data.get('password'))

    // 以下是直接從狀態獲取
    console.log(fields.email)
    console.log(fields.username)
    console.log(fields.password)

    // ex. 送到伺服器
  }

  // 整個表單有任何變動(ex.某個欄位有輸入)
  // 認為使用者正在改有錯誤的欄位
  // 清除某個欄位的錯誤訊息
  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.name)

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <h1>表單驗証</h1>
      <h3>文字輸入框</h3>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
      >
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.username !== '' && (
          <small className="text-danger form-text">
            {fieldErrors.username}
          </small>
        )}
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.email !== '' && (
          <small className="text-danger form-text">{fieldErrors.email}</small>
        )}
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        {fieldErrors.password !== '' && (
          <small className="text-danger form-text">
            {fieldErrors.password}
          </small>
        )}
        <br />
        <input
          name="agree"
          type="checkbox"
          value={fields.agree}
          onChange={handleFieldChange}
          required
        />
        我同意會員規定
        {fieldErrors.agree !== '' && (
          <small className="text-danger form-text">{fieldErrors.agree}</small>
        )}
        <br />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
