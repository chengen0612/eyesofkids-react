import React from 'react'

function ChildA(props) {
  // 由父母傳入的data
  return (
    <>
      <hr />
      <h1>Child A</h1>
      {props.data}
      <hr />
    </>
  )
}

export default ChildA
