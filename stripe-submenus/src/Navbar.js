import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { UseGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = UseGlobalContext();
  const displaySubmenu = (e) => {
    // textContent returns a string
    // With this we get the text to indentify where our sublinks belong
    const page = e.target.textContent;
    // getBoundingClientRect returns the size of an element and its position relative to the viewport
    const tempBtn = e.target.getBoundingClientRect();
    // Based on position of our button, we calculate with this values to get the button's center
    const center = (tempBtn.left + tempBtn.right) / 2 ;
    // we want our submenu be 3 pixels up
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) { 
      closeSubmenu();
    }
  }
  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='stripe' />
        <button className='btn toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu} >products</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu} >developers</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu} >company</button>
        </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
}

export default Navbar
