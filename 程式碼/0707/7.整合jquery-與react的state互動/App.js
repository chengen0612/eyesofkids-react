import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

import MyButtonUseId from './components/MyButtonUseId'
import MyButtonUseRef from './components/MyButtonUseRef'

function App() {
  return (
    <>
      <MyButtonUseId title="按我啊-id-1" message="我是用id的按鈕-1" />
      <br />
      <br />
      <MyButtonUseRef title="按我啊-ref-1" message="我是用ref的按鈕-1" />
    </>
  )
}

export default App
