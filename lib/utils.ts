import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertCategory = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    e: "Design",
    i: "Server",
    m: "Web",
    v: "Product",
    G: "Business",
    r: "ETC",
    n: "Android",
    l: "Tool",
    I: "Ios",
  };

  return categoryMap[category] || category;
};
