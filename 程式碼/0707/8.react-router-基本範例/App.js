import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 以下要導入所需要頁面
import Home from './pages/Home'
import About from './pages/About'

// 路由器所在的位置，記錄所有的路由
// 全域狀態放在這裡
function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* 以下是路由表 */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
