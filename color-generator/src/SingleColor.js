import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  // We use join because rbg return an array and we want join those array values into a string divided by coma
  const bgc = rgb.join(',');
  // use template string to attach # to the hex variable
  const hexValue = `#${hex}`;
  // everytime alert value change we'll set a timeout to change the value again to false
  // in order to make the clipboard text disappear after 3 seconds or 3000 miliseconds
  useEffect(() => {
    const timeout = setTimeout(() =>{
      setAlert(false);
    }, 3000);
    // after the setTimeout ran, clear the whole timeout (this prevents the overload of timeouts)
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    // We add templates strings on the classname, because we want to check
    // if the index (which is also the number or base where the color makes hard to read info) 
    // is above 10, then change the weight of text color within the container
    //  when adding in-line style templates remember camelCase for properties and : to divide properties from values
    // look we use rgb on template strings ``, we'll pass the bgc joined string
    // to use it as a color value for background-color property
    <article 
      className={`color ${index > 10 && 'color-light'}`}
      style={{backgroundColor: `rgb(${bgc})`}}
      onClick={() => {
        setAlert(true);
        // Take the navigator's clipboard element and write on it the value you want
        // in this case we'll pass hexValue
        navigator.clipboard.writeText(hexValue);
        }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {/* If alert state value is true, display this paragraph */}
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
