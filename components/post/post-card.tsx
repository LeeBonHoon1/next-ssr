import React from "react";
import parse, {
  domToReact,
  attributesToProps,
  Element,
  HTMLReactParserOptions,
  DOMNode,
} from "html-react-parser";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { description as test } from "@/constants/member-info";

interface PostCardProps {
  id: number;
  title: string;
  description?: string;
}

const PostCard = ({ id, title }: PostCardProps) => {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style
      ) {
        const style = domNode.attribs.style;
        const updatedStyle = style
          .split(";")
          .filter((rule) => {
            const [property, value] = rule.split(":").map((str) => str.trim());
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
    },
  };
  const parseHtml = parse(test, options);
  return (
    <article
      className="p-3 border border-1 border-slate-300 dark:border-slate-500 rounded-2xl shadow-lg"
      aria-labelledby={`post-title-${id}`}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <header>
              <h3
                id={`post-title-${id}`}
                className="line-clamp-1 text-lg antialiased"
              >
                {title}
              </h3>
            </header>
          </AccordionTrigger>
          <AccordionContent className="antialiased relative">
            {parseHtml}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default PostCard;
