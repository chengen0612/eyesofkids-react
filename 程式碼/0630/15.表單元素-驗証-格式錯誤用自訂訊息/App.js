import React, { useState, useRef } from 'react'

function App() {
  // 表單的ref
  const formRef = useRef(null)

  // 養成習慣，先定義有哪些欄位屬性
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
    // console.log(
    //   e.target.name,
    //   e.target.type,
    //   e.target.value,
    //   e.target.checked
    // )

    // 更新輸入欄位
    const updatedFields = {
      ...fields,
      [e.target.name]:
        e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.value,
    }

    setFields(updatedFields)
  }

  // 處理表單送出
  const handleSubmit = (e) => {
    // 阻擋表單送出預設行為
    e.preventDefault()

    // FormData
    const data = new FormData(e.target)

    console.log(data.get('email'))
    console.log(data.get('password'))

    // 利用狀態來得到輸入的值
    console.log(fields)

    // ex. 送出表單資料到伺服器
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })
  }

  // form有更動會觸發這個函式
  const handleChange = (e) => {
    console.log('更動欄位：', e.target.name)

    // 該欄位錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  // 有錯誤的訊息會觸發在這裡
  const handleInvalid = (e) => {
    e.preventDefault()

    // 表單實體的物件參照
    const form = formRef.current

    let errorMsg = {}

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i]

      if (
        element.tagName !== 'button' &&
        element.willValidate &&
        !element.validity.valid
      ) {
        // 必填用預設訊息，但錯誤格式驗証用title中的字串
        if (element.validity.valueMissing) {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.validationMessage,
          }
        } else {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.title,
          }
        }
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onInvalid={handleInvalid}
      >
        <div className="form-group">
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleFieldChange}
            required
            placeholder="帳號"
            title="自訂訊息：格式錯誤"
          />
          {fieldErrors.username && (
            <small className="text-danger form-text">
              {fieldErrors.username}
            </small>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            required
            placeholder="email信箱"
            title="自訂訊息：email信箱格式錯誤"
          />
          {fieldErrors.email && (
            <small className="text-danger form-text">
              {fieldErrors.email}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleFieldChange}
            placeholder="密碼"
            required
            minLength="6"
          />
          {fieldErrors.password && (
            <small className="text-danger form-text">
              {fieldErrors.password}
            </small>
          )}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="agree"
            required
            checked={fields.agree}
            onChange={handleFieldChange}
            className="form-check-input"
          />
          <label
            className="form-check-label"
            htmlFor="exampleCheck1"
          >
            我同意網站的使用者規章
          </label>
        </div>

        {fieldErrors.agree && (
          <small className="text-danger form-text">
            {fieldErrors.agree}
          </small>
        )}

        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
