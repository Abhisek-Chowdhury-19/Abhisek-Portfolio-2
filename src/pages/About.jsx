import React, { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const tagsRef = useRef(null);

  const techStack = {
    "Languages & Frameworks": ["PHP", "Laravel 12", "JavaScript", "React", "Node.js", "Express.js"],
    "Web Animations": ["GSAP", "Framer Motion"],
    "Databases & State": ["MySQL", "MongoDB", "REST API"],
    "DevOps & Cloud": ["CI/CD", "VPS", "Linux"],
    "UI & Styling": ["Tailwind CSS", "Bootstrap", "CSS"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman"],
  };

  useEffect(() => {
    // Heading reveal
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );

    // Bio stagger
    const paras = bioRef.current?.querySelectorAll("p");
    gsap.fromTo(
      paras,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.5 }
    );

    // Tech tags
    const tags = tagsRef.current?.querySelectorAll(".skill-tag");
    gsap.fromTo(
      tags,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: tagsRef.current,
          start: "top 75%",
        },
      }
    );

    return () => ScrollTrigger.killAll();
  }, []);

  const categoryIcons = {
    "Languages & Frameworks": "⚡",
    "Web Animations": "✦",
    "Databases & State": "◈",
    "DevOps & Cloud": "◎",
    "UI & Styling": "◐",
    "Tools & Platforms": "⊕",
  };

  return (
    <div style={{ background: "#f0efea", minHeight: "100vh" }}>
      <Nav />

      <main className="px-6 sm:px-10 lg:px-24 py-16 max-w-7xl mx-auto">
        {/* Hero heading */}
        <div className="overflow-hidden mb-16">
          <h1
            ref={headingRef}
            className="font-bold leading-none"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.04em",
              opacity: 0,
            }}
          >
            About<br />Me
          </h1>
        </div>

        {/* Bio grid */}
        <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
            >
              I'm{" "}
              <span
                className="px-1"
                style={{
                  background: "#d4ff00",
                  color: "#0a0a0a",
                  fontWeight: 700,
                  borderRadius: "4px",
                }}
              >
                Abhisek Chowdhury
              </span>
              , a Full-Stack Software Developer with 2.8+ years of hands-on experience building scalable, secure, and high-performance web applications.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}
            >
              I specialize in{" "}
              <strong style={{ color: "#0a0a0a" }}>PHP, Laravel, React, and MySQL</strong>. Currently working as a Full Stack Web Developer at{" "}
              <strong style={{ color: "#0a0a0a" }}>Sister Nivedita University</strong>, where I led the development of the official IKBF platform, Alumni Portals, and Attendance & Marks Management systems.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}
            >
              Previously at{" "}
              <strong style={{ color: "#0a0a0a" }}>The Webtrix Limited</strong>. I have a strong interest in{" "}
              <strong style={{ color: "#0a0a0a" }}>web security</strong> and responsibly reported a critical open directory indexing vulnerability on a live production system.
            </p>
          </div>

          {/* Stats sidebar */}
          <div className="flex flex-col gap-8">
            {[
              { label: "Years of Experience", value: "2.8+", note: "Building real-world products" },
              { label: "Projects Completed", value: "30+", note: "Across various industries" },
              { label: "Countries Served", value: "UK + IN", note: "International clients" },
            ].map(({ label, value, note }) => (
              <div
                key={label}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </p>
                <p
                  className="font-bold text-4xl sm:text-5xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
                >
                  {value}
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Arsenal */}
        <div className="mb-20">
          <div className="mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
            >
              Skills & Tech
            </p>
            <h2
              className="font-bold leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Technology Arsenal
            </h2>
          </div>

          <div
            ref={tagsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg">{categoryIcons[category]}</span>
                  <h3
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#0a0a0a" }}
                  >
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech, i) => (
                    <span key={i} className="skill-tag" style={{ opacity: 0 }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
