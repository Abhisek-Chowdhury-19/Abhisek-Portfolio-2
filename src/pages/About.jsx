import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function About() {
  const techStack = {
    "Languages & Frameworks": [
      "PHP",
      "Laravel 12",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
    ],
    "Web Animations": ["GSAP", "Framer Motion"],
    "Databases & State": [
      "MySQL",
      "MongoDB",
      "Relational Databases",
      "Non-Relational Databases",
      "REST API",
    ],
    "DevOps & Cloud": ["CI/CD", "VPS"],
    "UI & Styling": ["Tailwind CSS", "Bootstrap", "CSS"],
    "Tools & Platforms": ["Git", "Github", "VS Code", "Postman"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* Main Container: Adjusted padding for mobile (px-6) vs desktop (lg:px-24) */}
      <main className="container mx-auto px-6 py-12 md:py-24 flex-grow">
        {/* Title: Fluid font size */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          About Me
        </h1>

        {/* Bio Section: Fixed 'class' to 'className' for React */}
        <div className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide max-w-4xl">
          <p className="mb-6">
            I’m{" "}
            <span className="font-semibold text-gray-900">
              Abhisek Chowdhury
            </span>
            , a{" "}
            <span className="font-semibold">Full-Stack Software Developer</span>{" "}
            with{" "}
            <span className="font-semibold">
              2.8+ years of hands-on experience
            </span>{" "}
            building scalable, secure, and high-performance web applications. I
            specialize in{" "}
            <span className="font-semibold">
              PHP, Laravel, React, and MySQL
            </span>
            .
          </p>

          <p className="mb-6">
            Currently, I work as a{" "}
            <span className="font-semibold">
              Full Stack Web Developer at Sister Nivedita University
            </span>
            , where I led the development of the official{" "}
            <span className="font-semibold">
              International Kolkata Book Fair (IKBF)
            </span>{" "}
            platform. I’ve also built Alumni Portals, Attendance & Marks
            Management systems, and delivered production-ready solutions across
            various sectors.
          </p>

          <p className="mb-6">
            Previously, I worked at{" "}
            <span className="font-semibold">The Webtrix Limited</span>. I also
            have a strong interest in{" "}
            <span className="font-semibold">web security</span> and responsibly
            reported a critical open directory indexing vulnerability on a live
            production system.
          </p>
        </div>

        {/* Section Header */}
        <div className="mt-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Technology Arsenal
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </div>

        {/* Tech Stack Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-16">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5 text-gray-900 border-l-4 border-black pl-3">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {items.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-gray-300 text-xs md:text-sm font-medium
                             text-gray-800 hover:bg-black hover:text-white
                             transition duration-300 ease-out cursor-default bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
