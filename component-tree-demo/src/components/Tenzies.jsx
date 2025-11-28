import React from 'react'
import Die from './Die'

export default function Tenzies() {
  return (
    <div className="component tenzies">
      <div className="component-label">Tenzies</div>
      <div className="component-children">
        <Die />
      </div>
    </div>
  )
}
