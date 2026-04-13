import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import videoback from "../assets/video/glassy.mp4";
import useMagnetic from "../Hooks/useMagnetic";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const menuPanelRef = useRef(null);
  const menuContentRef = useRef(null);
  const navmagbtnref = useRef(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useMagnetic(navmagbtnref, 0.4, true);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Hide/show desktop header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate menu open/close
  useLayoutEffect(() => {
    if (!menuPanelRef.current) return;

    if (menuOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        menuPanelRef.current,
        { clipPath: "circle(0% at calc(100% - 40px) 40px)", opacity: 1 },
        {
          clipPath: "circle(150% at calc(100% - 40px) 40px)",
          duration: 0.7,
          ease: "power4.inOut",
        }
      );

      if (menuContentRef.current) {
        const items = menuContentRef.current.querySelectorAll(".menu-item");
        gsap.fromTo(
          items,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out", delay: 0.3 }
        );
      }
    } else {
      document.body.style.overflow = "";

      if (menuPanelRef.current) {
        gsap.to(menuPanelRef.current, {
          clipPath: "circle(0% at calc(100% - 40px) 40px)",
          duration: 0.55,
          ease: "power4.inOut",
        });
      }
    }
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* ===== DESKTOP + MOBILE TOP HEADER ===== */}
      <header
        ref={headerRef}
        className="flex items-center justify-between px-6 md:px-10 py-5 relative z-40"
        style={{
          transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1)",
          transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        {/* Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Abhisek
              <span style={{ color: "#d4ff00", fontSize: "1.5em", lineHeight: 0 }}>.</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Nav Links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {[
              { to: "/", label: ["H","o","m","e"] },
              { to: "/about", label: ["A","b","o","u","t"] },
              { to: "/work", label: ["W","o","r","k"] },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="nav-wave-link"
                  style={{ fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                >
                  {label.map((char, i) => (
                    <span key={i}>
                      <i>{char}</i>
                      <i>{char}</i>
                    </span>
                  ))}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                ref={navmagbtnref}
                className="flex items-center overflow-hidden rounded-full text-white text-sm font-medium"
                style={{
                  background: "#0a0a0a",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                }}
              >
                <span className="nav-wave-link px-5 py-2.5">
                  {["C","o","n","t","a","c","t"].map((char, i) => (
                    <span key={i}>
                      <i>{char}</i>
                      <i>{char}</i>
                    </span>
                  ))}
                </span>
                <span className="px-3 py-2.5 border-l border-white/10">
                  <i className="bi bi-arrow-up-right text-xs" />
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger button — only visible on mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-1.5 px-3 py-2.5 rounded-xl"
          style={{
            background: "rgba(10,10,10,0.08)",
            border: "1px solid rgba(10,10,10,0.08)",
          }}
        >
          <span
            className="block w-5 h-px rounded-full"
            style={{ background: "#0a0a0a" }}
          />
          <span
            className="block w-3.5 h-px rounded-full"
            style={{ background: "#0a0a0a" }}
          />
          <span
            className="block w-5 h-px rounded-full"
            style={{ background: "#0a0a0a" }}
          />
        </button>

      </header>

      {/* ===== FULLSCREEN MENU PANEL (mobile + desktop toggle) ===== */}
      <div
        ref={menuPanelRef}
        className="fixed inset-0 z-[200] flex"
        style={{
          background: "#0a0a0a",
          clipPath: "circle(0% at calc(100% - 40px) 40px)",
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute z-[210] flex items-center justify-center"
          style={{
            top: "20px",
            right: "24px",
            width: "48px",
            height: "48px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="1" y1="1" x2="15" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15" y1="1" x2="1" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Menu content */}
        <div
          ref={menuContentRef}
          className="flex flex-col md:flex-row w-full h-full p-8 md:p-16 pt-20 md:pt-16"
        >
          {/* Left: Nav links */}
          <div className="flex flex-col justify-center flex-1 gap-1 md:gap-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="menu-item nav-wave-link text-white font-bold uppercase block"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  letterSpacing: "-0.03em",
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: 1.05,
                  textDecoration: "none",
                  opacity: 0,
                }}
              >
                {label.split("").map((char, i) => (
                  <span key={i}>
                    <i>{char}</i>
                    <i>{char}</i>
                  </span>
                ))}
              </Link>
            ))}
          </div>

          {/* Right: Info + video */}
          <div className="menu-item flex flex-col justify-between md:items-end mt-10 md:mt-0 gap-6 md:w-64 opacity-0">
            {/* Info */}
            <div className="md:text-right">
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
              >
                Abhisek Chowdhury
              </p>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
              >
                Full Stack Developer
                <br />
                Based in Kolkata, India
              </p>
            </div>

            {/* Video preview */}
            <div
              className="rounded-2xl overflow-hidden hidden md:block"
              style={{ width: "200px", aspectRatio: "9/16" }}
            >
              <video
                src={videoback}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social */}
            <div className="flex gap-5 md:justify-end">
              {[
                { href: "https://github.com/Abhisek-Chowdhury-19", label: "GitHub" },
                { href: "https://www.linkedin.com/in/abhisek-chowdhury-294775210/", label: "LinkedIn" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase transition-colors hover:text-white"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating hamburger button on desktop (appears on scroll) — only shown on desktop */}
      <FloatingMenuBtn onClick={() => setMenuOpen(true)} />
    </>
  );
}

// Separate floating button that appears on scroll (desktop only)
function FloatingMenuBtn({ onClick }) {
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(btnRef.current, { opacity: 0, y: -10 });
    ScrollTrigger.create({
      start: "120px top",
      end: "120px top",
      onEnter: () => gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }),
      onLeaveBack: () => gsap.to(btnRef.current, { opacity: 0, y: -10, duration: 0.3 }),
    });
  }, []);

  return (
    <div
      ref={btnRef}
      className="fixed top-4 right-6 z-[150] hidden md:flex"
      style={{ opacity: 0 }}
    >
      <button
        onClick={onClick}
        aria-label="Open menu"
        className="flex items-center gap-3 px-4 py-2.5 rounded-full text-white text-sm font-medium"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <rect y="0" width="20" height="1.5" rx="1" fill="white" />
          <rect y="6" width="14" height="1.5" rx="1" fill="white" />
          <rect y="12" width="20" height="1.5" rx="1" fill="white" />
        </svg>
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
          Menu
        </span>
      </button>
    </div>
  );
}

export default Nav;
