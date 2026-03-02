import React from "react";
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
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
function Work() {
  const works = [
    {
      title: "International Kolkata Bookfair",
      description:
        "A digital ecosystem designed for visitor management and real-time scheduling.",
      image: workimg1,
      link: "https://www.kolkatabookfair.net/",
    },
    {
      title: "Aajkaal.in",
      description:
        "Developed feature pages for Aajkaal, including a variety of sections like Magazine, Aajkaal Gallery, and Sunday Special.",
      image: workimg2,
      link: "https://www.aajkaal.in/",
    },
    {
      title: "The Soumis Can Products",
      description:
        "A dynamic website for Soumis Can Products, offering a wide range of products and services.",
      image: workimg3,
      link: "https://thesoumiscanproduct.com/",
    },
    {
      title: "Techno Global Hospital Barrackpore",
      description:
        "Develop end-to-end web application for Techno Global Hospital Barrackpore from scratch.",
      image: workimg4,
      link: "https://www.technoglobalhospital.com/",
    },
    {
      title: "University Alumni Portal",
      description:
        "A centralized platform improving alumni–student engagement and data access.",
      image: workimg5,
      link: "https://alumni.snumcaj.com/",
    },
    {
      title: "The Hana Beauty",
      description:
        "An E-commerce website for The Hana Beauty, offering a wide range of products and services.",
      image: workimg9,
      link: "https://thehanabeauty.com/",
    },

    {
      title: "Association of Professional Academic Institutions",
      description:
        "Develop end-to-end website for Association of Professional Academic Institutions from scratch.",
      image: workimg8,
      link: "https://apailive.com/",
    },
    {
      title: "Rotary Techno Netralaya",
      description:
        "Develop end-to-end web application for Rotary Techno Netralaya from scratch.",
      image: workimg6,
      link: "https://www.rotarytechnonetralaya.com/",
    },
    {
      title: "Techno India University, Tripura",
      description:
        "Develop end-to-end website for Techno India University, Tripura from scratch.",
      image: workimg7,
      link: "https://www.tiut.ac.in/",
    },
    {
      title: "Techno India SKFU",
      description:
        "Develop end-to-end website for Techno India SKFU from scratch.",
      image: workimg11,
      link: "https://www.skfuniv.com/",
    },
    {
      title: "The Webtrix",
      description: "Develop end-to-end website for The Webtrix from scratch.",
      image: workimg10,
      link: "https://thewebtrix.co.uk/",
    },
    {
      title: "5 Stars Recovery",
      description:
        "Designed and developed a complete web application for a towing and vehicle recovery service. Integrated Google Places API for location-based service requests and improved customer accessibility.",
      image: workimg12, // use your correct image variable here
      link: "https://5starsrecovery.co.uk/",
    },
    {
      title: "Romford Vehicle Recovery",
      description:
        "Designed and developed a comprehensive vehicle recovery web application, featuring service request forms, real-time location integration, and responsive UI to streamline customer bookings and roadside assistance.",
      image: workimg13, // replace with your actual imported image variable
      link: "https://romfordvehiclerecovery.com/",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 my-16 sm:my-20">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
          My Work
        </h1>

        {/* Subtext */}
        <p
          className="
    mt-6 
    text-base sm:text-lg lg:text-xl 
    text-zinc-600 
    max-w-full sm:max-w-xl lg:max-w-2xl
  "
        >
          Things I’ve made trying to put my dent in the universe.
        </p>

        {/* Work Cards */}
        <div
          className="
    mt-12
    grid
    gap-6 sm:gap-8
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
  "
        >
          {works.map((work, i) => (
            <WorkCard
              key={i}
              index={i + 1}
              title={work.title}
              description={work.description}
              image={work.image}
              onClick={() => window.open(work.link, "_blank")}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Work;
