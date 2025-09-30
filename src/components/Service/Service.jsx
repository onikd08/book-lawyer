import React from "react";
import CountUp from "react-countup";
import Honor from "./Honor";
import lawyerImg from "../../assets/success-lawyer.png";
import caseImg from "../../assets/success-case.png";
import reviewImg from "../../assets/success-review.png";
import staffImg from "../../assets/success-staffs.png";
const Service = () => {
  return (
    <div className="text-center my-15">
      <h1 className="text-3xl mb-5">We Provide Best Law Services</h1>
      <p>
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <Honor num={199} msg={"Total lawyer"} img={lawyerImg} />
        <Honor num={467} msg={"Total reviews"} img={reviewImg} />
        <Honor num={1900} msg={"Cases Initiated"} img={caseImg} />
        <Honor num={300} msg={"Total Staffs"} img={staffImg} />
      </div>
    </div>
  );
};

export default Service;
