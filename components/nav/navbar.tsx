"use client";

import MobileNavbar from "./mobile-navbar";
import WebNavbar from "./web-navbar";

const Navbar = () => {
  return (
    <nav className="fixed w-full py-1 md:py-3 px-4 flex items-center justify-between border-b dark:bg-slate-900 bg-white z-[99999] antialiased">
      <MobileNavbar />
      <WebNavbar />
    </nav>
  );
};

export default Navbar;
