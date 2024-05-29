"use client";

import Link from "next/link";

import MobileNavbar from "./mobile-navbar";
import WebNavbar from "./web-navbar";

interface NavbarProps {
  userId: string | null;
}

const Navbar = ({ userId }: NavbarProps) => {
  const isLogin = !!userId ?? false;
  return (
    <nav className="py-3 px-4 flex items-center justify-between border-b fixed w-full dark:bg-slate-900 bg-white z-[99999]">
      <MobileNavbar isLogin={isLogin} />
      <WebNavbar isLogin={isLogin} />
    </nav>
  );
};

export default Navbar;