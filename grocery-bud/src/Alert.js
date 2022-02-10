import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=> {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000)
    return () => clearTimeout(timeout);
    // once the component is rendered, the effect will run
  }, [list])
  return (
    <p className={`alert alert-${type}`}>
      {msg}
    </p>
  )
}

export default Alert
