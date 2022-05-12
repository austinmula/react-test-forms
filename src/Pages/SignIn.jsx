import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Demo App</h1>

      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='email'>Email:</label>
          <input type='email' {...register('email')} />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            {...register('password', { required: true, minLength: 8 })}
          />

          <input type='checkbox' {...register('remember')} />
          <label htmlFor='remember'> Remember me</label>

          <button type='submit'>Log In</button>
        </form>
      </div>

      <Link to={'/sign-up'}>here</Link>
    </div>
  );
};

export default SignIn;
