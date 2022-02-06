import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
        <button
        type='button'
        className='filter-btn'
        key={index}
        // We put onClicks on arrow function 
        // because if put the function itself it will call on render 
        onClick={() => filterItems(category)}
        >
          {category} 
        </button> 
        );
      })}
    </div>
  );
};

export default Categories;
