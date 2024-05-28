import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomeLayout = ({ children }: PropsWithChildren) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");
  return (
    <div>
      <Navbar userId={userId} />
      {children}
    </div>
  );
};

export default HomeLayout;
