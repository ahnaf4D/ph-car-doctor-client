import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const loadData = useLoaderData();
  const { title } = loadData;
  return (
    <div>
      <h2 className='text-4xl my-4 text-center'>Checkout : {title}</h2>
      <div className='container mx-auto bg-orange-100 p-6 m-6 rounded-lg'>
        <form className='flex flex-col items-center gap-6'>
          <div className='flex gap-6'>
            <label htmlFor='firstName'>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                id='firstName'
                className='input input-bordered w-96'
                required
              />
            </label>
            <label htmlFor='lastName'>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                id='lastName'
                className='input input-bordered w-96'
                required
              />
            </label>
          </div>
          <div className='flex gap-6'>
            <label htmlFor='phone'>
              <input
                type='text'
                name='phone'
                placeholder='Your Phone'
                id='phone'
                className='input input-bordered w-96'
                required
              />
            </label>
            <label htmlFor='email'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                id='lastName'
                className='input input-bordered w-96'
                required
              />
            </label>
          </div>
          <textarea
            name=''
            id=''
            cols='80'
            rows='5'
            placeholder='Your Massage'
            className='border-2 p-2 rounded-lg  mx-auto'
          ></textarea>
          <label htmlFor='' className=''>
            <input
              type='submit'
              className='btn btn-error  mb-4 text-white text-xl w-full'
              value='Order Confirm'
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
