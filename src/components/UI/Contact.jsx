import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.862294462641!2d3.402277275729493!3d6.539068622980685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d3bf476106f%3A0x9decceed9082c911!2s16%20Oloruntoyin%20St%2C%20Oworosoki%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699990884768!5m2!1sen!2sng"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center
          bg-indigo-100 px-4 lg:px-8 py-8"
          >
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor
              text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
