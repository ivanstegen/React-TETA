import React from 'react'
import Tenzies from './Tenzies'
import Disarm from './Disarm'
import LogForm from './LogForm'

export default function Hero() {
  return (
    <div className="component hero">
      <div className="component-label">Hero</div>
      <div className="component-children">
        <Tenzies />
        <Disarm />
        <LogForm />
      </div>
    </div>
  )
}
