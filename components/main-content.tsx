"use client";

import { useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import routerStore from "@/store";

import Post from "@/components/post/post";
import Member from "@/components/member";
import Techs from "@/components/tech/tech";
import { useUser } from "@clerk/nextjs";

export default function MainContentPage() {
  const { currentRouter } = routerStore();
  const { width, height } = useWindowSize();
  const { isLoaded } = useUser();

  useEffect(() => {
    if (currentRouter === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentRouter]);

  return (
    <main className="pb-24 px-2 lg:px-48 xl-96 2xl:px-[600px]">
      {currentRouter === "/" ? (
        <div className="space-y-10">
          <Member />
          <Post />
        </div>
      ) : (
        <Techs />
      )}
      {isLoaded && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
        />
      )}
    </main>
  );
}
