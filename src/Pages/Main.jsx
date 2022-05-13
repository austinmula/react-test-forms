import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='pt-2 min-h-screen px-5 flex justify-center items-center'>
      <div className=' mx-5 w-full text-blue-500 flex flex-col space-y-5 items-center'>
        <Link to='/sign-up'>Sign up Form</Link>
        <Link to='/sign-in'>Sign-in Form</Link>
        <Link to='/form'>Radio & Checkboxes</Link>
      </div>
    </div>
  );
};

export default Main;
