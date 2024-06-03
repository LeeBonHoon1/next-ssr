import { PropsWithChildren } from "react";

const MemberDetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      {children}
    </div>
  );
};

export default MemberDetailLayout;
