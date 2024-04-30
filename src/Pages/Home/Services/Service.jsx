import { FaLongArrowAltRight } from 'react-icons/fa';
const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='flex items-center'>
          <p className='text-2xl font-medium text-orange-500'>
            Price : ${price}
          </p>
          <button className='btn btn-error text-white btn-square'>
            <FaLongArrowAltRight className='text-3xl' />
          </button>
        </div>
        {/* <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
