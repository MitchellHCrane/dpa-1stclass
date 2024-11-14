import React from "react";
import logo from "../../../public/fcLogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#004e82] h-20 flex justify-center mx-auto">
      <Image
        src={logo}
        alt="First Class Home Mortgage Logo"
        className="w-fit"
      />
    </nav>
  );
};

export default Navbar;
