import React, { useState } from "react";
import { FaPhone, FaGlobe, FaShareAlt, FaWhatsapp } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { LuQrCode } from "react-icons/lu";
import qr from '../assets/qr.png';
import segun from '../assets/SEGUN-BG.png';

const BusinessCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Business Card",
          text: "Check out this business card!",
          url: "https://bus-card-web-wynn.vercel.app/",
        });
        console.log("Content shared successfully!");
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };
  return (
    <>
      {/* Business Card */}
      <div className="md:w-[100%]  font-sans w-full relative sm:w-[80%] max-w-[500px] z-40 bg-white text-black rounded-3xl shadow-lg overflow-hidden md:py-6  p-4  flex flex-col items-center justify-center">
        {/* Header */}
        <div className="absolute top-6 right-6 flex gap-6 ">
        <FaShareAlt
        className="text-green-400 mx-auto text-xl cursor-pointer"
        onClick={handleShare}
      />
                <LuQrCode
            className="text-stone-800 mx-auto text-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className="text-center w-full px-6">
          <img
            src={segun}
            alt="Profile"
            className="w-24 h-24 z-[15000] mx-auto rounded-full border-4 object-cover object-top "
          />
          <h1 className="text-2xl font-bold mt-4">  Eyitayo L. Segun
           </h1>
          <p className="text-sm text-gray-400">Brand Strategist Senior Manager </p>
          <p className="text-sm mt-1">@ Gamaal</p>
          <p className="text-xs mt-1">Lagos, Lagos State, Nigeria </p>
        </div>

        {/* Save Contact Button */}
        <div className="mt-6 w-full px-2 ">
          <button
            className="w-full bg-green-500 hover:bg-stone-200 text-white hover:text-black transition-all font-medium py-2 rounded-xl flex items-center justify-center gap-2 duration-300 ease-in-out"
            onClick={() => {
              const vCardData = `
BEGIN:VCARD
VERSION:3.0
N: Eyitayo;Segun;;;
FN: Eyitayo Segun
ORG:Gamaal
TITLE:Brand Strategist Senior Manager
TEL;type=WORK,VOICE:+2347055829311
EMAIL;type=WORK:info@seguneyitayo.com
URL:https://seguneyitayo.com
ADR:;;Lagos, Lagos State, Nigeria;;
END:VCARD
              `;
              const blob = new Blob([vCardData], { type: "text/vcard" });
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = " Eyitayo L Segun.vcf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <BiSolidContact className="text-xl" />
            Save Contact
          </button>
        </div>
       <div className="mt-6 flex justify-center md:px-8 px-2 items-center flex-wrap md:gap-6 gap-2 text-center">
  <a
    href="tel:+2347055829311" // Replace with your office phone number
    className="w-fit h-fit bg-white/40 p-1 px-2 bg-opacity-25 rounded-full flex justify-center items-center gap-1"
  >
    <FaPhoneAlt className="text-green-400 text-xl" />
  </a>
  <a
    href="https://seguneyitayo.com/" // Replace with your website URL
    target="_blank"
    rel="noopener noreferrer"
    className="w-fit h-fit bg-white/40 p-1 px-2 bg-opacity-25 rounded-full flex justify-center items-center gap-1"
  >
    <FaGlobe className="text-green-400 text-xl" />
  </a>
  <a
    href="mailto:info@seguneyitayo.com" // Replace with your email address
    className="w-fit h-fit bg-white/40 p-1 px-2 bg-opacity-25 rounded-full flex justify-center items-center gap-1"
  >
    <MdEmail className="text-green-400 text-xl" />
  </a>
  <a
    href="https://g.co/kgs/T4wkBzv" // Replace with your location URL
    target="_blank"
    rel="noopener noreferrer"
    className="w-fit h-fit bg-white/40 p-1 px-2 bg-opacity-25 rounded-full flex justify-center items-center gap-1"
  >
    <FaLocationDot className="text-green-400 text-xl" />
  </a>
  <a
    href="https://wa.me/+2347055829311" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="w-fit h-fit bg-white/40 p-1 px-2 bg-opacity-25 rounded-full flex justify-center items-center gap-1"
  >
    <FaWhatsapp className="text-green-400 text-xl" />
  </a>
</div>




      </div>

      {/* Modal */}
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75 transition-all ease-in-out duration-1000  ${
          isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[90%] sm:w-[400px] h-full flex justify-center items-center max-w-[400px] bg-white text-black rounded-3xl shadow-lg overflow-hidden p-6 relative transform transition-transform duration-300 ${
            isModalOpen ? "scale-100" : "scale-50"
          }`}
        >
          <button
            className="absolute top-6  p-4 hover:text-red-500 transition-transform duration-300 right-6 text-black rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
          <div className="text-center">
  <img
    src={qr}
    alt="QR Code"
    className="w-24 h-24 mx-auto rounded-lg border-4 object-cover object-center border-green-500"
  />
  <p className="mt-4 text-sm text-gray-400">
    📱 Scan this QR code to connect!
  </p>
</div>

        </div>
      </div>
    </>
  );
};

export default BusinessCard;
