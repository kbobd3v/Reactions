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
      <div className='siderbar-links'>
        {/* Let's iterate through our array of objects from data */}
        {sublinks.map((item, index) => {
          const {page, links} = item;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {/* Then iterate through the links array which is an attribute of our objects */}
                {links.map((item, index) => {
                  const {label, icon, url} = item;
                  return (
                    <a key={index} href={url}>{icon}{label}</a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar
