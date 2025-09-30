import { useLoaderData } from "react-router";
import Lawyer from "../Lawyer/Lawyer";

const AllLawyer = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="max-w-3xl mx-auto text-center my-15">
        <h1 className="text-3xl mb-5"> Our Best Lawyers</h1>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-5">
        {data.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>
    </>
  );
};

export default AllLawyer;
