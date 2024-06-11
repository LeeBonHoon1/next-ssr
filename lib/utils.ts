import React from "react";
import parse, {
  domToReact,
  attributesToProps,
  Element,
  HTMLReactParserOptions,
  DOMNode,
} from "html-react-parser";
import { decode } from "html-entities";

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

export const parseHtmlContent = (htmlContent: string) => {
  const decodedHtmlContent = decode(htmlContent);

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element) {
        if (domNode.name === "img") {
          const props = attributesToProps(domNode.attribs);
          return React.createElement("img", props);
        }
        if (domNode.attribs && domNode.attribs.style) {
          const style = domNode.attribs.style;
          const updatedStyle = style
            .split(";")
            .filter((rule) => {
              const [property, value] = rule
                .split(":")
                .map((str) => str.trim());
              return !(property === "color" && value === "#000000");
            })
            .join(";");
          if (updatedStyle) {
            domNode.attribs.style = updatedStyle;
          } else {
            delete domNode.attribs.style;
          }

          const props = attributesToProps(domNode.attribs);
          return React.createElement(
            domNode.name,
            props,
            domToReact(domNode.children as DOMNode[], options)
          );
        }
      }
    },
  };

  return parse(decodedHtmlContent, options);
};
