import React from "react";
import Nav from "../components/Nav";
import Page from "../components/page";
import me from "../assets/img/hero-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import Footer from "../components/footer";
import Work from "../components/Work";
import ikbfss from "../assets/workss/ikbf.png";
import aajkaal from "../assets/workss/aajkaal.png";
import ananya from "../assets/workss/ananya.png";
import apai from "../assets/workss/apai.png";
import conclave from "../assets/workss/conclave.png";
import gomobile from "../assets/workss/gomobile.png";
import handyman from "../assets/workss/handyman.png";
import lorabeauty from "../assets/workss/lorabeauty.png";
import onex from "../assets/workss/onex.png";
import tiut from "../assets/workss/tiut.png";
import manchestermobiletyre from "../assets/workss/manchestermobiletyre.png";
import samharo from "../assets/workss/samharo.png";
import snupost from "../assets/workss/snupost.png";
import thewebtrix from "../assets/workss/thewebtrix.png";
function Home() {
  return (
    <>
      <Nav></Nav>
      <Page>
        <div className="hero min-h-screen flex flex-row   px-9 max-lg:flex-col max-lg:pt-32 max-md:px-5 overflow-hidden">
          <div className="hero-text w-3/5 flex flex-col justify-center max-lg:w-full ">
            <h1 className="text-7xl text-stroke-3  mt-5 font-bold max-lg:text-6xl">
              Welcome.
            </h1>
            <h2 className=" text-3xl font-bold dark:text-white max-lg:text-2xl">
              Hello, I'm Abhisek Chowdhury, <br />
              Full Stack Developer Based in Kolkata,India.
            </h2>
            <p className="mt-6 text-lg dark:text-white">
              Full-stack software developer expertise in frontend and backend
              development in cross functional teams.
              <br />
              <strong className=" underline">
                Let's build something remarkable together !
              </strong>
            </p>
            <div className="social mt-9 text-2xl flex flex-row gap-5 dark:text-zinc-400 ">
              <a href="https://twitter.com/Abhisek1927" target="_blank">
                <i class="bi bi-twitter-x text-zinc-500 hover:text-black dark:hover:text-white"></i>
              </a>
              <a href="https://github.com/Abhisek-Chowdhury-19" target="_blank">
                <i class="bi bi-github text-zinc-500 hover:text-black dark:hover:text-white"></i>
              </a>
              <a href="https://www.linkedin.com/in/abhisek-chowdhury-294775210/">
                <i class="bi bi-linkedin text-zinc-500 hover:text-black dark:hover:text-white"></i>
              </a>
            </div>
          </div>
          <div className="hero-img w-2/5 flex justify-center items-center max-lg:w-full max-lg:mt-12">
            <img
              src={me}
              className="w-4/5 rounded-lg rotate-2 drop-shadow-lg max-lg:w-2/4 max-md:w-3/4"
            />
          </div>
        </div>
        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          centeredSlides={true}
          grabCursor={true}
          touchRatio={1}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ overflow: "hidden" }}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            768: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              centeredSlides: true, // Optional: unset centering for larger screens
            },
          }}
        >
          {[
            ikbfss,
            aajkaal,
            ananya,
            apai,
            conclave,
            gomobile,
            handyman,
            lorabeauty,
            onex,
            tiut,
            manchestermobiletyre,
            samharo,
            snupost,
            thewebtrix,
          ].map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></SwiperSlide>
          ))}
        </Swiper>
        <Work />

        <Footer></Footer>
      </Page>
    </>
  );
}

export default Home;
