import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const WebNavbar = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <div className="hidden md:flex gap-3 items-center w-full justify-between">
      <Link href={"/"} className="font-bold text-lg">
        Hanteo Tech Blog
      </Link>
      <div className="flex gap-3 text-sm font-bold items-center">
        <Link href={"https://hanteochart.com"} target="_black">
          회사소개
        </Link>
        <Link href={"https://hanteochart.com"} target="_black">
          인재영입
        </Link>
        <ModeToggle />
        {isLogin && <UserButton afterSignOutUrl="/" />}
      </div>
    </div>
  );
};

export default WebNavbar;
