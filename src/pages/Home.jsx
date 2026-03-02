import React from "react";
import Nav from "../components/Nav";
import heroVideo from "../assets/video/glassy.mp4";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextSplitter from "../components/text/TextSplitter.jsx";
import pimage from "../assets/images/me.jpeg";
import workimg1 from "../assets/images/work/ikbf.png";
import workimg2 from "../assets/images/work/aajkaal.png";
import workimg3 from "../assets/images/work/thesoumi.png";
import workimg4 from "../assets/images/work/technoglobalhospital.png";
import Footer from "../components/Footer.jsx";
import useMagnetic from "../Hooks/useMagnetic.jsx";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const pathRef = useRef(null);
  const textAnimationRef = useRef(null);
  const textAnimationRef2 = useRef(null);
  const marqueeRef = useRef(null);
  const scalerRef = useRef(null);
  const scalerRef2 = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const timelineRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const animate = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(marqueeRef.current, {
      xPercent: xPercent,
    });

    xPercent += 0.08 * direction;
  };
  useMagnetic(button1Ref, 0.5, true);
  useMagnetic(button2Ref, 0.5, true);
  useLayoutEffect(() => {
    gsap.to(pathRef.current, {
      // clipPath: "ellipse(21% 100% at 50% 100%)",
      borderRadius: "50% 50% 0 0",
      scale: 2.8,
      y: -50,
      scrollTrigger: {
        trigger: ".arch-section",
        start: "-2% 95%",
        end: "40% bottom",
        scrub: 2,
        // markers: true,
      },
      ease: "power3.out",
    });
    const chars = textAnimationRef.current.querySelectorAll("span > span");
    const chars2 = textAnimationRef2.current.querySelectorAll("span > span");
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "20% 60%",
        end: "20% 60%",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.to(chars2, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".text-part-1",
        start: "70% 60%",
        end: "70% 60%",
        scrub: 2,
        // markers: true,
      },
    });

    gsap.to(scalerRef.current, {
      scale: 1,
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".photo-text-section",
        start: "0% 80%",
        end: "50% 50%",
        scrub: 0,
        // markers: true,
      },
    });
    gsap.to(scalerRef2.current, {
      scale: 1,
      borderRadius: "0px",
      scrollTrigger: {
        trigger: scalerRef.current,
        start: "0% 80%",
        end: "70% 60%",
        scrub: 2,
        // markers: true,
      },
    });

    const section = sectionRef.current;
    const track = trackRef.current;

    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth < 1024;
    const scrollWidth = isMobile ? 0 : track.scrollWidth;

    gsap.to(track, {
      x: isMobile ? 0 : -(scrollWidth - viewportWidth * 0.9),

      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth * 0.5}`,
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.to(timelineRef.current, {
      "--progress": "100%",
      ease: "none",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top center",
      end: "bottom center",
      // markers: true,

      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor: "rgb(24 24 27)",
          color: "white",
          duration: 0.3,
        });
      },

      onLeave: () => {
        gsap.to(document.body, {
          backgroundColor: "rgb(231, 231, 231)",
          color: "black",
          duration: 0.3,
        });
      },

      onEnterBack: () => {
        gsap.to(document.body, {
          backgroundColor: "rgb(24 24 27)",
          color: "white",
          duration: 0.3,
        });
      },

      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: "rgb(231, 231, 231)",
          color: "black",
          duration: 0.3,
        });
      },
    });
    // gsap.from(document.body, {
    //   backgroundColor: "",
    //   color: "",
    //   scrollTrigger: {
    //     trigger: timelineRef.current,
    //     start: "bottom center",
    //     end: "bottom center",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    const marquee = marqueeRef.current;

    let x = 0;
    let direction = -1;

    // width of ONE set
    const contentWidth = marquee.scrollWidth / 2;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        direction = self.direction === 1 ? -1 : 1;
      },
    });

    const setX = gsap.quickSetter(marquee, "x", "px");
    const speed = 80; // px per second (reduce if needed)

    const animate = (_, delta) => {
      x += (speed * direction * delta) / 1000;

      // seamless loop (NO BLANK SPACE)
      if (x <= -contentWidth) x += contentWidth;
      if (x >= 0) x -= contentWidth;

      setX(x);
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
      ScrollTrigger.killAll();
    };
  }, []);

  function MarqueeContent() {
    return (
      <div className="flex">
        <h1 className="text-[8vw] font-semibold text-zinc-900 uppercase  mx-10">
          Full Stack Developer
        </h1>
        <h1 className="text-[8vw] font-semibold text-zinc-900 uppercase  mx-10">
          Web Developer
        </h1>
        <h1 className="text-[8vw] font-semibold text-zinc-900 uppercase  mx-10">
          MERN Stack Developer
        </h1>
        <h1 className="text-[8vw] font-semibold text-zinc-900 uppercase  mx-10">
          LAMP Stack Developer
        </h1>
      </div>
    );
  }
  const Card = ({ number, title, description }) => {
    return (
      <div
        className="
        relative text-sec 
        w-full 
        sm:w-full 
        md:w-[450px] 
        lg:w-[480px]
        h-auto 
        md:h-[450px] 
        lg:h-[480px]
        border border-gray-400
        lg:border-r-0
        p-6 sm:p-8 md:p-10
        transition-all duration-500 
        cursor-pointer 
        overflow-hidden
        hover:bg-zinc-100/5
      "
      >
        <div className="relative flex flex-col justify-between z-10 h-full">
          {/* Top Section */}
          <div className="flex items-start justify-between mb-6">
            <span className="absolute -top-4 -right-4 text-lg md:text-2xl font-light">
              {number}
            </span>

            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-amber-300 text-black transition-all duration-500">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              >
                <path
                  d="M12 18L22 12L32 18L42 12V38L32 44L22 38L12 44V18Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12V38M32 18V44"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3
            className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
            font-bold my-3 
            w-full lg:w-[70%] 
            leading-tight
          "
          >
            {title}
          </h3>

          {/* Description */}
          <div className="pt-6 border-t border-gray-300">
            <p className="text-base sm:text-lg leading-relaxed text-sec/70">
              {description}
            </p>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-300/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div className="hero-section h-screen mt-[-109px] z-10 relative overflow-hidden">
        {/* Background Video */}
        <div className="bg-video-section absolute -z-10 h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="hero-content relative flex items-center justify-center h-full w-full">
          <div className="social-bar absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            {/* Line and Dots: opacity-0 on mobile, opacity-100 on medium screens up */}
            <div className="line w-[1px] bg-black md:h-[15vw] h-[70vw] my-8 relative opacity-0 md:opacity-100 transition-opacity duration-300">
              <div className="dot w-2 h-2 absolute top-0 left-[-3px] bg-black rounded-full"></div>
              <div className="dot w-2 h-2 absolute bottom-0 left-[-3px] bg-black rounded-full"></div>
            </div>
            <div className="social-icons flex flex-col gap-10 align-baseline text-2xl">
              <a href="https://github.com/Abhisek-Chowdhury-19">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/abhisek-chowdhury-294775210/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/+917044982148">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* 2. Center content - Text styles preserved exactly as original */}
          <div className="hero-text flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-xl">Hi! I'm Abhisek</h1>
            <h2 className="text-6xl">Full Stack Developer</h2>
            <h1 className="text-xl">Let's Build Something Amazing</h1>
          </div>

          {/* 3. Right side block hidden */}
          <div className="side-bar hidden"></div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-text absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xl">
          <p>Scroll Down</p>
        </div>
      </div>
      <div className="arch-section about-section bg-zinc-900 z-20 relative overflow-x-clip">
        {/* Arc */}
        <div className="arc-compo w-full top-0 rounded-full z-20" ref={pathRef}>
          <div
            className="arc h-[60px] sm:h-[75px] md:h-[90px] mb-6 md:mb-8 w-full bg-zinc-900 rounded-full z-20"
            style={{ clipPath: "ellipse(30% 100% at 50% 100%)" }}
          ></div>
        </div>

        <div className="about-text">
          {/* Main Heading */}
          <div
            ref={textAnimationRef}
            className="text-part-1 text-white 
                 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 
                 leading-relaxed md:leading-snug 
                 text-center 
                 pt-8 md:pt-10
                 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 
                 mx-auto px-4"
          >
            <TextSplitter
              text="I'm Abhisek Chowdhury, a Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision."
              type="word"
              style1={true}
            />
          </div>

          {/* Sub Heading */}
          <div
            ref={textAnimationRef2}
            className="text-part-2 font-light text-white
                 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl
                 text-center
                 pt-6 md:pt-10
                 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl
                 mx-auto px-4"
          >
            <TextSplitter
              text="I specialize in developing SaaS platforms, AI-driven products, and interactive web experiences using technologies like React.js, Node.js."
              type="word"
              style1={true}
            />
          </div>

          {/* Buttons */}
          <div className="view-all my-10 md:my-14 flex justify-center px-4">
            <Link to="/about" ref={button1Ref} className="flex items-center">
              <button className="py-3 md:py-4 px-5 md:px-6 bg-blue-600 text-white rounded-full text-sm md:text-base">
                About Me
              </button>
              <button className="py-3 md:py-4 px-4 md:px-5 bg-blue-600 text-white rounded-full">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </Link>
          </div>

          {/* Bottom Section */}
          <div
            className="bottom-about-small-section 
                    flex flex-col md:flex-row 
                    justify-between items-center 
                    gap-6 md:gap-0
                    py-8 md:py-10 
                    w-full md:w-2/3 
                    mx-auto px-6"
          >
            <p className="text-white text-sm font-extralight text-center">
              Scroll Down <i className="bi bi-arrow-down"></i>
            </p>

            <p className="text-white text-sm font-extralight text-center">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>

      <div className="photo-text-section">
        <section className="overflow-hidden whitespace-nowrap bg-zinc-900 border-t border-t-gray-500">
          <div
            className="scroller-image bg-white scale-100 md:scale-[0.85] lg:scale-[0.7] overflow-hidden rounded-3xl"
            ref={scalerRef}
          >
            {/* Marquee */}
            <div className="flex w-max" ref={marqueeRef}>
              <MarqueeContent />
              <MarqueeContent />
              <MarqueeContent />
              <MarqueeContent />
            </div>

            {/* Image */}
            <div className="w-full">
              <img
                src={pimage}
                ref={scalerRef2}
                className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6 md:py-8 scale-100 md:scale-[0.6] lg:scale-[0.4]"
                alt="Photo1"
              />
            </div>

            {/* Text Section */}
            <div className="text-section px-4 sm:px-8 md:px-16 lg:px-24 py-8 whitespace-normal">
              {/* Top Text Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl text-justify pb-6">
                    Driving measurable growth and engagement through thoughtful
                    design and engineering.
                  </p>
                </div>

                <div>
                  <p className="text-base md:text-lg text-justify pb-6">
                    Every product I build starts with understanding user goals
                    and translating them into intuitive, high-performance
                    experiences. From concept to launch, I focus on meaningful
                    results—boosting user engagement, retention, and overall
                    business impact.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="new-text-sub grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="px-4">
                  <p className="text-sm border-t pt-6">YEARS OF EXPERIENCE</p>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6">
                    2.8+
                  </h2>
                </div>

                <div className="px-4">
                  <p className="text-sm border-t pt-6">PROJECTS COMPLETED</p>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6">
                    30+
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        ref={sectionRef}
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 min-h-screen overflow-hidden"
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-20 leading-snug max-w-5xl">
          Transforming ideas into exceptional digital{" "}
          <br className="hidden sm:block" />
          experiences through expertise and innovation.
        </h2>

        {/* Cards Wrapper */}
        <div
          ref={trackRef}
          className="
      cards-section
      flex flex-col lg:flex-row
      gap-6 lg:gap-0
      w-full lg:w-fit
     
    "
        >
          {/* CARD 01 */}
          <div className="card">
            <Card
              number="01"
              title="Full Stack Development"
              description="Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices."
            />
          </div>

          {/* CARD 02 */}
          <div className="card">
            <Card
              number="02"
              title="UI/UX Design & Frontend"
              description="Designing modern, responsive interfaces with Tailwind CSS and GSAP. Creating intuitive experiences with clean design systems and pixel-perfect implementations."
            />
          </div>

          {/* CARD 03 */}
          <div className="card">
            <Card
              number="03"
              title="E-Commerce Development"
              description="Developing end-to-end E-Commerce platforms with a focus on scalability, security, and user experience. Implementing payment gateways, shipping, and inventory systems."
            />
          </div>

          {/* CARD 04 */}
          <div className="card">
            <Card
              number="04"
              title="API & System Architecture"
              description="Building scalable APIs and systems with strong focus on security, performance, and reliability. Implementing authentication, authorization, and structured data management."
            />
          </div>
        </div>
      </section>

      <section className="latest-work px-5 sm:px-8 md:px-16 lg:px-24 py-12">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10 leading-snug">
          Discover my latest work and creative{" "}
          <br className="hidden sm:block" />
          solutions that bring ideas to life.
        </h2>

        {/* Grid */}
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 px-4 py-4 work-card flex flex-col group relative overflow-hidden">
            <p className="py-3 text-gray-500 text-sm sm:text-base">
              International Kolkata Bookfair
            </p>
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() =>
                window.open("https://www.kolkatabookfair.net/", "_blank")
              }
            >
              <img
                src={workimg1}
                className="w-full object-cover h-[250px] sm:h-[300px] md:h-[350px]"
                alt="Bookfair"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">
                  EVENT
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 px-4 py-4 work-card flex flex-col group relative overflow-hidden">
            <p className="py-3 text-gray-500 text-sm sm:text-base">Aajkaal</p>
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => window.open("https://aajkaal.in/", "_blank")}
            >
              <img
                src={workimg2}
                className="w-full object-cover h-[250px] sm:h-[300px] md:h-[350px]"
                alt="Aajkaal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">
                  MEDIA
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/2 px-4 py-4 work-card flex flex-col group relative overflow-hidden">
            <p className="py-3 text-gray-500 text-sm sm:text-base ">
              The Soumis Can Product
            </p>
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() =>
                window.open("https://thesoumiscanproduct.com/", "_blank")
              }
            >
              <img
                src={workimg3}
                className="w-full object-cover h-[250px] sm:h-[300px] md:h-[350px]"
                alt="Soumis"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">
                  E-COMMERCE
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-1/2 px-4 py-4 work-card flex flex-col group relative overflow-hidden">
            <p className="py-3 text-gray-500 text-sm sm:text-base">
              Techno Global Hospital Barrackpore
            </p>
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() =>
                window.open("https://technoglobalhospital.com/", "_blank")
              }
            >
              <img
                src={workimg4}
                className="w-full object-cover h-[250px] sm:h-[300px] md:h-[350px]"
                alt="Hospital"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">
                  Healthcare
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="view-all mt-10 md:mt-14 flex justify-center">
          <Link
            to="/work"
            ref={button2Ref}
            className="group cursor-pointer flex"
          >
            <button className="py-3 md:py-4 px-5 md:px-6 bg-blue-600 text-white rounded-full text-sm md:text-base">
              Projects
            </button>
            <button className="py-3 md:py-4 px-4 md:px-5 bg-blue-600 text-white rounded-full ">
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </Link>
        </div>
      </section>

      <section className="exp px-5 sm:px-10 lg:px-24 py-16 relative overflow-hidden">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 leading-snug">
          Explore my journey and the technologies{" "}
          <br className="hidden sm:block" />
          that define my craft
        </h2>

        {/* Timeline Line */}
        <div
          ref={timelineRef}
          className="
    timeline w-[2px] bg-gray-500 h-full absolute left-1/2
      opacity-0 md:opacity-100
    "
        ></div>

        {/* ========== ITEM 1 ========== */}
        <div className="relative mb-16 lg:mb-24">
          <div className="lg:w-1/2 lg:pr-12 lg:text-right ml-12 lg:ml-0">
            <h1 className="text-xl sm:text-2xl lg:text-4xl">
              Sister Nivedita University / Techno India Group
            </h1>
            <h3 className="mt-2 text-sm sm:text-base">2024 - Present</h3>
            <p className="text-sm font-light mt-4 leading-6">
              At Sister Nivedita University, I design, develop, and maintain
              scalable web applications using PHP, Laravel, MySQL, React, and
              modern front-end technologies. I have led and contributed to
              high-impact projects including the International Kolkata Book Fair
              platform, an Alumni Portal, and academic management systems.
            </p>
          </div>

          {/* Dot */}
          <div
            className="
      absolute 
      left-5 
      lg:left-1/2 
      w-3 h-3 
      bg-gray-500 
      rounded-full 
      -translate-x-1/2
      top-2
    "
          ></div>
        </div>

        {/* ========== ITEM 2 ========== */}
        <div className="relative mb-16 lg:mb-24">
          <div className="lg:w-1/2 lg:ml-auto lg:pl-12 ml-12">
            <h1 className="text-xl sm:text-2xl lg:text-4xl">The Webtrix</h1>
            <h3 className="mt-2 text-sm sm:text-base">2023 - 2024</h3>
            <p className="text-sm font-light mt-4 leading-6">
              At The Webtrix, I designed and developed database-driven web
              applications for international clients using PHP, MySQL,
              JavaScript, and CSS. I resolved production issues, optimized
              performance, and ensured reliable deployment.
            </p>
          </div>

          {/* Dot */}
          <div
            className="
      absolute 
      left-5 
      lg:left-1/2 
      w-3 h-3 
      bg-gray-500 
      rounded-full 
      -translate-x-1/2
      top-2
    "
          ></div>
        </div>

        {/* ========== ITEM 3 ========== */}
        <div className="relative">
          <div className="lg:w-1/2 lg:pr-12 lg:text-right ml-12 lg:ml-0">
            <h1 className="text-xl sm:text-2xl lg:text-4xl">Oasis Info Byte</h1>
            <h3 className="mt-2 text-sm sm:text-base">
              November 2023 - December 2023
            </h3>
            <p className="text-sm font-light mt-4 leading-6">
              Worked on web-based projects and strengthened backend integration
              skills while collaborating with development teams.
            </p>
          </div>

          {/* Dot */}
          <div
            className="
      absolute 
      left-5 
      lg:left-1/2 
      w-3 h-3 
      bg-gray-500 
      rounded-full 
      -translate-x-1/2
      top-2
    "
          ></div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
