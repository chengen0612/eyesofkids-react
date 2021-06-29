import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [data, setData] = useState('parent data')
  
  return (
    <>
      <ChildA data={data} />
      <ChildB />
    </>
  )
}

export default Parent
