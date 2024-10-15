"use client";
import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import { FaArrowRight } from "react-icons/fa6";
import menuAnimation from "../public/menu/menuV2.json"; // Adjust this path to your folder structure

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setScroll] = useState(false);
  const lottieRef = useRef(null); // Reference for Lottie animation

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);

    // Toggle animation between hamburger and cross with increased speed
    if (showMenu) {
      lottieRef.current.setSpeed(2); // Increase speed to 3x (you can adjust this)
      lottieRef.current.playSegments([40, 0], true);
    } else {
      lottieRef.current.setSpeed(2); // Increase speed to 3x
      lottieRef.current.playSegments([0, 40], true);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed z-40 top-0 left-0 w-full py-3 flex items-center justify-between px-20 text-white ${
          showMenu ? "" : "mix-blend-difference"
        }`}
      >
        <a
          href="#"
          className="uppercase w-72 block text-[0.8rem] pt-2 font-semibold tracking-widest"
        >
          Wright&apos;s Harbor Mansion
        </a>
        <a href="#" className="me-5">
          <svg
            width="45"
            height="45"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M25.5403 24.0682H21.0833V16.7002H25.5403V24.0682ZM30.3238 30.3565H34.7808V37.7244H30.3238V30.3565ZM30.3238 16.7002H34.7808V24.0682H30.3238V16.7002ZM36.9903 30.3565H41.4473V37.7244H36.9903V30.3565ZM36.9903 16.7002H41.4473V24.0682H36.9903V16.7002ZM16.2834 24.0682H11.8264V16.7002H16.2834V24.0682ZM16.2834 37.7244H11.8264V30.3565H16.2834V37.7244ZM9.67139 24.0682H5.21439V16.7002H9.67139V24.0682ZM9.67139 37.7244H5.21439V30.3565H9.67139V37.7244ZM0.828125 17.5086V45.6838C0.828125 45.6838 18.7759 45.7109 19.7337 45.7109V30.3456C19.7337 28.0777 21.5241 26.7159 23.641 26.7159C25.758 26.7159 27.5484 28.1157 27.5484 30.3456V45.6838H45.8281V16.8575L22.8955 0.710938L0.828125 17.5086Z"
                fill="white"
              ></path>
            </g>
          </svg>
        </a>
        <button
          className={`z-20 flex gap-3 uppercase items-center ms-40 text-sm mt-1`}
          onClick={handleToggleMenu}
        >
          Menu
          {/* Lottie animation for the menu */}
          <div className="border-2 rounded-full p-[0.1rem]">
            <Lottie
              className="invert"
              lottieRef={lottieRef} // Reference to control the animation
              animationData={menuAnimation}
              loop={false}
              autoplay={false} // Ensure it doesn't auto-play
              initialSegment={[0, 40]} // Start with hamburger menu
              style={{ width: 40, height: 40 }}
            />
          </div>
        </button>
      </nav>
      <div
        className={`fixed z-10 top-0 right-0 w-full h-full duration-700 flex ${
          showMenu ? "bg-black/70 backdrop-blur-md" : "pointer-events-none"
        }`}
      >
        <button
          onClick={handleToggleMenu}
          className="flex-grow h-full cursor-default"
        ></button>
        <div
          className={`p-20 flex flex-col max-w-[50rem] font-lora ms-auto w-full justify-center h-screen text-white bg-[#6a7870] duration-500 ease-out ${
            showMenu ? "" : "translate-x-full"
          }`}
        >
          <a
            href="/home"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">01</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            Home
          </a>
          <a
            href="/about"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">02</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            About
          </a>
          <a
            href="/menu"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">03</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            History
          </a>
          <a
            href="#"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">04</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            LSvHF Collection
          </a>
          <a
            href="/blog"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">05</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            Virtual Tour
          </a>
          <a
            href="/contact"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">06</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            Plan a Visit
          </a>
          <a
            href="/contact"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">07</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            Book Shop
          </a>
          <a
            href="/contact"
            className="text-5xl me-auto uppercase group flex gap-2 hover:text-[#dcf263] duration-100 py-1 items-center"
          >
            <span className="font-sans font-normal text-sm -mt-3 pe-4">08</span>
            <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
