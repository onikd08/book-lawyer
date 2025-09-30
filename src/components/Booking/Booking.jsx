import React from "react";

const Booking = ({ booking, handleCancelBooking }) => {
  const { name, speciality, fee, id } = booking;

  return (
    <div className="border rounded-2xl mb-10">
      <div className="flex items-center justify-between p-10">
        <div>
          <h3 className="text-2xl">{name}</h3>
          <p>{speciality}</p>
        </div>
        <div>
          <p>Appointment Fee: ${fee}</p>
        </div>
      </div>
      <div className="mx-5 mb-5">
        <button
          onClick={() => handleCancelBooking(id)}
          className="w-full btn btn-rounded btn-outline btn-error"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;
