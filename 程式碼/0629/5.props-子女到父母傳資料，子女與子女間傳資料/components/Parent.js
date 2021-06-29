import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('Parent Data')

  return (
    <>
      <ChildA parentData={parentData} />
      <ChildB setParentData={setParentData} />
    </>
  )
}

export default Parent
