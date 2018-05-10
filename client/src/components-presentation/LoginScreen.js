import React, { Component } from 'react'

const LoginScreen = (props) => {
  let passwordElem = {}
  let usernameElem = {}

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(usernameElem.value, passwordElem.value)
  }


  return <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <form action="" onSubmit={handleSubmit}>
          <h3>Teacher Login</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text"
                   className="form-control form-control-lg"
                   id="username"
                   ref={(e) => usernameElem = e}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   className="form-control form-control-lg"
                   id="password"
                   ref={(e) => passwordElem = e}
            />
          </div>
          <div className="form-group">
            <input type="submit"
                   className="form-control form-control-lg"
                   value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
}

export default LoginScreen