import React from 'react'
import '../styles/Homepage.css'

export default function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to My Homepage</h1>
      <div className="button-container">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
        <button className="button">Button 3</button>
      </div>
      <div className="login-container">
        <button className="login-button">Login</button>
      </div>
    </div>
  )
}
