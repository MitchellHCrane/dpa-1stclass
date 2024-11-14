import React from "react";

const Footer = () => {
  return (
    <footer className="pb-9 bg-[#004e82] w-full mt-40">
      <div className="grid max-w-[1024px] md:grid-cols-3 justify-center text-center px-0 md:px-0 md:py-16 gap-12 mx-auto">
        <div className="mt-8 md:mt-0 mx-8 md:mx-0">
          <h3 className="text-white text-lg mb-2">Contact</h3>
          <p className="text-white text-sm leading-4 m-0">
            Phone: <a href="tel:385-999-1871">(385)-999-1871</a>
          </p>
          <p className="text-white text-sm leading-4 m-0">
            Fax: (801)-303-7083
          </p>
          <p className="text-white text-sm leading-4 m-0">
            Email:{" "}
            <a href="mailto:loans@troywarner.com">loans@troywarner.com</a>
          </p>
        </div>
        <div className="mt-8 md:mt-0 mx-8 md:mx-0">
          <h3 className="text-white text-lg mb-2">License Info</h3>
          <p className="text-white text-sm leading-4 m-0">
            Troy Warner (NMLS #102983)
          </p>
          <p className="text-white text-sm leading-4 m-0">
            Regulated by State of Utah Division of Real Estate NMLS #1843
          </p>
        </div>
        <div className="mt-8 md:mt-0 mx-8 md:mx-0">
          <h3 className="text-white text-lg mb-2">Address</h3>
          <p className="text-white text-sm leading-4 m-0">
            First Class Home Mortgage
          </p>
          <p className="text-white text-sm leading-4 m-0">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              10808 River Front Parkway, Suite #3035,
              <br /> South Jordan, UT 84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
