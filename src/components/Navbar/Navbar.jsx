import React from "react";
import { logo } from "../../assets";

const Navbar = () => {
  return (
    <header className="w-full h-[80px] loading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =============logo================ */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[50px] h-[50px]">
              <img src={logo} alt="logo" width="100%" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
