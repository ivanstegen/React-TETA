import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

export default function Vercel() {
  return (
    <div className="component vercel">
      <div className="component-label">Vercel</div>
      <div className="component-children">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  )
}
