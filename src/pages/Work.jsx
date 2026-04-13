import React, { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import workimg1 from "../assets/images/work/ikbf.png";
import workimg2 from "../assets/images/work/aajkaal.png";
import workimg3 from "../assets/images/work/thesoumi.png";
import workimg4 from "../assets/images/work/technoglobalhospital.png";
import workimg5 from "../assets/images/work/alumni.png";
import workimg6 from "../assets/images/work/rtn.png";
import workimg7 from "../assets/images/work/tiut.png";
import workimg8 from "../assets/images/work/apai.png";
import workimg9 from "../assets/images/work/hana.png";
import workimg10 from "../assets/images/work/thewebtrix.png";
import workimg11 from "../assets/images/work/skfu.png";
import workimg12 from "../assets/images/work/5star.png";
import workimg13 from "../assets/images/work/vrs.png";
import Footer from "../components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Education", "E-Commerce", "Healthcare", "Media", "Event", "Service"];

const works = [
  {
    title: "International Kolkata Bookfair",
    description: "A digital ecosystem designed for visitor management and real-time scheduling.",
    image: workimg1,
    link: "https://www.kolkatabookfair.net/",
    category: "Event",
    year: "2024",
  },
  {
    title: "Aajkaal.in",
    description: "Developed feature pages for Aajkaal, including Magazine, Gallery, and Sunday Special sections.",
    image: workimg2,
    link: "https://www.aajkaal.in/",
    category: "Media",
    year: "2024",
  },
  {
    title: "The Soumis Can Products",
    description: "A dynamic website offering a wide range of products and services.",
    image: workimg3,
    link: "https://thesoumiscanproduct.com/",
    category: "E-Commerce",
    year: "2023",
  },
  {
    title: "Techno Global Hospital",
    description: "End-to-end web application for Techno Global Hospital Barrackpore.",
    image: workimg4,
    link: "https://www.technoglobalhospital.com/",
    category: "Healthcare",
    year: "2024",
  },
  {
    title: "University Alumni Portal",
    description: "A centralized platform improving alumni–student engagement and data access.",
    image: workimg5,
    link: "https://alumni.snumcaj.com/",
    category: "Education",
    year: "2024",
  },
  {
    title: "The Hana Beauty",
    description: "An E-commerce website offering a wide range of beauty products and services.",
    image: workimg9,
    link: "https://thehanabeauty.com/",
    category: "E-Commerce",
    year: "2023",
  },
  {
    title: "APAI",
    description: "End-to-end website for Association of Professional Academic Institutions.",
    image: workimg8,
    link: "https://apailive.com/",
    category: "Education",
    year: "2024",
  },
  {
    title: "Rotary Techno Netralaya",
    description: "End-to-end web application for Rotary Techno Netralaya.",
    image: workimg6,
    link: "https://www.rotarytechnonetralaya.com/",
    category: "Healthcare",
    year: "2023",
  },
  {
    title: "Techno India University, Tripura",
    description: "End-to-end website for Techno India University, Tripura.",
    image: workimg7,
    link: "https://www.tiut.ac.in/",
    category: "Education",
    year: "2024",
  },
  {
    title: "Techno India SKFU",
    description: "End-to-end website for Techno India SKFU.",
    image: workimg11,
    link: "https://www.skfuniv.com/",
    category: "Education",
    year: "2024",
  },
  {
    title: "The Webtrix",
    description: "End-to-end website for The Webtrix digital agency.",
    image: workimg10,
    link: "https://thewebtrix.co.uk/",
    category: "Service",
    year: "2023",
  },
  {
    title: "5 Stars Recovery",
    description: "Complete web application for a towing and vehicle recovery service with Google Places API integration.",
    image: workimg12,
    link: "https://5starsrecovery.co.uk/",
    category: "Service",
    year: "2023",
  },
  {
    title: "Romford Vehicle Recovery",
    description: "Comprehensive vehicle recovery web app with service request forms and real-time location integration.",
    image: workimg13,
    link: "https://romfordvehiclerecovery.com/",
    category: "Service",
    year: "2023",
  },
];

const WorkCard = ({ title, description, image, link, category, year, index }) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="group cursor-pointer transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image block */}
      <div className="relative overflow-hidden rounded-2xl mb-4" style={{ background: "#e8e7e2" }}>
        {/* Index badge */}
        <div
          className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
          style={{ background: "#0a0a0a", color: "white" }}
        >
          {String(index).padStart(2, "0")}
        </div>

        {/* Category badge */}
        <div
          className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: "#d4ff00", color: "#0a0a0a", fontFamily: "'Inter', sans-serif" }}
        >
          {category}
        </div>

        {/* Image — object-contain so nothing gets cropped */}
        <div
          style={{
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            background: "#f0efea",
          }}
        >
          <img
            src={image}
            alt={title}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Hover overlay CTA */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(10,10,10,0.5)", backdropFilter: "blur(4px)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "#d4ff00", color: "#0a0a0a", fontFamily: "'Inter', sans-serif" }}
          >
            Visit Site <i className="bi bi-arrow-up-right text-xs" />
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-1">
        <div className="flex justify-between items-start gap-2">
          <h3
            className="text-sm font-semibold leading-snug flex-1 min-w-0 group-hover:underline"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
              textDecorationThickness: "1px",
              textUnderlineOffset: "3px",
            }}
          >
            {title}
          </h3>
          <span
            className="text-xs flex-shrink-0"
            style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
          >
            {year}
          </span>
        </div>
        <p className="text-xs mt-1 line-clamp-2" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  const filtered = activeCategory === "All"
    ? works
    : works.filter((w) => w.category === activeCategory);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".work-card-item");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.07, ease: "power3.out" }
    );
  }, [filtered.length, activeCategory]);

  return (
    <div style={{ background: "#f0efea", minHeight: "100vh" }}>
      <Nav />

      <div className="px-6 sm:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="overflow-hidden mb-4">
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
            My Work
          </h1>
        </div>

        <p
          className="mb-12 text-base sm:text-lg max-w-xl"
          style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}
        >
          Things I've made trying to put my dent in the universe. {works.length}+ projects across various industries.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: activeCategory === cat ? "#0a0a0a" : "white",
                color: activeCategory === cat ? "white" : "#555",
                border: "1px solid",
                borderColor: activeCategory === cat ? "#0a0a0a" : "rgba(10,10,10,0.1)",
                letterSpacing: "0.02em",
              }}
            >
              {cat}
              {cat === "All" && (
                <span
                  className="ml-1.5 text-xs opacity-60"
                >
                  {works.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((work, i) => (
            <div key={work.title} className="work-card-item">
              <WorkCard {...work} index={i + 1} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}>No projects found.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Work;
