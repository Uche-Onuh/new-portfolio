import React from "react";
import { logo } from "../../assets";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/*=============== footer top ================ */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor text-white font-[500] flex items-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                <i className="ri-mail-line">Hire me</i>
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              eaque nemo blanditiis. Illo ratione totam nemo ad quidem suscipit,
              veritatis ipsa dignissimos tempora atque omnis explicabo,
              doloremque natus quam amet.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me
              </span>

              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center
               "
              >
                <a
                  href="https://github.com/Uche-Onuh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>

              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center
               "
              >
                <a
                  href="https://www.linkedin.com/in/uche-onuh-3a5504200/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center
               "
              >
                <a
                  href="https://twitter.com/_blazzzze"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </span>

              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center
               "
              >
                <a
                  href="https://www.instagram.com/justuche/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*=============== footer top end ================ */}

      {/* =============== footer bottom ================ */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px] ">
                <img src={logo} alt="logo" className="w-[35px] h-[35px]" />
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[10px] ">
                    Uche
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>

            <div className="text-gray-400 text-[14px] ">
              Copyright {year} by Uche - All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
