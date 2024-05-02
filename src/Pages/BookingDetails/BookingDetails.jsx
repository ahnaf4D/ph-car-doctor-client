import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const BookingDetails = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:3000/api/bookings/?email=${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user?.email]);
  return (
    <div>
      <h2 className='text-3xl text-center font-bold my-8'>
        Total Bookings : {bookings.length}
      </h2>
    </div>
  );
};

export default BookingDetails;
