import React from 'react'
import Vercel from './components/Vercel'

export default function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">React Component Tree Visualization</h1>
      <p className="description">
        Демонстрация на йерархичната структура на React компонентите
      </p>
      <Vercel />
    </div>
  )
}
