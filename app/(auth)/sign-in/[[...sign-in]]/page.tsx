import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full py-24">
      <SignIn />
    </div>
  );
}
