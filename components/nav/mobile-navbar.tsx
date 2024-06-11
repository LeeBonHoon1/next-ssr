import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AlignJustify } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

const MobileNavbar = () => {
  return (
    <div className="sm:hidden w-full">
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <header className="flex justify-between items-center my-auto">
            <Link
              href={"/"}
              className="font-bold text-lg hover:scale-105 transition"
            >
              Hanteo Tech Blog
            </Link>
            <div className="flex items-center gap-3">
              <AccordionTrigger isNav={true}>
                <h3 className="line-clamp-1">
                  <AlignJustify className="w-6 h-6" />
                </h3>
              </AccordionTrigger>
            </div>
          </header>
          <AccordionContent>
            <div className="flex gap-5 text-[16px] font-bold py-2 px-4">
              <Link
                href={"https://hanteochart.com"}
                target="_black"
                className="hover:scale-110 transition"
              >
                회사소개
              </Link>
              <Link
                href={"https://hanteochart.com"}
                target="_black"
                className="hover:scale-110 transition"
              >
                인재영입
              </Link>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-end gap-3 z-[999999]">
              <ModeToggle />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileNavbar;
