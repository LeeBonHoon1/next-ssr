import { Metadata } from "next";
import Image from "next/image";
// import getMemberDetail from "@/app/(route)/member/[memberId]/actions";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import MemberInfoHoverCard from "@/components/hover-card";
import { HANTEO_MEMBERS } from "@/constants/member-info";

export const metadata: Metadata = {
  title: `Hanteo's member`,
  description: "한터 | 소개",
};

const MemberDetailPage = async ({
  params,
}: {
  params: {
    memberId: string;
  };
}) => {
  const { memberId } = params ?? {};
  const filterMember = HANTEO_MEMBERS.filter(
    (item) => item.id === Number(memberId)
  );

  return (
    <div className="pt-40 px-12 md:px-24 flex flex-col items-center md:flex-row md:justify-evenly">
      {filterMember.length > 0 ? (
        filterMember.map((member) => (
          <div key={member.id} className="flex flex-col">
            <div className="relative w-[260px] h-[260px] md:w-[440px] md:h-[240px] m-auto">
              <Image
                src={"/images/1.png"}
                alt="member-image"
                priority
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="items-center justify-between md:flex-col md:inline-block">
              <div className="pt-5 flex items-center justify-end gap-1">
                <div className="font-bold text-2xl">{member.name}</div>
                <div className="text-md text-slate-500 dark:text-slate-300">
                  {member.role}
                </div>
              </div>
              <MemberInfoHoverCard member={member} />
            </div>
            <Separator className="my-4 h-1 dark:bg-slate-300" />
            <div>
              {member?.stack.map((stack, idx) => (
                <Badge
                  key={idx}
                  className="px-2 py-1 m-1 text-[10px] dark:bg-rose-300 dark:text-white"
                >
                  {stack}
                </Badge>
              ))}
              <div className="py-10">{member.info}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No member found</div>
      )}
    </div>
  );
};

export default MemberDetailPage;
