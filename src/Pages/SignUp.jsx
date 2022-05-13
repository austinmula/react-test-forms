import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('first');
    console.log(data);
  };
  return (
    <div className='h-full px-5 flex flex-col justify-center items-center'>
      <div className='p-6 w-full mx-5 shadow-lg rounded-xl'>
        <h1 className='text-3xl font-semibold my-3'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='first_name' className='labels'>
            First name:
          </label>
          <input
            type='text'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('first_name', { required: true })}
          />

          <label htmlFor='last_name' className='labels'>
            Last name:
          </label>
          <input
            type='text'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('last_name', { required: true })}
          />

          <label htmlFor='phone_num' className='labels'>
            Phone number:
          </label>
          <input
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('phone_num')}
          />

          <label htmlFor='email' className='labels'>
            Email Address:
          </label>
          <input
            type='email'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('email', { required: true, minLength: 5 })}
          />

          <label htmlFor='password' className='labels'>
            Password:
          </label>
          <input
            type='password'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('password', { required: true, minLength: 8 })}
          />

          <label htmlFor='confirm_password' className='labels'>
            Confirm password:
          </label>
          <input
            type='password'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('confirm_password', { required: true, minLength: 8 })}
          />

          <div className='flex items-center justify-center mt-4'>
            <button type='submit' className='btn'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* 
      <Link to={'/sign-in'}>here</Link>
      <p className='text-5xl font-bold'>Lorem, ipsum.</p> */}
    </div>
  );
};

export default SignUp;
