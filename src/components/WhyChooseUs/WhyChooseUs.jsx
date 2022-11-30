import React from "react";
import img from "../../assets/images/laptop.jpg";

const WhyChooseUs = () => {
  return (
    <div className="m-5 ">
      <div className="my-5 shadow-lg p-3 mb-5 bg-body rounded container border border-dark rounded-3 p-2 d-lg-flex justify-content-center align-items-center">
        <img className="w-25 d-none d-lg-block" src={img} alt="" />

        <div className="text-start ms-4 fs-3">
          <h1 className="text-start mb-3">
            {" "}
            Why Choose <br />
            <span className="text-primary">SellMe Laptop ?</span>{" "}
          </h1>
          <p>
            Do you need to sell your used, old or broken laptop ? and don't you
            want to use money from selling your laptop to purchase of new one?
            If the answers is yes, then SellMeLaptop is here to help you.
          </p>
          <p>
            After all selling your broken laptop can definitely save you some
            money. Some additional dollars to purchase the top of the line model
            of one of those newer laptops from some reputable retail store
            online, to be able meet your technical needs, requirements and
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
