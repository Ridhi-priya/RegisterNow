import React from 'react'
import Styles from './Login.module.css'
function Login() {
  return (
    <div className={Styles.login}>
      <div className={Styles.container}>
        <h1>Please login</h1>
        <form>
          <div className={Styles.formControl}>
            <input
              className={Styles.label}
              type='email'
              placeholder='Email'
              required
            />
          </div>
          <div className={Styles.formControl}>
            <input type='Password' placeholder='Password' required />
          </div>
          <button className={Styles.btn}>Login</button>
          <p className={Styles.text}>
            Don't have an account? <a href='register'>Register</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
