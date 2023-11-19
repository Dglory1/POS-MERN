import React from 'react'

const Spinner = () => {
  return (
    <div className='spinner'>
        <div classname="spinner-border" role="status">
            <span classname="visually-hidden">Loading...</span>
        </div>
    </div>
  );
};

export default Spinner