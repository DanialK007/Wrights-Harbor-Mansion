"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroImg2Ref = useRef(null);
  const img1Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img6Ref = useRef(null);
  const img7Ref = useRef(null);
  const img8Ref = useRef(null);
  const img9Ref = useRef(null);
  const letterRef = useRef(null);
  const letter2Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const sectionWidthTotal = 14000;
    const totalWidth = 11900;

    // Helper function for GSAP animations
    const animateElement = (ref, from, to, startValue, endValue) => {
      gsap.fromTo(ref.current, from, {
        ...to,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `${startValue}px top`,
          end: `${endValue}px top`,
          scrub: 0.5,
        },
      });
    };

    // Pin and horizontal scroll effect
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${totalWidth}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${totalWidth}px top`,
          scrub: 1.2,
          pin: true,
        },
      }
    );

    // Zoom effect for the hero image
    animateElement(heroImgRef, { scale: 1.8 }, { scale: 1 }, 0, 3000);
    animateElement(heroImg2Ref, { scale: 1.8 }, { scale: 1 }, 6000, 9000);

    // Move room1 image horizontally
    animateElement(img1Ref, { x: 200 }, { x: 0 }, 500, 4000);
    animateElement(img3Ref, { x: -180 }, { x: 150 }, 1000, totalWidth + 1000);
    animateElement(img4Ref, { x: 250 }, { x: -250 }, 2000, totalWidth);
    animateElement(img6Ref, { x: 100 }, { x: -320 }, 5000, totalWidth);
    animateElement(img7Ref, { x: 100 }, { x: -320 }, 6000, totalWidth + 2000);
    animateElement(img8Ref, { x: -100 }, { x: 120 }, 6000, totalWidth + 2000);
    animateElement(img9Ref, { x: 0 }, { x: -300 }, 8000, totalWidth + 2000);

    // Move letter image horizontally
    animateElement(letterRef, { x: -100 }, { x: 300 }, 1000, 3000);
    animateElement(letter2Ref, { x: -300 }, { x: 100 }, 500, totalWidth + 1000);

    // gsap.fromTo(
    //   img6Ref.current,
    //   { x: 200 },
    //   {
    //     x: -200,
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       start: "6000 top",
    //       end: `${totalWidth + 1000}px top`, // End point for the fade-in effect
    //       scrub: 0.5, // Smooth out the fade-in effect
    //       markers: true
    //     },
    //   }
    // );

    // Move room3 and room4 images horizontally
    // [img3Ref, img4Ref].forEach((ref) =>
    //   animateElement(ref, { x: -250 }, { x: 50 }, 0, totalWidth + 1000)
    // );

    return () => {
      pin.kill(); // Clean up on component unmount
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />

      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-fit">
          {/* First Section */}
          <div className="h-screen w-[950px] flex flex-col justify-center items-center bg-[#3e503a] text-white">
            <div className="pe-44 pt-5">
              <div className="text-[5rem] leading-[1] uppercase text-[#dcf263] font-lora">
                {/* Title */}
                <div className="ps-8">
                  <span>D</span>
                  <span>i</span>
                  <span>s</span>
                  <span className="relative">
                    c
                    <span className="absolute top-0 left-0 w-full h-full scale-50 pt-2 ps-1">
                      o
                    </span>
                  </span>
                  <span>v</span>
                  <span>e</span>
                  <span>r</span>
                </div>
                <div className="ps-44">18th</div>
                <div className="">Century</div>
                <div className="">
                  <span className="relative pe-6">
                    r
                    <span className="absolute top-0 left-7 w-full h-full scale-75 pt-1">
                      u
                    </span>
                  </span>
                  <span className="relative pe-6">
                    r
                    <span className="absolute top-0 left-7 w-full h-full scale-75 pt-1 ps-2">
                      a
                    </span>
                  </span>
                  <span>l </span>
                  <span className="relative pe-2">
                    l
                    <span className="absolute top-0 left-5 w-full h-full scale-[0.7]">
                      i
                    </span>
                  </span>
                  <span>f</span>
                  <span>e</span>
                </div>
                <div className="">in penn.</div>
              </div>

              {/* Description */}
              <div className="max-w-xl py-8 text-white/50 text-lg">
                A historic house museum, the 1738 Wright&apos;s Harbor Mansion
                celebrates important examples of pre-1750 fine art, decorative
                arts, and architecture, as well as a multi-generational
                narrative reflective of Columbia, Pennsylvania, and its
                surrounding region.
              </div>

              {/* Learn More Button */}
              <button className="flex gap-5 group uppercase text-sm font-semibold items-center me-auto hover:tracking-widest duration-300">
                Learn more
                <div className="size-10 rounded-full border-2 border-[#dcf263] flex items-center justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:text-[#3e503a]">
                    <FaArrowRight />
                  </div>
                  <div className="size-0 group-hover:size-full duration-100 bg-[#dcf263] rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="h-screen w-[1300px] flex justify-center items-center overflow-hidden">
            <Image
              width={1000}
              height={1000}
              objectFit="cover"
              ref={heroImgRef}
              src="/img/hero.png"
              alt=""
              className="w-full h-full object-cover scale-[1.8]"
            />
          </div>

          {/* Images */}
          <div className="h-screen w-[700px] flex justify-center items-center relative bg-[#dcf263]">
            {/* img1 */}
            <Image
              width={1000}
              height={1000}
              objectFit="cover"
              ref={img1Ref}
              src="/img/img1.png"
              alt=""
              className="z-20 h-[500px]"
            />

            <div className="absolute top-1/2 -translate-y-1/2 h-[560px] z-10 -right-20">
              <div className="h-1/2 w-full bg-[#aa4935]"></div>
              <Image
                width={500}
                height={500}
                objectFit="cover"
                src="/img/img2.png"
                alt=""
                className="h-1/2"
              />
            </div>

            {/* letter */}
            <div ref={letterRef} className="absolute -top-12 z-10 -right-40">
              <Image
                width={500}
                height={500}
                objectFit="cover"
                src="/img/letter.png"
                alt=""
                className="h-40"
              />
            </div>
          </div>

          <div className="h-screen w-[1600px] bg-[#eeece8a1] text-[#333] flex flex-col justify-center items-center relative">
            <Image
              width={1000}
              height={1000}
              objectFit="cover"
              ref={img3Ref}
              src="/img/img3.png"
              alt=""
              className="absolute z-10 top-1/2 -translate-y-1/2 left-64 h-[200px] w-[260px] object-cover"
            />
            <Image
              width={1000}
              height={1000}
              objectFit="cover"
              ref={img4Ref}
              src="/img/img4.png"
              alt=""
              className="absolute z-20 top-1/2 -translate-y-1/2 -right-28 h-[480px] w-[600px] object-cover"
            />
            <div ref={letter2Ref} className="absolute -bottom-8 z-10 right-32">
              <Image
                width={500}
                height={500}
                objectFit="cover"
                src="/img/letter2.png"
                alt=""
                className="h-56"
              />
            </div>

            <div className="text-[#52870b] text-xs font-bold pb-5 uppercase">
              The mansion
            </div>
            <div className="font-lora text-7xl leading-[1] uppercase">
              Timeless
            </div>
            <div className="font-lora text-7xl leading-[1] uppercase">
              Susquehanna
            </div>
            <div className="max-w-lg">
              <div className="py-5 text-black/50 text-[1.1rem]">
                Wright&apos;s Harbor Mansion has been restored by the Louise
                Steinman von Hess Foundation with great care to accurately
                represent the period of 1700-1750, when its builder, Susanna
                Wright — known as “the blue stocking of the Susquehanna”,
                engaged in intellectual discourse with some of the most
                inventive and influential minds of 18th century Philadelphia and
                beyond.
              </div>
              {/* Learn More Button */}
              <button className="flex gap-5 group uppercase text-sm font-semibold items-center hover:tracking-widest duration-300">
                About the mansion
                <div className="size-10 rounded-full border-2 border-black flex items-center justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:text-white">
                    <FaArrowRight />
                  </div>
                  <div className="size-0 group-hover:size-full duration-100 bg-black rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="">
            <Image
              width={300}
              height={1000}
              objectFit="cover"
              src="/img/green.png"
              alt=""
              className="h-full"
            />
          </div>

          <div className="h-screen w-[1600px] bg-[#eeece8a1] text-[#333] grid grid-cols-11">
            <div className="col-span-5 flex flex-col justify-center items-center">
              <div className="text-[#aa4935] text-xs font-bold pb-5 uppercase">
                Preview the Collection of
              </div>
              <div className="font-lora text-7xl leading-[1] uppercase">
                the Louise
              </div>
              <div className="font-lora text-7xl leading-[1] uppercase">
                Steinman
              </div>
              <div className="font-lora text-7xl leading-[1] uppercase">
                Von Hess
              </div>
              <div className="font-lora text-7xl leading-[1] uppercase">
                Foundation
              </div>
              <div className="max-w-lg">
                <div className="py-5 text-black/50 text-[1.1rem]">
                  The well-researched collection, of rare fine and decorative
                  arts representing American Colonial life for the period of
                  1700 to 1750 is recognized as one of the most authentic and
                  complete in the Nation.
                </div>
                {/* Learn More Button */}
                <button className="flex gap-5 group uppercase text-sm font-semibold items-center hover:tracking-widest duration-300">
                  About the mansion
                  <div className="size-10 rounded-full border-2 border-black flex items-center justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:text-white">
                      <FaArrowRight />
                    </div>
                    <div className="size-0 group-hover:size-full duration-100 bg-black rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-span-6 flex flex-col justify-center font-lora pt-10 pe-20">
              <a
                href="/home"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  01
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                All Items
              </a>
              <a
                href="/about"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  02
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Fine Art
              </a>
              <a
                href="/menu"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  03
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Cabinet Work
              </a>
              <a
                href="#"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  04
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Seating
              </a>
              <a
                href="/blog"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  05
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Ceramics
              </a>
              <a
                href="/contact"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  06
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Glass
              </a>
              <a
                href="/contact"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  07
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Metalwork
              </a>
              <a
                href="/contact"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  08
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Textiles
              </a>
              <a
                href="/contact"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  09
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Published Works
              </a>
              <a
                href="/contact"
                className="text-5xl uppercase group flex gap-2 hover:text-[#aa4935] py-2 border-b border-black w-full duration-100 items-center"
              >
                <span className="font-sans font-normal text-sm -mt-3 pe-4">
                  10
                </span>
                <FaArrowRight className="group-hover:size-10 size-0 duration-300" />
                Ephemera
              </a>
            </div>
          </div>

          <div className="h-screen w-[1100px] bg-[#aa4935] text-white pe-48 flex flex-col justify-center items-center">
            <div className="text-xs font-bold pb-5 uppercase">
              Mansion History
            </div>
            <div className="font-lora text-[5.2rem] leading-[1] uppercase flex">
              <span className="text-8xl leading-[5.2rem] block -mt-3 me-4">
                300
              </span>{" "}
              Years of
            </div>
            <div className="font-lora text-7xl leading-[1] uppercase">
              History
            </div>
            <div className="max-w-md">
              <div className="py-5 text-white/50 text-[1.1rem]">
                Largely unaltered from its original construction, Wright&apos;s
                Harbor Mansion was acquired in 1973 by Richard C. and Louise
                Steinman von Hess, both of whom demonstrated life-long
                commitments to historic preservation and art connoisseurship.
                Together, they began a long and most thoughtful restoration of
                this unique example of Pennsylvania Colonial architecture.
              </div>
              {/* Learn More Button */}
              <button className="flex gap-5 group uppercase text-sm font-semibold items-center hover:tracking-widest duration-300">
                About the mansion
                <div className="size-10 rounded-full border-2 border-white flex items-center justify-center relative">
                  <div className="absolute top-0 left-0 group-hover:text-black w-full h-full flex items-center justify-center">
                    <FaArrowRight />
                  </div>
                  <div className="size-0 group-hover:size-full duration-100 bg-white rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="h-screen w-[1400px] relative bg-[#6a1606] grid grid-cols-2">
            <Image
              width={1000}
              height={1000}
              objectFit="cover"
              ref={img6Ref}
              src="/img/img6.png"
              alt=""
              className="absolute z-20 bottom-32 -left-40 h-[480px] w-[700px] object-cover"
            />

            <div className="">
              <Image
                width={500}
                height={500}
                objectFit="cover"
                src="/img/img5.png"
                alt=""
                className="h-1/2 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                width={500}
                height={500}
                objectFit="cover"
                ref={heroImg2Ref}
                src="/img/hero2.png"
                alt=""
                className="w-full h-full object-cover scale-[1.7]"
              />
            </div>
          </div>

          <div className="h-screen w-[1280px] bg-[#eeece8a1] text-[#333] ps-48 flex flex-col justify-center items-center relative">
            <Image
              width={380}
              height={250}
              objectFit="cover"
              ref={img7Ref}
              src="/img/img7.png"
              alt=""
              className="z-20 object-cover absolute left-10 top-32"
            />

            <Image
              width={180}
              height={210}
              objectFit="cover"
              ref={img8Ref}
              src="/img/img8.png"
              alt=""
              className="z-10 object-cover absolute left-20 top-[400px]"
            />

            <Image
              width={240}
              height={140}
              objectFit="cover"
              ref={img9Ref}
              src="/img/img9.png"
              alt=""
              className="z-20 absolute -right-40 bottom-20"
            />

            <div className="text-[0.8rem] font-bold pb-5 uppercase text-[#ff6320] tracking-wider">
              Virtual Tour
            </div>
            <div className="font-lora text-[5.2rem] leading-[1] uppercase flex">
              Explore <span className="lowercase italic ps-5">the</span>
            </div>
            <div className="font-lora text-7xl leading-[1] uppercase">
              Mansion
            </div>
            <div className="max-w-lg">
              <div className="py-5 text-black/50 text-[1.1rem]">
                Explore Wright&apos;s Harbor Mansion while online with our
                interactive virtual tour experience. Guided by the late Joseph
                Keller Kindig, III, an internationally recognized authority on
                American decorative arts and design, as well as both an advisor
                to the von Hesses regarding the furnishing of Wright&apos;s
                Harbor Mansion and a one-time board member of the Louise
                Steinman von Hess Foundation. Our virtual tours of individual
                rooms provide comprehensive and immersive looks at the daily
                life of 18th-century Susanna Wright.
              </div>
              {/* Learn More Button */}
              <button className="flex gap-5 group uppercase text-sm font-semibold items-center hover:tracking-widest duration-300">
                Explore the mansion
                <div className="size-10 rounded-full border-2 border-black flex items-center justify-center relative">
                  <div className="absolute top-0 left-0 group-hover:text-white w-full h-full flex items-center justify-center">
                    <FaArrowRight />
                  </div>
                  <div className="size-0 group-hover:size-full duration-100 bg-black rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="h-screen w-[1480px]">
            <video
              src="/img/video.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="h-screen w-[1880px] grid grid-cols-2 bg-[#eeece8a1] text-[#333] pe-28">
            <div className="p-20 pe-0">
              <div className="h-full w-full relative">
                <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col p-20 justify-end">
                  <div className="text-[0.8rem] font-bold pb-5 uppercase tracking-wider">
                    Schedule your visit
                  </div>
                  <div className="text-5xl font-lora leading-[1] uppercase flex">
                    Want to visit
                  </div>
                  <div className="text-5xl font-lora leading-[1] uppercase flex">
                    Wright&apos;s HARBOUR
                  </div>
                  <div className="text-5xl font-lora leading-[1] uppercase">
                    mansion?
                  </div>
                  <div className="pt-5">
                    {/* Learn More Button */}
                    <button className="flex gap-5 group uppercase text-sm font-semibold items-center hover:tracking-widest duration-300">
                      Here&apos;s how
                      <div className="size-10 rounded-full border-2 border-white flex items-center justify-center relative">
                        <div className="absolute top-0 left-0 group-hover:text-black w-full h-full flex items-center justify-center">
                          <FaArrowRight />
                        </div>
                        <div className="size-0 group-hover:size-full duration-100 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                </div>
                <Image
                  width={500}
                  height={500}
                  objectFit="cover"
                  src="/img/img10.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-20 flex flex-col justify-between">
              <div className="border-y-2 mt-2 space-y-4 divide-y-2 divide-neutral-300 border-neutral-300">
                <div className="grid p-2 grid-cols-11">
                  <div className="col-span-4 uppercase font-semibold text-sm">
                    Address
                  </div>
                  <div className="col-span-7 pt-2 text-[3.4rem] leading-[1] font-thin font-lora">
                    <div className="">38 S 2nd St</div>
                    <div className="">P.O. Box 68</div>
                    <div className="">Columbia, PA 17512</div>
                  </div>
                </div>
                <div className="grid p-2 grid-cols-11">
                  <div className="col-span-4 uppercase font-semibold text-sm">
                    Phone
                  </div>
                  <div className="col-span-7 pt-2 text-[3.4rem] leading-[1] font-thin font-lora">
                    +1 (717) 684-4325
                  </div>
                </div>
                <div className="grid p-2 grid-cols-11">
                  <div className="col-span-4 uppercase font-semibold text-sm">
                    Tours
                  </div>
                  <div className="col-span-7 pt-2 text-[3.4rem] leading-[1] font-thin font-lora">
                    Schedule a Tour
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-11 text-neutral-500 text-[0.95rem] pt-5">
                <div className="col-span-4 grid grid-cols-2 items-end">
                  <div className="flex flex-col gap-1">
                    <a href="" className="hover:text-[#aa4935]">
                      Home
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      About
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      History
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      Collection
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      Tour Policies
                    </a>
                  </div>
                  <div className="flex flex-col gap-1 pb-7">
                    <a href="" className="hover:text-[#aa4935]">
                      Virtual Tour
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      Plan a Visit
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      Book Shop
                    </a>
                    <a href="" className="hover:text-[#aa4935]">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-span-7 flex flex-col items-end gap-8 px-5">
                  <Image
                    width={50}
                    height={50}
                    objectFit="cover"
                    src="/img/slvhf.svg"
                    alt=""
                    className="h-20"
                  />
                  <div className="">
                    Copyright 2024 Louise Steinman von Hess Foundation. All
                    rights reserved. Website by{" "}
                    <a href="" className="underline">
                      Danial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
