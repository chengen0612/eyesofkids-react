import React from 'react'
import PropTypes from 'prop-types'

function Child(props) {
  console.log(props)
  // 解構賦值
  const { text, myColor, count } = props

  return (
    <>
      <div
        style={{
          color: myColor,
        }}
      >
        {text}
        {count}
      </div>
    </>
  )
}

Child.defaultProps = {
  text: '我是預設文字',
  myColor: 'pink',
}

Child.propTypes = {
  text: PropTypes.string.isRequired,
  myColor: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}

export default Child
