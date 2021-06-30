import React, { useState } from 'react'

function App() {
  // 狀態變為物件，處理多個欄位
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
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

  return (
    <>
      <h1>表單驗証</h1>
      <h3>文字輸入框</h3>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <label>密碼</label>
        <input
          name="password"
          type="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
