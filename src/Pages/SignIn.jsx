import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <div className='py-20 h-screen px-5 flex flex-col justify-between items-center'>
      <h1 className='text-4xl font-bold'>DEMO APP</h1>

      {/* Main Card */}
      <div className='p-6 w-full mx-5 shadow-lg rounded-xl'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email input */}
          <label htmlFor='email' className='labels'>
            Email:
          </label>
          <input
            className='input-text'
            placeholder='e.g. john@gmail.com'
            type='email'
            {...register('email', {
              required: { value: true, message: 'Enter email' },
            })}
          />
          {/* Error handling */}
          {errors.email && (
            <small className='text-red-600 text-xs font-extralight '>
              {errors.email.message}
            </small>
          )}

          {/* Password Input */}
          <label htmlFor='password' className='labels'>
            Password:
          </label>
          <input
            className='input-text'
            placeholder='At least 8 symbols...'
            type='password'
            {...register('password', {
              required: { value: true, message: 'Enter password' },
              minLength: {
                value: 8,
                message: 'minimum length is 8 characters',
              },
            })}
          />

          {/* Error handling */}
          {errors.password && (
            <small className='text-red-600 text-xs font-extralight '>
              {errors.password.message}
            </small>
          )}

          {/* Remember me checkbox */}
          <div className='flex items-center justify-center my-3'>
            <input type='checkbox' {...register('remember')} />
            <label htmlFor='remember' className='mx-3'>
              Remember me
            </label>
          </div>

          {/* Button */}
          <div className='flex items-center justify-center'>
            <button type='submit' className='btn'>
              Log In
            </button>
          </div>
        </form>
      </div>

      <p>
        New here? Click{' '}
        <Link className='text-blue-500' to={'/sign-up'}>
          here
        </Link>{' '}
        to signup
      </p>
    </div>
  );
};

export default SignIn;
