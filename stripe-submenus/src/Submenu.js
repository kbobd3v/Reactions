import React, { useState, useRef, useEffect } from 'react'
import { UseGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: {page, links}, } = UseGlobalContext();
  // put a reference on a tag
  const container = useRef(null)
  const [colums, setColums]= useState('col-2');
  useEffect(()=> {
    setColums('col-2');
    // here we gain access to our tag attributes
    const submenu = container.current;
    // from location destructure our coordinates
    const {center, bottom} = location;
    // we set the left attribute on style because we have our center value
    submenu.style.left = `${center}px`;
    // in here we'll set from bottom, we put top because css like it that way
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColums('col-3');
    }

    if (links.length > 3){
      setColums('col-4');
    }
  }, [location]);
  return (
    <aside 
    className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} 
    // we put a reference on our tag called container in order to access its attributes
    ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${colums}`}>
      {links.map((link, index)=> {
        const {label, url, icon} = link;
        return <a key={index} href={url}>{icon}{label}</a>
      })}
    </div>
  </aside>
  )
}

export default Submenu
