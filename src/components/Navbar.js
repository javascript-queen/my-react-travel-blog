import React from 'react'
import './Navbar.css'
import icon from '../img/icon.svg'

export function Navbar() {
  return (
    <div>
      <nav>
        <img className="icon" src={ icon } alt="earth-shaped pink symbol"/>
        <span>my travel journal</span>
      </nav>
    </div>
  )
}
