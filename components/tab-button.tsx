"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  return (
    <button onClick={selectTab} className="mr-3">
      <p
        className={cn(
          "font-semibold text-slate-500 hover:font-bold dark:text-slate-300 text-[14px] lg:text-[18px]",
          active && "text-black dark:text-white"
        )}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-rose-300 mt-2"
      />
    </button>
  );
};

export default TabButton;
