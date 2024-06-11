import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: `Hanteo's member`,
  description: "한터 | 소개",
};

const MemberDetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      {children}
    </div>
  );
};

export default MemberDetailLayout;
