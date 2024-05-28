"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface NavbarProps {
  userId: string | null;
}

const Navbar = ({ userId }: NavbarProps) => {
  const isLogin = !!userId ?? false;
  return (
    <nav className="py-5 px-4 flex items-center justify-between border-b">
      <Link href={"/"}>Logo</Link>
      <div className="flex gap-3 items-center">
        {isLogin && <UserButton afterSignOutUrl="/" />}
      </div>
    </nav>
  );
};

export default Navbar;
