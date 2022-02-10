import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#F15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Values class allows us get different color values from our initial state got it from input
      // it returns an array of objects
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }
  return (
    // This is a react fragment label, use it when you need to render several labels un one function return
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text'
         value={color}
         onChange={(e) => setColor(e.target.value)}
         placeholder="#f15025"
         // if error useState is true then add className
         className={`${error ? 'error' : null}`} />
        <button className='btn' type="submit">
          submit
        </button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index) => {
        console.log(color);
        return <SingleColor key={index} {...color} index={index} hex={color.hex} />
      })}
    </section>
    </>
  )
}

export default App
