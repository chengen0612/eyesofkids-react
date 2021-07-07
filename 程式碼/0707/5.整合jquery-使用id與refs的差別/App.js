import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

import MyButtonUseId from './components/MyButtonUseId'
import MyButtonUseRef from './components/MyButtonUseRef'

function App() {
  return (
    <>
      <MyButtonUseId title="按我啊-id-1" message="我是用id的按鈕-1" />
      <MyButtonUseId title="按我啊-id-2" message="我是用id的按鈕-2" />
      <MyButtonUseId title="按我啊-id-3" message="我是用id的按鈕-3" />
      <MyButtonUseId title="按我啊-id-4" message="我是用id的按鈕-4" />
      <br />
      <br />
      <MyButtonUseRef title="按我啊-ref-1" message="我是用ref的按鈕-1" />
      <MyButtonUseRef title="按我啊-ref-2" message="我是用ref的按鈕-2" />
      <MyButtonUseRef title="按我啊-ref-3" message="我是用ref的按鈕-3" />
      <MyButtonUseRef title="按我啊-ref-4" message="我是用ref的按鈕-4" />
      <MyButtonUseRef title="按我啊-ref-5" message="我是用ref的按鈕-5" />
    </>
  )
}

export default App
