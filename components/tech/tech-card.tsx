import { convertCategory } from "@/lib/utils";
import Image from "next/image";

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
          <div className="text-rose-300 font-bold text-lg">{_category}</div>
          <div className="relative w-[24px] h-[24px] md:hidden">
            <Image
              src={"/images/1.png"}
              fill
              objectFit="cover"
              alt="member-image"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-md text-slate-600 dark:text-slate-400">
          {subtitle}
        </div>
        <div className="text-sm">{date}</div>

        <div className="flex gap-3 text-sm">
          {tag.map((item, idx) => (
            <div
              key={idx}
              className="rounded-full px-3 py-0.5 bg-slate-300 text-white line-clamp-1 dark:bg-rose-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-[60px] h-[60px] hidden lg:block">
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
