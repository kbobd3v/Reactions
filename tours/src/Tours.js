import React from 'react';
import Tour from './Tour';
// Now you can use props in our component, preferly destructuring them 
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          // Send props again to use them on child tour component
          // {...tour} spread operator send all attributes of tour as props
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        }
        )}
      </div>
    </section>
  )
};

export default Tours;
