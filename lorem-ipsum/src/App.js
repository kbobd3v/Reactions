import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    // This allows you to cancel the action in order to send it several times
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (amount => text.length - 1){
      amount = text.length - 1;
    }
    setText(data.slice(0,amount));
  }

  return (
  <section className='section-center'>
    <h3>Tired of bored lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      {/* htmlFor returns the value of the label */}
      <label htmlFor='amount'>
        paragraphs:
      </label>
      <input type="number" name="amount" id='amount' value={count}
      // onChange search for changes in values
      // So we hear the event, look for the value in its target
      onChange={(e) => { setCount(e.target.value)}} />
      <button className='btn' type='submit'>Paragraphs</button>
    </form>
    <article className='lorem-text'>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
