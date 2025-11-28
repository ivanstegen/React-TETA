import React from 'react'
import Task2 from './Task2'

export default function App() {
  const reactLogo = 'https://reactjs.org/logo-og.png'

  return (
    <div className="App">
      <h1>Props Overview — `children` demo</h1>

      <Task2 firstName="Ivan" lastName="Danovski" title="Teacher" image={reactLogo}>
        This is the "children" prop
      </Task2>

    </div>
  )
}
