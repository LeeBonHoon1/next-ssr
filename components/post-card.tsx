import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
}

const PostCard = ({ id, title, description }: PostCardProps) => {
  return (
    <article
      className="p-3 border border-1 border-slate-300 rounded-2xl shadow-lg"
      aria-labelledby={`post-title-${id}`}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <header>
              <h3 id={`post-title-${id}`} className="line-clamp-1 text-lg">
                {title}
              </h3>
            </header>
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default PostCard;
