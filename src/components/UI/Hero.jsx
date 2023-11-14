import React from "react";
import { hero2 } from "../../assets";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ============hero left content================= */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Uche Onuh <br /> Front-end Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i className="ri-mail-line">Hire me</i>
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              deserunt dolorum dolore, molestiae, totam, rerum est voluptatibus
              illo deleniti consequatur id accusamus iure incidunt. Adipisci
              veritatis possimus cum dolore tempore.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/uche-onuh-3a5504200/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Uche-Onuh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/_blazzzze"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/justuche/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ===============hero left end================= */}
          {/* ===============hero img======================== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={hero2} alt="Onuh Uche" />
            </figure>
          </div>
          {/* ===============hero img end======================== */}
          {/* ==============hero content right===================== */}
          {/* ==============hero content right end===================== */}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={20} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
