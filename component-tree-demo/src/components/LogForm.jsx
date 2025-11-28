import React from 'react'
import Csrftoken from './Csrftoken'

export default function LogForm() {
  return (
    <div className="component logform">
      <div className="component-label">LogForm</div>
      <div className="component-children">
        <Csrftoken />
      </div>
    </div>
  )
}
