import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      <Child
        text="Hello React!" myColor="red" count={123} />

      <Child myColor="blue" count={111} />
    </>
  )
}

export default Parent
