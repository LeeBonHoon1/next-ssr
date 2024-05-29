import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { UserButton, SignOutButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

const MobileNavbar = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <div className="md:hidden w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <header className="flex justify-between items-center">
            <Link href={"/"} className="font-bold text-lg">
              Hanteo Tech Blog
            </Link>
            <div className="flex items-center gap-3">
              <div>{isLogin && <UserButton />}</div>
              <AccordionTrigger isNav={true}>
                <h3 className="line-clamp-1">
                  <AlignJustify className="w-6 h-6" />
                </h3>
              </AccordionTrigger>
            </div>
          </header>
          <AccordionContent>
            <div className="flex flex-col gap-3 text-md font-bold py-2">
              <Link href={"https://hanteochart.com"} target="_black">
                회사소개
              </Link>
              <Link href={"https://hanteochart.com"} target="_black">
                인재영입
              </Link>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-end gap-3 z-[999999]">
              <SignOutButton>로그아웃</SignOutButton>
              <ModeToggle />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileNavbar;
