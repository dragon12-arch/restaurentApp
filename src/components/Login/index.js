import {useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LOGIN_API_URL = 'https://apis.ccbp.in/login'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const onChangeUsername = event => setUsername(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)

  const onSubmitSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onSubmitFailure = message => {
    setShowError(true)
    setErrorMsg(message)
  }

  const submitForm = async event => {
    event.preventDefault()

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(LOGIN_API_URL, options)
      const data = await response.json()

      if (response.ok) {
        onSubmitSuccess(data.jwt_token)
      } else {
        onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitForm}>
        <h1 className="login-heading">Login</h1>

        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className="login-input"
          value={username}
          onChange={onChangeUsername}
        />

        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          className="login-input"
          value={password}
          onChange={onChangePassword}
        />

        <button type="submit" className="login-button">
          Login
        </button>

        {showError && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
