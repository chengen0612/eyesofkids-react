import React, { useState, useEffect } from 'react'

function App() {
  return (
    <>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>
      <form className="form-inline">
        <div className="form-group mb-2">
          <label htmlFor="staticEmail2" className="sr-only">
            Email
          </label>
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail2"
            value="email@example.com"
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Confirm identity
        </button>
      </form>
    </>
  )
}

export default App
