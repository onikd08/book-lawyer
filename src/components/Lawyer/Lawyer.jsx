import React from "react";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const { id, registrationNumber, name, experience, speciality, image } =
    lawyer;
  return (
    <div className="flex items-center justify-around p-6 border rounded-4xl shadow-2xl">
      <figure className="">
        <img className="object-cover rounded-lg h-36" src={image} alt={name} />
      </figure>
      <div className="text-start">
        <span className="badge badge-xs badge-success">Available</span>
        <span className="badge badge-xs badge-error ms-4">{experience}</span>
        <h3 className="text-2xl mb-4">{name}</h3>
        <p>{speciality}</p>
        <p className="text-sm">License no: {registrationNumber}</p>
        <Link
          to={`/lawyerDetails/${id}`}
          className="btn btn-wide rounded-full my-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;
