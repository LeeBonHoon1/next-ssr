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
import { parseHtmlContent } from "@/lib/utils";

interface PostCardProps {
  id: number;
  title: string;
  description?: string;
  content: any;
}

const PostCard = ({ id, content }: PostCardProps) => {
  const parseHTML = parseHtmlContent(content.contents);
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
                className="line-clamp-1 text-[16px] antialiased"
              >
                {content?.postTitle || ""}
              </h3>
            </header>
          </AccordionTrigger>
          <AccordionContent className="antialiased">
            {parseHTML}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default PostCard;
