import React from "react";
import Card from "../components/card";
import html from "../assets/img/logo/html.png";
import css from "../assets/img/logo/css.png";
import js from "../assets/img/logo/js.png";
import tailwind from "../assets/img/logo/tailwind.png";
import sql from "../assets/img/logo/mysql.png";
import react from "../assets/img/logo/react.png";
import php from "../assets/img/logo/php.png";
import mycv from "../assets/abhisek_CV.pdf";
function Work() {
  return (
    <>
      <div className="what-i-know min-h-80 px-9 mt-9 flex flex-row flex-wrap">
        <div className="skills w-3/6 max-lg:w-full">
          <h1 className="text-3xl font-bold dark:text-white">
            What I Know<span className="text-cyan-500">.</span>
          </h1>
          <Card>
            <h2 className="text-lg dark:text-white">Frontend</h2>
            <div className="showcase flex gap-3 flex-wrap">
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={html} className="w-9 object-scale-down" alt="" /> HTML
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={css} className="w-9 object-scale-down" alt="" /> CSS
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={js} className="w-9 object-scale-down" alt="" />{" "}
                JavaScript
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={react} className="w-9 object-scale-down" alt="" />{" "}
                React Js
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={tailwind} className="w-9 object-scale-down" alt="" />{" "}
                Tailwind CSS
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                  className="w-9 object-scale-down"
                  alt=""
                />{" "}
                Bootstrap
              </div>
            </div>
          </Card>
          <Card>
            <h2 className="text-lg dark:text-white">Database</h2>
            <div className="showcase flex gap-3 flex-wrap">
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={sql} className="w-9 object-scale-down" alt="" /> Mysql
              </div>

              <div className="skillset flex gap-2 dark:text-white p-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  className="w-9 object-scale-down"
                  alt=""
                />{" "}
                Mongo DB
              </div>
            </div>
          </Card>
          <Card>
            <h2 className="text-lg dark:text-white">Backend</h2>
            <div className="showcase flex gap-3 flex-wrap">
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img src={php} className="w-9 object-scale-down" alt="" /> PHP
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="w-9 object-scale-down"
                  alt=""
                />{" "}
                Node.js
              </div>
              <div className="skillset flex gap-2 dark:text-white p-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  className="w-9 object-scale-down"
                  alt=""
                />{" "}
                Express
              </div>
            </div>
          </Card>
        </div>
        <div className="work w-3/6 max-lg:w-full">
          <h1 className="text-3xl font-bold  dark:text-white">
            Work<span className="text-cyan-500">.</span>
          </h1>
          <div className="card py-4 px-4 rounded-lg drop-shadow-lg mt-6 w-3/2 bg-slate-200 dark:bg-zinc-800">
            <img
              src="https://www.snuniv.ac.in/assets/images/logo-wide.png"
              className="w-[100px] my-4  object-contain"
              alt=""
            />
            <div className="workdata flex flex-row justify-between flex-wrap">
              <h2 className="text-lg w-6/12 font-bold dark:text-white">
                Sister Nivedita University || Techno India Group
              </h2>
              <h2 className="text-sm w-6/12 text-right font-bold dark:text-white">
                April 2024 - Present
              </h2>
              <h2 className="font-semibold mt-4 dark:text-white">
                Full Stack Developer
              </h2>
            </div>
            <br />
            <br />
            <img
              src="https://thewebtrix.co.uk/assets/twt-8132f007.png"
              className="w-[100px] my-4  object-contain"
              alt=""
            />
            <div className="workdata flex flex-row justify-between flex-wrap">
              <h2 className="text-lg w-6/12 font-bold dark:text-white">
                The Webtrix Limited
              </h2>
              <h2 className="text-sm w-6/12 text-right font-bold dark:text-white">
                March 2023 - March 2024
              </h2>
              <h2 className="font-semibold mt-4 dark:text-white">
                Full Stack Developer
              </h2>
            </div>

            <br />
            <br />
            <div className="workdata flex flex-row justify-between flex-wrap">
              <a
                href={mycv}
                download
                className="download w-full rounded-lg text-center border p-2 mt-5 border-white dark:text-white"
              >
                Download CV <i class="bi bi-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
