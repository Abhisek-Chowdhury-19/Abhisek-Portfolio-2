import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const marqueeText =
    "Full Stack Developer • DEVELOPER • Web Designer • Custom Web Experiences • ";
  return (
    <>
      <div className="super py-20 sm:py-28 lg:py-32 min-h-[60vh] lg:h-screen flex flex-col justify-center overflow-hidden">
        <div className="infinite-marquee-container relative">
          {/* Bar 1 */}
          <div
            className="
      absolute 
      top-0 left-1/2 
      -translate-x-1/2 
      w-[140%] sm:w-[130%] lg:w-[120%]
      rotate-3 sm:rotate-4
    "
          >
            <div
              className="
        animate-marquee 
        whitespace-nowrap 
        py-3
        bg-zinc-900 
        text-white 
        text-3xl sm:text-5xl lg:text-6xl 
        font-bold 
        uppercase 
        tracking-tight
      "
            >
              <span>{marqueeText.repeat(10)}</span>
              <span>{marqueeText.repeat(10)}</span>
            </div>
          </div>

          {/* Bar 2 */}
          <div
            className="
      absolute 
      top-0 left-1/2 
      -translate-x-1/2 
      w-[140%] sm:w-[130%] lg:w-[120%]
      -rotate-3 sm:-rotate-6
    "
          >
            <div
              className="
        animate-marquee-reverse 
        whitespace-nowrap 
        py-3
        bg-zinc-900 
        text-orange-500 
        text-3xl sm:text-5xl lg:text-6xl 
        font-bold 
        uppercase 
        tracking-tight
      "
            >
              <span>{marqueeText.repeat(10)}</span>
              <span>{marqueeText.repeat(10)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bg-zinc-800 px-6 sm:px-10 lg:px-24 py-16 relative overflow-hidden">
        <div className="footer-top-curve"></div>

        {/* Main Content */}
        <div className="foot-menu flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row flex-wrap w-full lg:w-1/2 gap-10">
            {/* Links */}
            <div className="text-white flex flex-col gap-3 w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-sm mb-2 text-gray-400 tracking-wide">
                LINKS
              </h2>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Social */}
            <div className="text-white flex flex-col gap-3 w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-sm mb-2 text-gray-400 tracking-wide">
                SOCIAL
              </h2>
              <a
                href="https://www.linkedin.com/in/abhisek-chowdhury-294775210"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Abhisek-Chowdhury-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://wa.me/917044982148"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>

            {/* Local Time */}
            <div className="text-white flex flex-col gap-3 w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-sm mb-2 text-gray-400 tracking-wide">
                LOCAL TIME
              </h2>
              <p>IST +5:30</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row w-full lg:w-1/2 gap-8 justify-start lg:justify-end">
            {/* Email */}
            <div className="text-white">
              <button
                onClick={() =>
                  window.open("mailto:abhisekchowdhury7044@gmail.com")
                }
                className="p-3 border rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition-all"
              >
                abhisekchowdhury7044@gmail.com
              </button>
            </div>

            {/* Phone */}
            <div className="text-white">
              <button
                onClick={() => window.open("tel:7044982148")}
                className="p-3 border rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition-all"
              >
                7044982148
              </button>
            </div>
          </div>
        </div>

        {/* Background Name */}
        <div
          className="
    footer-hero-text 
    text-[18vw] sm:text-[14vw] lg:text-[12vw] 
    text-white 
    font-light 
    absolute 
    bottom-0 
    left-0 
    w-full 
    leading-none 
    tracking-widest 
    opacity-10
    pointer-events-none
  "
        >
          ABHISEK
        </div>
      </div>
    </>
  );
}

export default Footer;
