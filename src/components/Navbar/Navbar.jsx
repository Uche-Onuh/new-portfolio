import React, { useRef, useEffect } from "react";
import { logo } from "../../assets";

const Navbar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] loading-[80px] flex items-center nav"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =============logo================ */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[50px] h-[50px]">
              <img src={logo} alt="logo" width="100%" />
            </span>
          </div>
          {/* ===============logo end ============== */}
          {/* =============menu start=============== */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className="text-smallTextColor font-[600]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#services"
                  className="text-smallTextColor font-[600]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#portfolio"
                  className="text-smallTextColor font-[600]"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#contact"
                  className="text-smallTextColor font-[600]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* =============menu end=============== */}

          {/* =============menu right=============== */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-smallTextColor font-[600] button__dis
              border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[42px]
               hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i className="ri-send-plane-line"></i>Let's Talk
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
