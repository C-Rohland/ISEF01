import React from 'react'

export default function Login() {
  return (
    <div className="container">
      <div className="card p-6">
        <h2>Login</h2>
        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="block font-semibold">Email:</label>
            <input type="email" id="email" name="email" className="input" />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block font-semibold">Password:</label>
            <input type="password" id="password" name="password" className="input" />
          </div>
          <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  )
}
