import React, { useState, useRef, useEffect } from 'react'
import { UseGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen } = UseGlobalContext();
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
    submenu
  </aside>
  )
}

export default Submenu
