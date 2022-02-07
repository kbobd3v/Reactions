import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(() => {
    // we took out the value of last array object
    const lastIndex = people.length - 1;
    // if active index become less than 0-negative
    // Or if we go further than the first object of the array
    if (index < 0) {
      // then we go to the last object which will have last index value
      setIndex(lastIndex);
    }
    // If our index wants to go further than the last array object
    if (index > lastIndex) {
      // We'll go to first object
      setIndex(0);
    }
    // Remember, array to the end of the useEffect allows to execute effect
    // when the elements on the array change
  }, [index, people]);
  // Now let's code our auto slide function
  useEffect(() => {
    // set a interval of execution to run each 3 seconds or 3000 miliseconds
    const autoSlider = setInterval(() => {
      // Each 3 seconds our active index will go plus 1
      setIndex(index + 1);
    }, 3000);
    // after execute interval we clear it in order to prevent interval accumulations from crashing our app
    return () => clearInterval(autoSlider);
    // and this effect will run anytime active index changes
  }, [index]);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          // More stuff coming out
          // nextSlide will be the default className
          let position = 'nextSlide';
          // If person's index is equal to useState's index, change it's className
          if (personIndex === index) {
            position = 'activeSlide';
          }
          // if person's index is equal to the active index minus 1, it's className would be lastSlide
          if (personIndex === index - 1 || 
            // or if index is equal 0 and person's index is minor people.length minus 1
            (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='quote'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article> 
          );
        })};
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
