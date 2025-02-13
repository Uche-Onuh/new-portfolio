import React, { useState, useEffect } from "react";
import { portfolios } from "../../constants";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [data, setData] = useState(portfolios);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const showLessHandler = () => {
    setNextItems((prev) => prev - 6);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setData(portfolios);
    }

    if (selectTab === "web-dev") {
      const filteredData = portfolios.filter(
        (item) => item.category === "Web Development"
      );
      setData(filteredData);
    }

    if (selectTab === "e-commerce") {
      const filteredData = portfolios.filter(
        (item) => item.category === "E-commerce"
      );
      setData(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap mb-10">
          <div className="mb-2 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              className="text-smallTextColor border border-solid border-smallTextColor 
            py-2 px-4 rounded-[8px]"
              onClick={() => {
                setSelectTab("all");
              }}
            >
              All
            </button>
            <button
              className="text-smallTextColor border border-solid border-smallTextColor 
            py-2 px-4 rounded-[8px]"
              onClick={() => {
                setSelectTab("e-commerce");
              }}
            >
              E-commerce
            </button>
            <button
              className="text-smallTextColor border border-solid border-smallTextColor 
            py-2 px-4 rounded-[8px]"
              onClick={() => {
                setSelectTab("web-dev");
              }}
            >
              Web Development
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {data?.slice(0, nextItems)?.map((item) => (
            <div
              key={item.id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] 
                    lg:w-[32.2] relative z-[1] cursor-pointer"
            >
              <figure className="h-[200px]">
                <img
                  className="rounded-[8px] h-[100%]"
                  src={item.imgUrl}
                  alt=""
                />
              </figure>

              <div
                className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 
              z-[5] hidden group-hover:block"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(item.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4
                  rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 ">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4
                  rounded-[8px] font-[500] ease-in duration-200"
            >
              See More
            </button>
          )}

          {nextItems > 6  && (
            <button
              onClick={showLessHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4
                  rounded-[8px] font-[500] ease-in duration-200"
            >
              See Less
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
