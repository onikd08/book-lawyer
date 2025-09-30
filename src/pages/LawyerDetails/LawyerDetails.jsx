import { useLoaderData, useNavigate, useParams } from "react-router";
import { saveDataOnLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";

const LawyerDetails = () => {
  const data = useLoaderData() || [];
  const { id } = useParams();
  const lawyerId = parseInt(id);
  const lawyer = data.find((item) => item.id === lawyerId);
  const {
    registrationNumber,
    name,
    experience,
    speciality,
    image,
    availability,
    fee,
  } = lawyer;

  const navigate = useNavigate();

  const handleBooking = (id) => {
    const isStored = saveDataOnLocalStorage(id);
    if (isStored) {
      toast.success("Booking saved successfully 🎉");
      navigate("/myBookings");
    } else {
      toast.warn("This booking already exists!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center ">
        <h3 className="text-3xl my-10">Lawyer's Profile Details</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-sm mt-10">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <span className="badge badge-xs badge-error">{experience}</span>
          <h2 className="card-title">{name}</h2>
          <p>
            {speciality} License no: {registrationNumber}
          </p>
          <p>
            Availablelity:
            {availability.map((day, idx) => (
              <span className="badge badge-xs badge-error mx-3" key={idx}>
                {day}
              </span>
            ))}
          </p>
          <p>Consultation Fee: ${fee}</p>
          <button
            onClick={() => handleBooking(lawyerId)}
            className="btn btn-full btn-outline btn-success"
          >
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
