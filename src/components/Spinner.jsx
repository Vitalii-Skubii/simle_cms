import React from 'react';
import spinner from '../assets/img/spinner.svg';


export const Spinner = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt='spinner'/>
    </div>
  );
};