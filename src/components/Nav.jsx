import React, { useLayoutEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import videoback from "../assets/video/glassy.mp4";
import useMagnetic from "../Hooks/useMagnetic";
import { Link } from "react-router-dom";

function Nav() {
  const nav2 = useRef(null);
  const [navstate, setNavstate] = useState(true);
  const boxRef = useRef(null);
  const btnRef = useRef(null);
  const box2Ref = useRef(null);
  const navmagbtnref = useRef(null);

  useMagnetic(btnRef, 0.5, navstate);
  useMagnetic(navmagbtnref, 0.5, navstate);

  const handleClick = () => {
    setNavstate((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (!boxRef.current) return;

    // Detect mobile screen
    const isMobile = window.innerWidth < 768;

    if (!navstate) {
      // OPEN MENU
      gsap.to(boxRef.current, {
        width: isMobile ? "90vw" : "65vw", // Fills more screen on mobile
        height: isMobile ? "80vh" : "90vh",
        duration: 0.5,
        ease: "power3.out",
      });

      if (box2Ref.current) {
        gsap.fromTo(
          box2Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 0.2 },
        );
      }
    } else {
      // CLOSE MENU
      if (box2Ref.current) {
        gsap.to(box2Ref.current, {
          opacity: 0,
          duration: 0.2,
        });
      }

      gsap.to(boxRef.current, {
        width: "50px",
        height: "50px",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [navstate]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(nav2.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: document.body,
        start: "200px 100px",
        end: "200px 100px",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <>
      {/* FLOATING RESPONSIVE NAV */}
      <div
        ref={nav2}
        className="nav px-4 md:px-6 py-4 flex opacity-0 items-end justify-end fixed w-full z-50"
      >
        <div
          ref={btnRef}
          className="nav-items bg-zinc-900 rounded-2xl border border-zinc-500 overflow-hidden"
        >
          <div
            className="size-12 rounded-2xl flex items-center justify-center relative"
            ref={boxRef}
          >
            <i
              onClick={handleClick}
              className={
                navstate
                  ? "bi bi-list text-white text-3xl absolute right-2.5 top-1.5 cursor-pointer z-50"
                  : "bi bi-x text-white text-3xl absolute right-2.5 top-2.5 cursor-pointer z-50"
              }
            ></i>
            {!navstate && (
              <div
                className="side-menu flex flex-col md:flex-row justify-between w-full h-full p-6 md:p-10 overflow-y-auto"
                ref={box2Ref}
              >
                {/* Links: Stacks on mobile (flex-col), Rows on desktop (md:flex-row) */}
                <div className="flex flex-col text-white text-4xl md:text-5xl gap-4 md:gap-5 font-bold uppercase justify-center mt-12 md:mt-0">
                  <Link to="/" className="nav-wave-link">
                    <span>
                      <i>H</i>
                      <i>H</i>
                    </span>
                    <span>
                      <i>O</i>
                      <i>O</i>
                    </span>
                    <span>
                      <i>M</i>
                      <i>M</i>
                    </span>
                    <span>
                      <i>E</i>
                      <i>E</i>
                    </span>
                  </Link>
                  <Link to="/about" className="nav-wave-link">
                    <span>
                      <i>A</i>
                      <i>A</i>
                    </span>
                    <span>
                      <i>B</i>
                      <i>B</i>
                    </span>
                    <span>
                      <i>O</i>
                      <i>O</i>
                    </span>
                    <span>
                      <i>U</i>
                      <i>U</i>
                    </span>
                    <span>
                      <i>T</i>
                      <i>T</i>
                    </span>
                  </Link>
                  <Link to="/work" className="nav-wave-link">
                    <span>
                      <i>W</i>
                      <i>W</i>
                    </span>
                    <span>
                      <i>O</i>
                      <i>O</i>
                    </span>
                    <span>
                      <i>R</i>
                      <i>R</i>
                    </span>
                    <span>
                      <i>K</i>
                      <i>K</i>
                    </span>
                  </Link>
                  <Link to="/contact" className="nav-wave-link">
                    <span>
                      <i>C</i>
                      <i>C</i>
                    </span>
                    <span>
                      <i>O</i>
                      <i>O</i>
                    </span>
                    <span>
                      <i>N</i>
                      <i>N</i>
                    </span>
                    <span>
                      <i>T</i>
                      <i>T</i>
                    </span>
                    <span>
                      <i>A</i>
                      <i>A</i>
                    </span>
                    <span>
                      <i>C</i>
                      <i>C</i>
                    </span>
                    <span>
                      <i>T</i>
                      <i>T</i>
                    </span>
                  </Link>
                </div>

                <div className="flex flex-col text-white text-md gap-5 justify-center items-start md:items-end mt-10 md:mt-0">
                  <div className="text-part-menu text-left md:text-right">
                    🙌Hi, Nice to see you!
                    <p className="text-sm opacity-70">
                      I'm Abhisek Chowdhury, Full Stack Developer <br />
                      Based in Kolkata
                    </p>
                  </div>
                  <div className="video-container rounded-3xl w-full md:w-1/2 overflow-hidden shadow-xl">
                    <video
                      src={videoback}
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TOP HEADER NAV (Desktop style) */}
      <div className="nav-1 flex items-center justify-between px-6 md:px-10 py-8 z-60 relative">
        <div className="logo">
          <h1 className="h1 text-2xl font-bold">
            Abhisek<span className="text-blue-500 text-4xl">.</span>
          </h1>
        </div>

        {/* We hide the text links on mobile (hidden) and show them on desktop (md:flex) */}
        <div className="nav-items hidden md:block">
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <Link to="/" className="nav-wave-link">
                <span>
                  <i>H</i>
                  <i>H</i>
                </span>
                <span>
                  <i>o</i>
                  <i>o</i>
                </span>
                <span>
                  <i>m</i>
                  <i>m</i>
                </span>
                <span>
                  <i>e</i>
                  <i>e</i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-wave-link">
                <span>
                  <i>A</i>
                  <i>A</i>
                </span>
                <span>
                  <i>b</i>
                  <i>b</i>
                </span>
                <span>
                  <i>o</i>
                  <i>o</i>
                </span>
                <span>
                  <i>u</i>
                  <i>u</i>
                </span>
                <span>
                  <i>t</i>
                  <i>t</i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/work" className="nav-wave-link">
                <span>
                  <i>W</i>
                  <i>W</i>
                </span>
                <span>
                  <i>o</i>
                  <i>o</i>
                </span>
                <span>
                  <i>r</i>
                  <i>r</i>
                </span>
                <span>
                  <i>k</i>
                  <i>k</i>
                </span>
              </Link>
            </li>
            <li>
              <span className="flex align-center">
                <Link
                  to="/contact"
                  className="nav-wave-link py-2 px-6 bg-black text-white rounded-4xl"
                >
                  <span>
                    <i>C</i>

                    <i>C</i>
                  </span>

                  <span>
                    <i>o</i>

                    <i>o</i>
                  </span>

                  <span>
                    <i>n</i>

                    <i>n</i>
                  </span>

                  <span>
                    <i>t</i>

                    <i>t</i>
                  </span>

                  <span>
                    <i>a</i>

                    <i>a</i>
                  </span>

                  <span>
                    <i>c</i>

                    <i>c</i>
                  </span>

                  <span>
                    <i>t</i>

                    <i>t</i>
                  </span>
                </Link>

                <button className="py-0 px-5 bg-black text-white rounded-full">
                  <i class="bi bi-arrow-up-right"></i>
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
