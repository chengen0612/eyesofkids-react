import './App.css'

function App() {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>訂購單</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                3種商品項目
              </div>
            </div>
          </div>
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://i.imgur.com/1GrakTl.jpg"
                />
              </div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">咖啡色 T-shirt</div>
              </div>
              <div className="col">
                <a href="#/">-</a>
                <a href="#/" className="border">
                  1
                </a>
                <a href="#/">+</a>
              </div>
              <div className="col">
                $300 <span className="close">&#10005;</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://i.imgur.com/ba3tvGm.jpg"
                />
              </div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">白色 T-shirt</div>
              </div>
              <div className="col">
                <a href="#/">-</a>
                <a href="#/" className="border">
                  1
                </a>
                <a href="#/">+</a>
              </div>
              <div className="col">
                $200 <span className="close">&#10005;</span>
              </div>
            </div>
          </div>
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://i.imgur.com/pHQ3xT3.jpg"
                />
              </div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">黑色 T-shirt</div>
              </div>
              <div className="col">
                <a href="#sec" onClick={() => {}}>
                  -
                </a>
                <a href="#sec" className="border">
                  1
                </a>
                <a href="#sec">+</a>
              </div>
              <div className="col">
                $450 <span className="close">&#10005;</span>
              </div>
            </div>
          </div>
          <div className="back-to-shop">
            <a href="#/">←</a>
            <span className="text-muted">回到商品頁</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>付款摘要</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col col-style">共 3 項目</div>
          </div>
          <div className="row row-style">
            <div className="col">總價</div>
            <div className="col text-right">$137.00</div>
          </div>
          <button className="btn">前往付款</button>
        </div>
      </div>
    </div>
  )
}

export default App
