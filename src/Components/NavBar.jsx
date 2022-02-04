import React from 'react';
import image from '../Images/react.png'
import '../index.css'

function NavBar() {
  return (
  <nav className='nav'>
      <img className='react-img' src={image}></img>
      <h1 className='title'>ReactFacts</h1>
      <h3 className='nav-title'>React Course - Project 1</h3>
  </nav>
  )
}

export default NavBar;
