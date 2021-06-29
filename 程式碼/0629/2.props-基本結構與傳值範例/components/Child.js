import React from 'react'

function Child(props) {
  console.log(props)

  return <>{props.text}</>
}

export default Child
