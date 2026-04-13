import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    // Use a plain object to drive the counter — avoids NaN
    const counter = { val: 0 };

    const tl = gsap.timeline();

    // 1. Line expands
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power3.inOut" }
    )
      // 2. Counter counts 0 → 100
      .to(
        counter,
        {
          val: 100,
          duration: 1.2,
          ease: "power2.out",
          onUpdate() {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(counter.val);
            }
          },
        },
        "-=0.6"
      )
      // 3. Name letters reveal
      .fromTo(
        textRef.current?.querySelectorAll(".letter"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.8"
      )
      // 4. Brief hold
      .to({}, { duration: 0.5 })
      // 5. Slide out upward
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        onComplete: () => setVisible(false),
      });

    return () => tl.kill();
  }, []);

  if (!visible) return null;

  const name = "ABHISEK";

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Name letters */}
        <div
          ref={textRef}
          className="flex gap-1 sm:gap-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="letter inline-block text-5xl sm:text-7xl lg:text-9xl font-bold text-white tracking-widest"
              style={{ opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-white/40"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Full Stack Developer
        </p>

        {/* Progress line */}
        <div className="w-48 sm:w-64 h-[1px] bg-white/10 relative overflow-hidden mt-2">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-white origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <span
            ref={counterRef}
            className="text-2xl sm:text-3xl font-light text-white tabular-nums"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            0
          </span>
          <span className="text-sm text-white/40">%</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div
        className="absolute top-6 left-6 text-white/20 text-xs tracking-widest font-light"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Portfolio 2026
      </div>
      <div
        className="absolute bottom-6 right-6 text-white/20 text-xs tracking-widest font-light"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Kolkata, IN
      </div>
    </div>
  );
}