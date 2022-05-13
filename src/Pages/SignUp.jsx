import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log('first');
    alert(JSON.stringify(data));
  };

  const password = watch('password');

  return (
    <div className='min-h-screen px-5 flex flex-col justify-center items-center'>
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
          {errors.first_name && (
            <small className='text-red-600 text-xs font-extralight '>
              Firstname is a Required Field
            </small>
          )}

          <label htmlFor='last_name' className='labels'>
            Last name:
          </label>
          <input
            type='text'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('last_name', { required: true })}
          />
          {errors.last_name && (
            <small className='text-red-600 text-xs font-extralight '>
              Lastname is a Required Field
            </small>
          )}

          <label htmlFor='phone_num' className='labels'>
            Phone number:
          </label>
          <input
            type='tel'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('phone_num', {
              maxLength: 10,
              minLength: 10,
            })}
          />
          {errors.phone_num && (
            <small className='text-red-600 text-xs font-extralight '>
              Must be 10 characters long
            </small>
          )}

          <label htmlFor='email' className='labels'>
            Email Address:
          </label>
          <input
            type='text'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('email', {
              required: { value: true, message: 'Email is a Required Field' },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid Email Address',
              },
            })}
          />
          {errors.email && (
            <small className='text-red-600 text-xs font-extralight '>
              {errors.email.message}
            </small>
          )}

          <label htmlFor='password' className='labels'>
            Password:
          </label>
          <input
            type='password'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('password', {
              required: {
                value: true,
                message: 'password is a required Field',
              },
              minLength: {
                value: 8,
                message: 'atleast 8 characters long',
              },
            })}
          />
          {errors.password && (
            <small className='text-red-600 text-xs font-extralight '>
              {errors.password.message}
            </small>
          )}

          <label htmlFor='confirm_password' className='labels'>
            Confirm password:
          </label>
          <input
            type='password'
            className='input-text-sm focus:outline-none focus:shadow-outline'
            {...register('confirm_password', {
              required: true,
              validate: (value) =>
                value === password || 'The passwords do not match',
            })}
          />
          {errors.confirm_password && (
            <small className='text-red-600 text-xs font-extralight '>
              {errors.confirm_password.message}
            </small>
          )}

          <div className='flex items-center justify-center mt-4'>
            <button type='submit' className='btn'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
