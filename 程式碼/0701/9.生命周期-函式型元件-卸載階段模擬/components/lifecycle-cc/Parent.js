import React from 'react'
import Child from './Child'

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      isChildAlive: true,
    }
    console.log('Parent constructor')
  }

  componentDidMount() {
    console.log('Parent componentDidMount')
    console.log('---------------------')
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate')
    console.log('---------------------')
  }

  componentWillUnmount() {
    console.log('Parent componentWillUnmount')
    console.log('---------------------')
  }

  render() {
    console.log('Parent render')
    return (
      <>
        <button
          onClick={() => {
            this.setState({ isChildAlive: !this.state.isChildAlive })
          }}
        >
          {this.state.isChildAlive ? '再見！' : '復活吧！'}
        </button>
        <hr />
        {this.state.isChildAlive && <Child />}
      </>
    )
  }
}

export default Parent
