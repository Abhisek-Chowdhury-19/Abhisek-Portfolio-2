import React from "react";
import Nav from "../components/Nav";
import heroVideo from "../assets/video/glassy.mp4";
import { useLayoutEffect, useRef, useEffect } from "react";
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
  const timelineRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const heroContentRef = useRef(null);
  const heroTaglineRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const statsRef = useRef(null);
  const servicesSectionRef = useRef(null);

  useMagnetic(button1Ref, 0.4, true);
  useMagnetic(button2Ref, 0.4, true);

  // Hero entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.4 });

    tl.fromTo(
      heroContentRef.current?.querySelectorAll(".hero-word"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power4.out" }
    )
      .fromTo(
        heroTaglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        scrollIndicatorRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

    return () => tl.kill();
  }, []);

  // Services cards scroll-in animation (replaces broken horizontal pin)
  useEffect(() => {
    const section = servicesSectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".service-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 55%",
            scrub: false,
            once: true,
          },
          delay: i * 0.08,
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useLayoutEffect(() => {
    // Arc animation
    gsap.to(pathRef.current, {
      borderRadius: "50% 50% 0 0",
      scale: 2.8,
      y: -50,
      scrollTrigger: {
        trigger: ".arch-section",
        start: "-2% 95%",
        end: "40% bottom",
        scrub: 2,
      },
      ease: "power3.out",
    });

    // Text reveal
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
      },
    });

    // Image zoom
    gsap.to(scalerRef.current, {
      scale: 1,
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".photo-text-section",
        start: "0% 80%",
        end: "50% 50%",
        scrub: 0,
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
      },
    });

    // Timeline progress
    gsap.to(timelineRef.current, {
      "--progress": "100%",
      ease: "none",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Background color change on timeline
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to(document.body, {
          backgroundColor: "#0a0a0a",
          color: "#f0efea",
          duration: 0.5,
        }),
      onLeave: () =>
        gsap.to(document.body, {
          backgroundColor: "#f0efea",
          color: "#0a0a0a",
          duration: 0.5,
        }),
      onEnterBack: () =>
        gsap.to(document.body, {
          backgroundColor: "#0a0a0a",
          color: "#f0efea",
          duration: 0.5,
        }),
      onLeaveBack: () =>
        gsap.to(document.body, {
          backgroundColor: "#f0efea",
          color: "#0a0a0a",
          duration: 0.5,
        }),
    });

    // Marquee
    const marquee = marqueeRef.current;
    let x = 0;
    let direction = -1;
    const contentWidth = marquee.scrollWidth / 4;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        direction = self.direction === 1 ? -1 : 1;
      },
    });

    const setX = gsap.quickSetter(marquee, "x", "px");
    const speed = 90;

    const animateMarquee = (_, delta) => {
      x += (speed * direction * delta) / 1000;
      if (x <= -contentWidth) x += contentWidth;
      if (x >= 0) x -= contentWidth;
      setX(x);
    };

    gsap.ticker.add(animateMarquee);

    return () => {
      gsap.ticker.remove(animateMarquee);
      ScrollTrigger.killAll();
    };
  }, []);

  function MarqueeContent() {
    const items = [
      "Full Stack Developer",
      "Web Developer",
      "MERN Stack",
      "LAMP Stack",
    ];
    return (
      <div className="flex items-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span
              className="text-[7vw] font-bold uppercase mx-8 whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#0a0a0a" }}
            >
              {item}
            </span>
            <span className="text-[3vw] mx-2" style={{ color: "#d4ff00" }}>
              ✦
            </span>
          </div>
        ))}
      </div>
    );
  }

  // ── Service card with hover reveal ──
  const ServiceCard = ({ number, title, description, icon, tags }) => {
    return (
      <div
        className="service-card group relative overflow-hidden rounded-2xl p-8 md:p-10 cursor-pointer opacity-0"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          transition: "border-color 0.4s ease, background 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(212,255,0,0.25)";
          e.currentTarget.style.background = "rgba(212,255,0,0.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        }}
      >
        {/* Number */}
        <div className="flex items-start justify-between mb-8">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: "#d4ff00", color: "#0a0a0a" }}
          >
            {icon}
          </div>
          <span
            className="text-xs font-mono"
            style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}
          >
            {number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl font-bold mb-4 leading-snug"
          style={{
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div
          className="absolute bottom-8 right-8 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
          style={{ background: "#d4ff00" }}
        >
          <i className="bi bi-arrow-up-right text-black text-xs" />
        </div>
      </div>
    );
  };

  // ── Work card (premium redesign) ──
  const WorkCard = ({ title, tag, img, url, index }) => {
    return (
      <div
        className="group cursor-pointer"
        onClick={() => window.open(url, "_blank")}
      >
        {/* Image area */}
        <div
          className="relative overflow-hidden rounded-2xl mb-4"
          style={{ background: "#e8e7e2" }}
        >
          {/* Index badge */}
          <div
            className="absolute top-4 left-4 z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
            style={{ background: "#0a0a0a", color: "white" }}
          >
            {String(index).padStart(2, "0")}
          </div>

          {/* Tag badge */}
          <div
            className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
            style={{
              background: "#d4ff00",
              color: "#0a0a0a",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {tag}
          </div>

          {/* Image */}
          <div
            className="overflow-hidden"
            style={{ height: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <img
              src={img}
              alt={title}
              className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "12px",
              }}
            />
          </div>

          {/* Hover overlay with visit label */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: "rgba(10,10,10,0.55)", backdropFilter: "blur(4px)" }}
          >
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
              style={{ background: "#d4ff00", color: "#0a0a0a", fontFamily: "'Inter', sans-serif" }}
            >
              Visit Site
              <i className="bi bi-arrow-up-right text-xs" />
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="flex justify-between items-start px-1">
          <div>
            <h3
              className="text-base font-semibold leading-snug mb-0.5 group-hover:underline"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.01em",
                textDecorationThickness: "1px",
                textUnderlineOffset: "3px",
              }}
            >
              {title}
            </h3>
            <p
              className="text-xs"
              style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
            >
              {tag}
            </p>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: "#0a0a0a", color: "white" }}
          >
            <i className="bi bi-arrow-up-right text-xs" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />

      {/* ===== HERO SECTION ===== */}
      <div
        className="hero-section h-screen relative overflow-hidden"
        style={{ marginTop: "-88px" }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.82) contrast(1.05) saturate(1.1)" }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.3) 100%)",
            }}
          />
        </div>

        {/* Social sidebar */}
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5 z-20">
          <div className="w-px h-14 mb-1" style={{ background: "rgba(255,255,255,0.25)" }} />
          {[
            { href: "https://github.com/Abhisek-Chowdhury-19", icon: "bi-github" },
            { href: "https://www.linkedin.com/in/abhisek-chowdhury-294775210/", icon: "bi-linkedin" },
            { href: "https://wa.me/+917044982148", icon: "bi-whatsapp" },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors text-base"
            >
              <i className={`bi ${icon}`} />
            </a>
          ))}
          <div className="w-px h-14 mt-1" style={{ background: "rgba(255,255,255,0.25)" }} />
        </div>

        {/* Hero center content */}
        <div
          ref={heroContentRef}
          className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10"
        >
          {/* Available badge */}
          <div
            className="hero-word flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#d4ff00" }} />
            Available for new projects
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <h1
              className="hero-word text-white font-bold leading-none"
              style={{
                fontSize: "clamp(2.8rem, 9vw, 8.5rem)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Hi, I'm Abhisek
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h2
              className="hero-word font-bold leading-none"
              style={{
                fontSize: "clamp(2rem, 7vw, 7rem)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.04em",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Full Stack Developer
            </h2>
          </div>

          <p
            ref={heroTaglineRef}
            className="text-white/55 max-w-lg text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", opacity: 0 }}
          >
            Building fast, scalable, and immersive digital experiences that merge creativity with engineering precision.
          </p>

          <div className="hero-word flex flex-wrap gap-4 mt-10 justify-center">
            <Link to="/work">
              <button
                className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "#d4ff00",
                  color: "#0a0a0a",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                View My Work
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          style={{ opacity: 0 }}
        >
          <span
            className="text-white/35 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div
              className="absolute top-0 left-0 w-full h-6"
              style={{ background: "rgba(255,255,255,0.7)", animation: "scrollDown 1.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* ===== ABOUT ARCH SECTION ===== */}
      <div className="arch-section about-section relative overflow-x-clip z-20" style={{ background: "#0a0a0a" }}>
        <div className="arc-compo w-full top-0 rounded-full z-20" ref={pathRef}>
          <div
            className="arc h-[60px] sm:h-[80px] md:h-[100px] mb-8 w-full rounded-full z-20"
            style={{ background: "#0a0a0a", clipPath: "ellipse(30% 100% at 50% 100%)" }}
          />
        </div>

        <div className="about-text py-8 pb-24">
          <div
            ref={textAnimationRef}
            className="text-part-1 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-center pt-4 max-w-5xl mx-auto px-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            <TextSplitter
              text="I'm Abhisek Chowdhury, a Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision."
              type="word"
              style1={true}
            />
          </div>

          <div
            ref={textAnimationRef2}
            className="text-part-2 font-light text-white text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-8 max-w-4xl mx-auto px-6"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
          >
            <TextSplitter
              text="I specialize in developing SaaS platforms, AI-driven products, and interactive web experiences using technologies like React.js, Node.js."
              type="word"
              style1={true}
            />
          </div>

          <div className="my-14 flex justify-center px-4">
            <Link to="/about" ref={button1Ref} className="btn-pill">
              <span className="btn-main" style={{ background: "#d4ff00", color: "#0a0a0a", fontFamily: "'Inter', sans-serif" }}>
                About Me
              </span>
              <span className="btn-icon" style={{ background: "#d4ff00", color: "#0a0a0a", borderLeft: "1px solid rgba(0,0,0,0.1)" }}>
                <i className="bi bi-arrow-up-right" />
              </span>
            </Link>
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 w-full md:w-2/3 mx-auto px-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Inter', sans-serif" }}>
              Scroll Down <i className="bi bi-arrow-down ml-1" />
            </p>
            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Inter', sans-serif" }}>
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>

      {/* ===== PHOTO + MARQUEE SECTION ===== */}
      <div className="photo-text-section">
        <section className="overflow-hidden whitespace-nowrap" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div
            className="scroller-image bg-white scale-100 md:scale-[0.85] lg:scale-[0.72] overflow-hidden rounded-3xl"
            ref={scalerRef}
          >
            <div className="flex w-max py-4" ref={marqueeRef}>
              <MarqueeContent />
              <MarqueeContent />
              <MarqueeContent />
              <MarqueeContent />
            </div>

            <div className="w-full relative">
              <img
                src={pimage}
                ref={scalerRef2}
                className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-6 md:py-8 scale-100 md:scale-[0.65] lg:scale-[0.45]"
                alt="Abhisek Chowdhury"
              />
            </div>

            <div className="text-section px-6 sm:px-10 md:px-16 lg:px-24 py-10 whitespace-normal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl text-justify pb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-0.02em" }}>
                    Driving measurable growth and engagement through thoughtful design and engineering.
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg text-justify pb-6 leading-relaxed" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
                    Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.
                  </p>
                </div>
              </div>

              <div
                ref={statsRef}
                className="grid grid-cols-2 gap-8 mt-10 pt-10"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                {[
                  { label: "Years of Experience", value: "2.8+", sub: "In production environments" },
                  { label: "Projects Completed", value: "30+", sub: "Across varied industries" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="px-2">
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
                      {label}
                    </p>
                    <h2
                      className="text-5xl sm:text-6xl md:text-7xl pb-2 font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
                    >
                      {value}
                    </h2>
                    <p className="text-xs" style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}>{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SERVICES SECTION (grid replace pin) ===== */}
      <section
        ref={servicesSectionRef}
        className="px-6 sm:px-8 md:px-12 lg:px-20 py-24"
        style={{ background: "#0a0a0a" }}
      >
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <h2
            className="leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "white",
              maxWidth: "540px",
            }}
          >
            What I do
            <span style={{ color: "#d4ff00" }}> best.</span>
          </h2>
          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
          >
            End-to-end expertise across the full product lifecycle — from design to deployment.
          </p>
        </div>

        {/* 2×2 grid on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              number: "01",
              icon: "⚡",
              title: "Full Stack Development",
              description:
                "Building scalable, high-performance web applications using Next.js, React, Node.js, and TypeScript — with robust backend architectures and secure RESTful APIs.",
              tags: ["React", "Node.js", "TypeScript", "Next.js", "REST API"],
            },
            {
              number: "02",
              icon: "✦",
              title: "UI/UX Design & Frontend",
              description:
                "Designing modern, responsive interfaces with Tailwind CSS and GSAP. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
              tags: ["GSAP", "Tailwind CSS", "Figma", "Framer Motion"],
            },
            {
              number: "03",
              icon: "◈",
              title: "E-Commerce Development",
              description:
                "End-to-end e-commerce platforms focused on scalability, security, and UX. Payment gateways, shipping integration, and inventory management systems.",
              tags: ["WooCommerce", "Stripe", "PHP", "Laravel", "MySQL"],
            },
            {
              number: "04",
              icon: "◎",
              title: "API & System Architecture",
              description:
                "Scalable APIs with strong focus on security, performance, and reliability. Authentication, authorization, structured data management, and microservices.",
              tags: ["REST", "JWT", "MongoDB", "MySQL", "VPS", "CI/CD"],
            },
          ].map((card) => (
            <ServiceCard key={card.number} {...card} />
          ))}
        </div>
      </section>

      {/* ===== LATEST WORK ===== */}
      <section
        className="latest-work px-6 sm:px-8 md:px-16 lg:px-20 py-24"
        style={{ background: "#f0efea" }}
      >
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
            >
              Recent Projects
            </p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                fontSize: "clamp(3rem, 10vw, 7rem)",
              }}
            >
              Work that speaks
              <br />for itself
            </h2>
          </div>
          <Link to="/work" ref={button2Ref} className="btn-pill self-start sm:self-auto">
            <span className="btn-main" style={{ fontFamily: "'Inter', sans-serif" }}>
              View All Work
            </span>
            <span className="btn-icon">
              <i className="bi bi-arrow-up-right text-xs" />
            </span>
          </Link>
        </div>

        {/* 4 work cards — 2 col on md, 4 col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "International Kolkata Bookfair", tag: "Event", img: workimg1, url: "https://www.kolkatabookfair.net/" },
            { title: "Aajkaal", tag: "Media", img: workimg2, url: "https://aajkaal.in/" },
            { title: "The Soumis Can Product", tag: "E-Commerce", img: workimg3, url: "https://thesoumiscanproduct.com/" },
            { title: "Techno Global Hospital", tag: "Healthcare", img: workimg4, url: "https://technoglobalhospital.com/" },
          ].map(({ title, tag, img, url }, i) => (
            <WorkCard key={title} title={title} tag={tag} img={img} url={url} index={i + 1} />
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section
        className="exp px-6 sm:px-10 lg:px-24 py-24 relative overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-center mb-20 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.03em", color: "white" }}
        >
          My Journey
        </h2>

        <div
          ref={timelineRef}
          className="timeline w-[2px] h-full absolute left-1/2 opacity-0 md:opacity-100"
        />

        {[
          {
            company: "Sister Nivedita University",
            subtitle: "Techno India Group",
            period: "2024 – Present",
            desc: "Design, develop, and maintain scalable web applications using PHP, Laravel, MySQL, React, and modern front-end technologies. Led high-impact projects including the International Kolkata Book Fair platform, Alumni Portal, and academic management systems.",
            side: "left",
          },
          {
            company: "The Webtrix",
            period: "2023 – 2024",
            desc: "Designed and developed database-driven web applications for international clients using PHP, MySQL, JavaScript, and CSS. Resolved production issues, optimized performance, and ensured reliable deployment.",
            side: "right",
          },
          {
            company: "Oasis Info Byte",
            period: "Nov – Dec 2023",
            desc: "Worked on web-based projects and strengthened backend integration skills while collaborating with development teams.",
            side: "left",
          },
        ].map(({ company, subtitle, period, desc, side }) => (
          <div key={company} className="relative mb-16 lg:mb-24">
            <div className={`${side === "left" ? "lg:w-1/2 lg:pr-16 lg:text-right ml-10 lg:ml-0" : "lg:w-1/2 lg:ml-auto lg:pl-16 ml-10"}`}>
              <h3
                className="text-xl sm:text-2xl lg:text-4xl font-bold"
                style={{ color: "white", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                {company}
              </h3>
              {subtitle && (
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}>
                  {subtitle}
                </p>
              )}
              <p className="mt-2 text-sm font-medium" style={{ color: "#d4ff00", fontFamily: "'Inter', sans-serif" }}>
                {period}
              </p>
              <p className="text-sm font-light mt-4 leading-7" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
                {desc}
              </p>
            </div>
            <div
              className="absolute left-3 lg:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 top-2"
              style={{ background: "#d4ff00", border: "2px solid #0a0a0a" }}
            />
          </div>
        ))}
      </section>

      <Footer />

      <style>{`
        @keyframes scrollDown {
          0%   { transform: translateY(-100%); }
          50%  { transform: translateY(0%);    }
          100% { transform: translateY(100%);  }
        }
      `}</style>
    </>
  );
}

export default Home;
