import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-16">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Contact
          </h1>

          {/* Intro Text */}
          <p className="my-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Feel free to reach out to me for any project or collaboration. I'm
            always open to discussing new ideas and opportunities. You can
            contact me via email at
          </p>

          {/* Email Button */}
          <button
            onClick={() => window.open("mailto:abhisekchowdhury7044@gmail.com")}
            className="px-6 py-3 border rounded-full text-sm sm:text-base hover:bg-black hover:text-white transition duration-300"
          >
            abhisekchowdhury7044@gmail.com
          </button>

          {/* Phone Section */}
          <p className="my-6 text-base sm:text-lg lg:text-xl text-gray-600">
            Or you can call me at
          </p>

          <button
            onClick={() => window.open("tel:7044982148")}
            className="px-6 py-3 border rounded-full text-sm sm:text-base hover:bg-black hover:text-white transition duration-300"
          >
            7044982148
          </button>

          {/* Social Section */}
          <p className="my-8 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            You can also find me on LinkedIn and GitHub. I'm always happy to
            connect with like-minded professionals and share my work. Let's
            create something amazing together!
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abhisek-chowdhury-294775210",
                )
              }
              className="px-6 py-3 border rounded-full text-sm sm:text-base hover:bg-blue-600 hover:text-white transition duration-300"
            >
              LinkedIn
            </button>

            <button
              onClick={() =>
                window.open("https://github.com/Abhisek-Chowdhury-19")
              }
              className="px-6 py-3 border rounded-full text-sm sm:text-base hover:bg-gray-800 hover:text-white transition duration-300"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
