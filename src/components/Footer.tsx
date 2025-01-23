import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="pb-3 pt-5 px-[5%] flex flex-col gap-3 z-[5] relative bg-gray-900 text-white">
      <div className=" flex lg:flex-row flex-col  gap-3 py-5">
        <div className="lg:w-[20%] flex flex-col gap-3 lg:text-start text-center lg:jsutify-start justify-center">
          <img src="/logo_white.svg" className="w-[40%] lg:mx-0 mx-auto pb-2" alt="" />
          <p>hello@navytech.com</p>
          <p>Phone : +01 23456789</p>
        </div>
        <div className="lg:w-[20%] flex flex-col gap-3 lg:text-start text-center lg:jsutify-start justify-center">
          <h2 className="text-lg font-semibold">Qucik Links</h2>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About us</Link>
          
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="lg:w-[20%] flex flex-col gap-3 lg:text-start text-center lg:jsutify-start justify-center">
          <h2 className="text-lg font-semibold">Resources</h2>
          <Link href={"/terms"}>Privacy Policy</Link>
          <Link href={"/privacy"}>Terms & Conditions</Link>
        </div>
        <div className="lg:w-[40%] flex flex-col gap-3 lg:text-start text-center lg:jsutify-start justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1250.4757995841949!2d4.392879!3d51.183115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6cb870ceba5%3A0xcd4b04a17c6ec6bb!2sAntwerpen%20P%2BR%20Olympiade!5e0!3m2!1sen!2sru!4v1737203734652!5m2!1sen!2sru" className="w-full h-full border-xl" ></iframe>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-start gap-3 pt-4 pb-5">
        <div className="lg:w-[50%] flex items-center justify-start gap-3 ">
          <a href={"/"}>
            <Instagram />
          </a>

          <a href={"/"}>
            <Facebook />
          </a>

          <a href={"/"}>
            <Twitter />
          </a>
          <br  className="lg:hidden flex" />
          <p className="text-gray-400 ">
            © 2025 [Your Company Name]. All rights reserved.
          </p>
        </div>
        <div className="lg:w-[50%] flex items-center lg:justify-end justify-start">
            <p className="text-gray-400">
            Website Created by <a className="text-white">RV Studio </a> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
