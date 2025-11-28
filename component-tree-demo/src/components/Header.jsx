import React from 'react'
import Login from './Login'
import Loader from './Loader'

export default function Header() {
  return (
    <div className="component header">
      <div className="component-label">Header</div>
      <div className="component-children">
        <Login />
        <Loader />
      </div>
    </div>
  )
}
