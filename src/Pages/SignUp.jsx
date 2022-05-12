import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('first');
    console.log(data);
  };
  return (
    <div>
      <h1>Demo App</h1>

      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='first_name'>First name:</label>
          <input type='text' {...register('first_name', { required: true })} />

          <label htmlFor='last_name'>Last name:</label>
          <input type='text' {...register('last_name', { required: true })} />

          <label htmlFor='phone_num'>Phone number:</label>
          <input {...register('phone_num')} />

          <label htmlFor='email'>Email Address:</label>
          <input
            type='email'
            {...register('email', { required: true, minLength: 5 })}
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            {...register('password', { required: true, minLength: 8 })}
          />

          <label htmlFor='confirm_password'>Confirm password:</label>
          <input
            type='password'
            {...register('confirm_password', { required: true, minLength: 8 })}
          />

          <button type='submit'>Sign Up</button>
        </form>
      </div>

      <Link to={'/sign-in'}>here</Link>
    </div>
  );
};

export default SignUp;
