import React from "react";
import Nav from "../components/Nav";
import Page from "../components/page";
import me from "../assets/img/hero-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import Footer from "../components/footer";
import Work from "../components/Work";
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
          slidesPerView={6}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ overflow: "hidden" }}
        >
          {[
            "https://picsum.photos/id/1015/200/300",
            "https://picsum.photos/id/1016/200/300",
            "https://picsum.photos/id/1017/200/300",
            "https://picsum.photos/id/1018/200/300",
            "https://picsum.photos/id/1019/200/300",
            "https://picsum.photos/id/1020/200/300",
            "https://picsum.photos/id/1021/200/300",
            "https://picsum.photos/id/1022/200/300",
            "https://picsum.photos/id/1023/200/300",
            "https://picsum.photos/id/1024/200/300",
          ].map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
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
