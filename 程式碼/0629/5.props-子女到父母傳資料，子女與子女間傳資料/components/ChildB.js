import React, { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('Child B Data')

  return (
    <>
      <hr />
      <h1>Child B</h1>
      <button
        onClick={() => {
          props.setParentData(childBData)
        }}
      >
        設定Parent Data
      </button>
      <hr />
    </>
  )
}

export default ChildB
