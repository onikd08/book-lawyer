import { useLoaderData } from "react-router";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../../utils/localStorage";
import Booking from "../../components/Booking/Booking";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyBookings = () => {
  const data = useLoaderData();
  const [bookingData, setBookingData] = useState([]);

  const handleCancelBooking = (id) => {
    toast.success("Your booking is now canceled!");
    setBookingData((prev) => prev.filter((item) => item.id !== id));
    removeDataFromLocalStorage(id);
  };

  useEffect(() => {
    const localStorageBookings = getDataFromLocalStorage();
    const newBookingData = data.filter((item) =>
      localStorageBookings.includes(item.id)
    );
    setBookingData(newBookingData);
  }, [data]);

  return (
    <div>
      <h1 className="text-3xl text-center my-10">My Bookings</h1>
      <div>
        {bookingData.length ? (
          bookingData.map((booking) => (
            <Booking
              handleCancelBooking={handleCancelBooking}
              key={booking.id}
              booking={booking}
            ></Booking>
          ))
        ) : (
          <h1 className="text-center mb-10">No Bookings yet</h1>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
