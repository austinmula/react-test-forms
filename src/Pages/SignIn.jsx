import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='py-24 h-full px-5 flex flex-col justify-between items-center'>
      <h1 className='text-4xl font-bold'>DEMO APP</h1>

      <div className='p-6 w-full mx-5 shadow-lg rounded-xl'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='email' className='labels'>
            Email:
          </label>
          <input
            className='input-text'
            placeholder='e.g. john@gmail.com'
            type='email'
            {...register('email')}
          />

          <label htmlFor='password' className='labels'>
            Password:
          </label>
          <input
            className='input-text'
            placeholder='At least 8 symbols...'
            type='password'
            {...register('password', { required: true, minLength: 8 })}
          />

          <div className='flex items-center justify-center my-3'>
            <input type='checkbox' {...register('remember')} />
            <label htmlFor='remember' className='mx-3'>
              Remember me
            </label>
          </div>

          <div className='flex items-center justify-center'>
            <button type='submit' className='btn'>
              Log In
            </button>
          </div>
        </form>
      </div>

      <p>
        New here? Click <Link to={'/sign-up'}>here</Link> to signup
      </p>
    </div>
  );
};

export default SignIn;
