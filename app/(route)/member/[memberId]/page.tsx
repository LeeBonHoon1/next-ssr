import Image from "next/image";
import { Metadata } from "next";
import getMemberDetail from "@/app/(route)/member/[memberId]/actions";

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
  // const member = await getMemberDetail(memberId ?? "1");

  return (
    <div className="pt-40 px-12 md:px-24 flex flex-col items-center md:flex-row md:justify-evenly">
      <div className="relative w-[200px] h-[200px]">
        <Image
          src={"/images/1.png"}
          alt="member-image"
          priority
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div>
        {/* {Object.entries(member).map(([key, value]) => (
          <div key={key}>
            {key}: {Array.isArray(value) ? value.join(", ") : value}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default MemberDetailPage;
