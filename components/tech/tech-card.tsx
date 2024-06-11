import { convertCategory } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface TechCardProps {
  title: string;
  subtitle: string;
  date: string;
  tag: string[];
  category: string;
}

const TechCard = ({ title, subtitle, date, tag, category }: TechCardProps) => {
  const _category = convertCategory(category);
  return (
    <div className="border-b-2 py-10 space-y-3 flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="text-rose-300 font-bold text-[16px] antialiased">
            {_category}
          </div>
          <div className="relative w-[24px] h-[24px] lg:hidden">
            <Image
              src={"/images/1.png"}
              fill
              objectFit="cover"
              alt="member-image"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-2xl font-bold antialiased">{title}</div>
        <div className="text-[16px] text-slate-600 dark:text-slate-300 antialiased">
          {subtitle}
        </div>
        <div className="text-[14px] antialiased font-bold text-slate-400">
          {date}
        </div>

        {tag.length > 0 && (
          <div className="flex gap-3 text-sm items-center">
            {tag.slice(0, 2).map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-full px-3 py-0.5 text-[12px] md:text-[14px] font-bold bg-slate-300 text-slate-700 line-clamp-1 truncate dark:bg-rose-300 dark:text-white antialiased"
                >
                  <div>{item}</div>
                </div>
              );
            })}
            <div>
              {tag.length >= 2 && tag.length - 2 !== 0 && (
                <Badge className="bg-rose-300 dark:text-white">
                  +{tag.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="relative w-[80px] h-[80px] hidden lg:block">
        <Image
          src={"/images/1.png"}
          fill
          objectFit="cover"
          alt="member-image"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default TechCard;
