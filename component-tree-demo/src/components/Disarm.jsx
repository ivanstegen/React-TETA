import React from 'react'
import LockerBox from './LockerBox'
import ConsoleKeys from './ConsoleKeys'

export default function Disarm() {
  return (
    <div className="component disarm">
      <div className="component-label">Disarm</div>
      <div className="component-children">
        <LockerBox />
        <ConsoleKeys />
      </div>
    </div>
  )
}
