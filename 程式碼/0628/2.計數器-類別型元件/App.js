import React from 'react'

class App extends React.Component {
  constructor() {
    //呼叫父母類別的建構式
    super()
    // 狀態必為物件值
    this.state = {
      total: 9,
    }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default App
