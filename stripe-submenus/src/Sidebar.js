import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { UseGlobalContext } from './context'

const Sidebar = () => {
  const {closeSidebar, isSidebarOpen} = UseGlobalContext();

  return <aside className={`
  ${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
    <div className='sidebar'>
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      
    </div>
  </aside>
}

export default Sidebar
