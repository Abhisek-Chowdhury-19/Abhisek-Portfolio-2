import React from "react";
import Nav from "../components/Nav";
import Page from "../components/page";
import Footer from "../components/footer";
import Pcard from "../components/pcard";
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
import unifest from "../assets/workss/unifest.png";
import snuch from "../assets/workss/snuch.png";
import braintonic from "../assets/workss/braintonic.png";
import thesoumiscanproduct from "../assets/workss/thesoumi.png";
import surge from "../assets/workss/surge.png";
import hana from "../assets/workss/hana.png";
function Project() {
  return (
    <>
      <Nav />
      <Page>
        <div className="project-page min-h-96 flex flex-col justify-center px-8 ">
          <h1 className="text-4xl w-3/5 font-bold dark:text-white max-lg:w-full">
            Things I’ve made trying to put my dent in the universe.
          </h1>
          <h2 className="text-3xl mt-6 dark:text-white">My Projects</h2>
        </div>

        <div className="projects flex flex-row justify-evenly flex-wrap">
          <Pcard>
            <img
              src={ikbfss}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">
              International Kolkata Book Fair
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for International Kolkata Book Fair, a premier
              literary event in Kolkata, India. The website features a
              responsive design, schedules, and maps.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://kolkatabookfair.net/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={ananya}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">Ananya Care</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for Ananya Banerjee, a politician from Ward 109,
              Kolkata. The website showcases her vision, initiatives, and
              achievements.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://ananyacare.in/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={conclave}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">
              SNU Conclave
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for SNU National Conclave, a premier event in
              SNU, showcasing the event schedule, speakers, and registrations.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://conclave.snumcaj.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={snupost}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">SNUPOST</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for SNUPOST, a blogging platform for students of
              SNU, showcasing articles, categories, author profiles, and
              comments.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://snupost.snumcaj.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={unifest}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">
              38th AIU Inter University East Zone Youth Festival
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for Association of Indian University (AIU) 38th
              INTER University East Zone Youth Festival, showcasing the event
              schedule, participating teams, results, and photo gallery.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://unifest.snuniv.ac.in/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={snuch}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">
              SNU Chronicle
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for SNU Media Team, SNU Chronicle, showcasing
              the latest news, articles, and events of SNU.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://www.thesnuchronicle.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={apai}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">
              Association of Professional Academic Institutions
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for the Association of Professional Academic
              Institutions, showcasing their mission, events, and resources.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://apailive.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={surge}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">SNU Surge</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for SNU Surge, a consultancy project run by SNU,
              showcasing their mission, events, and resources.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://surge.snuniv.ac.in/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={samharo}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">SNU Samaroho</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for Samaroho, a Bengali magazine run by SNU,
              showcasing their articles, authors, and issues.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://samaroho.snumcaj.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={aajkaal}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">Aajkaal</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Developed feature pages for Aajkaal, including a variety of
              sections like Magazine, Aajkaal Gallery, and Sunday Special.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://aajkaal.in/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={braintonic}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">Braintonic</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Crafted a website for SNU Comic Club, showcasing their comics,
              events, and resources.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://braintonic.snumcaj.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={tiut}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">
              Techno India University Tripura
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Developed features like student grievance management and admission
              inquiry for Techno India University Tripura.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://tiut.ac.in/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={thesoumiscanproduct}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">
              The Soumi's Can Product
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Redesigned the website from scratch, developed features like
              related products, redesigned the homepage, product categories,
              pinned products, and optimized the website's performance by
              writing optimized queries and implementing caching. The website
              now has a better user experience and loads much faster.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://thesoumiscanproduct.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={hana}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className="font-bold text-3xl dark:text-white">
              The Hana Beauty
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Redesigned the website from scratch, developed features like
              related products, redesigned the homepage, product categories,
              pinned products, and optimized the website's performance by
              writing optimized queries and implementing caching. The website
              now has a better user experience and loads much faster.
            </p>
            <div className="p-links text-xl flex gap-2 dark:text-white mt-3">
              <a href="https://thehanabeauty.com/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <img
              src={thewebtrix}
              alt="International Kolkata Book Fair"
              className="rounded-t-md my-2"
            />
            <h2 className=" font-bold text-3xl dark:text-white">The Webtrix</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Created a comprehensive and responsive website for a leading
              digital marketing company, The Webtrix Limited, showcasing their
              portfolio, services, and client testimonials.
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a href="https://thewebtrix.co.uk/" target="_blank">
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                Link
              </a>
            </div>
          </Pcard>
          <Pcard>
            <h2 className=" font-bold text-3xl dark:text-white">E-Commerce</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Created a Full Stack Ecommerce App Using PHP with Feature Like
              cart system Paypal payment Gateway with user login/logout, order
              history, admin pannel, order Management, Email Alert
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <a
                href="https://github.com/Abhisek-Chowdhury-19/Ecommerce-app-PHP"
                target="_blank"
              >
                <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
                github.com
              </a>
            </div>
          </Pcard>
          <Pcard>
            <h2 className=" font-bold text-3xl dark:text-white">
              Booking System
            </h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Created a Full Stack Ecommerce App Using PHP with Feature Like
              cart system Paypal payment Gateway with user login/logout, order
              history, admin pannel, order Management, Email Alert
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
              github.com
            </div>
          </Pcard>
          <Pcard>
            <h2 className=" font-bold text-3xl dark:text-white">Frontend</h2>
            <p className="mt-1 text-sm dark:text-gray-400">
              Created a Full Stack Ecommerce App Using PHP with Feature Like
              cart system Paypal payment Gateway with user login/logout, order
              history, admin pannel, order Management, Email Alert
            </p>
            <div className="p-links text-xl flex gap-2  dark:text-white mt-3 ">
              <i class="bi bi-link-45deg text-2xl group-hover:text-cyan-600"></i>{" "}
              github.com
            </div>
          </Pcard>
        </div>
        <Footer />
      </Page>
    </>
  );
}

export default Project;
