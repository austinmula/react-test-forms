import React from 'react';
import { useForm } from 'react-hook-form';

const CheckboxRadio = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log('first');
    alert(JSON.stringify(data));
  };

  const none = watch('checkboxes_none', false);
  console.log(none);

  return (
    <div className='pt-2 h-full px-5 flex flex-col justify-start items-center text-gray-700'>
      <div className=' mx-5 w-full'>
        {/* Form Begins */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Card */}
          <div className='p-6 shadow-lg rounded-xl'>
            <p className='text-lg font-semibold py-2'>Radio Buttons</p>
            {/* Radio 1 */}
            <div className='flex items-center py-2'>
              <input
                type='radio'
                {...register('radio_button')}
                className='h-4 w-4'
                value='none'
              />
              <label htmlFor='none' className='mx-3'>
                None
              </label>
            </div>
            {/* Radio 2 */}
            <div className='flex items-center py-2'>
              <input
                type='radio'
                {...register('radio_button')}
                className='h-4 w-4'
                value='calisto'
              />
              <label htmlFor='none' className='mx-3'>
                Calisto
              </label>
            </div>
            {/* Radio 3 */}
            <div className='flex items-center py-2'>
              <input
                type='radio'
                {...register('radio_button')}
                className='h-4 w-4'
                value='ganymede'
              />
              <label htmlFor='none' className='mx-3'>
                Ganymede
              </label>
            </div>
            {/* Radio 4 */}
            <div className='flex items-center py-2'>
              <input
                type='radio'
                {...register('radio_button')}
                className='h-4 w-4'
                value='luna'
              />
              <label htmlFor='none' className='mx-3'>
                Luna
              </label>
            </div>
            {/* Radio 5 */}
            <div className='flex items-center py-2'>
              <input
                type='radio'
                {...register('radio_button')}
                className='h-4 w-4'
                value='oberone'
              />
              <label htmlFor='none' className='mx-3'>
                Oberone
              </label>
            </div>
            {/* Radio 6 */}
            <div className='flex items-center py-2'>
              <input
                type='radio'
                {...register('radio_button')}
                className='h-4 w-4'
                value='phobos'
              />
              <label htmlFor='none' className='mx-3'>
                Phobos
              </label>
            </div>
          </div>
          {/* End First Card */}

          {/* Second Card */}
          <div className='p-6 shadow-lg rounded-xl'>
            <p className='text-lg font-semibold py-2'>Check Boxes</p>

            <div className='flex items-center py-2'>
              <input
                type='checkbox'
                {...register('checkboxes_none')}
                className='h-4 w-4'
              />
              <label htmlFor='none' className='mx-3'>
                None
              </label>
            </div>

            <div className='flex items-center py-2'>
              <input
                type='checkbox'
                {...register('checkboxes')}
                className='h-4 w-4'
                value='forums'
                disabled={none}
                unselectable={none}
              />
              <label htmlFor='forums' className='mx-3'>
                Forums
              </label>
            </div>

            <div className='flex items-center py-2'>
              <input
                type='checkbox'
                {...register('checkboxes')}
                className='h-4 w-4'
                value='socials'
                disabled={none}
              />
              <label htmlFor='socials' className='mx-3'>
                Socials
              </label>
            </div>

            <div className='flex items-center py-2'>
              <input
                type='checkbox'
                {...register('checkboxes')}
                className='h-4 w-4'
                value='updates'
                disabled={none}
              />
              <label htmlFor='updates' className='mx-3'>
                Updates
              </label>
            </div>

            <div className='flex items-center py-2'>
              <input
                type='checkbox'
                {...register('checkboxes')}
                className='h-4 w-4'
                value='promotions'
                disabled={none}
              />
              <label htmlFor='promotions' className='mx-3'>
                Promotions
              </label>
            </div>

            <div className='flex items-center py-2'>
              <input
                type='checkbox'
                {...register('checkboxes')}
                className='h-4 w-4'
                value='spam'
                disabled={none}
              />
              <label htmlFor='spam' className='mx-3'>
                Spam
              </label>
            </div>
          </div>
          <div className='flex justify-center mt-3'>
            <button type='submit' className='btn'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckboxRadio;
